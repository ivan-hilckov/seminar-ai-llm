# 1. Деплой через Dokploy Compose, конфиг в репозитории приложения

Дата: 2026-06-17
Статус: принято

## Контекст

Нужно задеплоить слайды семинара на собственный сервер `velvetnet-1` (Dokploy +
Traefik, wildcard `*.heliotik.xyz`). Есть готовая болванка `svc-static`
(`yokeloop/svc-static`) — она запекает **сырой** `site/` (HTML/CSS/JS) в
`nginx:alpine` и деплоится как Dokploy Compose с Traefik-лейблами.

Расхождение: `seminar-ai-llm` — это Vite + React SPA с клиентским роутингом
(`BrowserRouter`, маршруты `/slide/:id`, `/section/1`). Его нельзя «положить в
`site/`» как есть — требуется сборка (`pnpm build` → `dist/`) и SPA-fallback в
nginx.

Рассмотренные варианты размещения деплой-конфига:

1. **В этом же репозитории** — Dockerfile + compose + nginx.conf прямо в
   `seminar-ai-llm`.
2. **Отдельный репо `svc-what-is-llm`**, тянущий исходники через submodule/clone.
3. **Отдельный репо + закоммиченный `dist/`** (чистый статик, как `svc-static`).

## Решение

Деплой-конфиг живёт **в репозитории приложения** (`seminar-ai-llm`):

- **Dockerfile** — multi-stage: стадия сборки на `node:alpine` (`pnpm install`
  через corepack, `pnpm build`) → стадия отдачи на `nginx:1.27-alpine`, в которую
  копируется только `dist/`.
- **nginx.conf** — SPA-fallback `try_files $uri /index.html` (иначе прямой заход
  на `/slide/12` отдаёт 404), плюс кэш-заголовки для хэшированных ассетов.
- **docker-compose.yml** — `build: .`, `expose 80`, без `ports:`, Traefik-лейблы
  с `${SERVICE_DOMAIN}`/`${SERVICE_NAME}`, сеть `dokploy-network` (external),
  лимит памяти. Скопировано из `svc-static`.
- Деплой как тип **Compose** в Dokploy; домен/имя — через Environment.

`svc-what-is-llm` остаётся **именем сервиса в Dokploy**, а не отдельным репо.

Машинно-зависимая часть (домен `llm.heliotik.xyz`, `SERVICE_NAME=llm`) в git не
попадает — задаётся в Dokploy Environment (двухслойная модель сохранена).

## Последствия

- **Плюс:** один источник истины — исходники и способ сборки рядом; push в этот
  репо → автопересборка в Dokploy. Нет рассинхрона submodule/`dist`.
- **Плюс:** соблюдены жёсткие конвенции каталога `svc-*` (Compose + Traefik-лейблы,
  нет host-портов, пиннинг тегов, `dokploy-network`).
- **Минус / расхождение:** репозиторий слайдов теперь содержит инфра-файлы и не
  выглядит как однотипная `svc-*` болванка — будущему читателю это объясняет
  данный ADR. Болванка `svc-static` не переиспользуется напрямую (там нет стадии
  сборки и SPA-fallback).
- **Минус:** сборка идёт на сервере при каждом деплое (Vite-билд в контейнере) —
  для `velvetnet-1` (16 ядер, idle) это незначительно.

## Открытые детали реализации (не часть решения)

- Версия пина `node:*-alpine` в стадии сборки.
- Точные кэш-заголовки в nginx.conf.
- Доступ — публичный, без basic-auth (контент образовательный, секретов нет).
