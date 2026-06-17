# Семинар «AI и LLM для исследователей»

Слайды для семинара. 13 мая 2026, ФБУ ВНИИЛМ.

Стек: **Vite + React + React Router + pnpm + mise**. Заметки ведущего пишутся в Markdown и рендерятся со стилизацией.

## Быстрый старт

```bash
mise install         # подтянуть node + pnpm по .mise.toml
pnpm install
pnpm dev             # http://localhost:5173/
```

Если mise не установлен — `curl https://mise.run | sh` или см. https://mise.jdx.dev/.

Печать в PDF: открыть `/slide/XX`, Cmd+P → Save as PDF → Layout: Landscape.

## Структура

```
src/
  routes/             # Index, Section1, Slide, Notes
  components/         # Stage, Meta, Foot, MarkdownView
  hooks/useFit.js     # адаптивное масштабирование .slide
  slides/section-1/   # Slide07.jsx ... Slide10.jsx + index.js (реестр)
  notes/section-1/    # slide-07.md, ..., _template.md
  styles/             # global, slide (+ print), prose
public/
  templates/          # статические HTML-референсы A/B/C/D/E
  stuff -> ../stuff   # symlink на референсные материалы
```

## Пять типов слайдов

| Тип | Назначение |
|---|---|
| A | Section divider — крупная римская цифра, название части |
| B | Тезис — одна мысль крупно, без визуала |
| C | Визуал — графика 62% слева + текст 38% справа |
| D | Сравнение — две колонки + опциональный итоговый блок |
| E | Moment — одна фраза или число крупно |

## Маршруты

- `/` — главная (навигация + список готовых слайдов)
- `/section/1` — карта Секции 1 со всеми 53 слайдами
- `/slide/:id` — рендер конкретного слайда (id = 06..58)
- `/notes/:id` — заметки ведущего в стилизованном prose

## Добавить слайд (например, 11)

1. Создать `src/slides/section-1/Slide11.jsx` (скопировать ближайший по типу).
2. В `src/slides/section-1/index.js` заменить `draft('11', …)` на `ready('11', …, Slide11)`.
3. Готово — `/slide/11` появится автоматически, карта обновится.

## Speaker notes

Заметки в `src/notes/section-1/slide-XX.md`. Vite собирает их через `import.meta.glob('*.md', { query: '?raw' })`. Стилизация — в `src/styles/prose.css`. Шаблон — `_template.md`.

## Прод-сборка

```bash
pnpm build           # → dist/ (статика)
pnpm preview         # локальный smoke-test сборки
```

## Деплой (Dokploy)

Слайды деплоятся на сервер `velvetnet-1` через [Dokploy](https://dokploy.com) +
Traefik с автоматическим HTTPS. Конфиг лежит в этом же репозитории:

- `Dockerfile` — multi-stage: сборка на `node:22-alpine` (`pnpm build`) → отдача
  `dist/` из `nginx:1.27-alpine`.
- `nginx.conf` — SPA-fallback `try_files … /index.html` (без него прямой заход на
  `/slide/12` отдал бы 404) + кэш хэшированных ассетов.
- `docker-compose.yml` — `build: .`, без host-портов, роутинг через Traefik-лейблы
  (домен из `${SERVICE_DOMAIN}`), сеть `dokploy-network`.
- `.env.example` — `SERVICE_DOMAIN` / `SERVICE_NAME` (задаются в Dokploy, не в git).

Внутренние материалы (`stuff/`, `public/stuff`) исключены из образа через
`.dockerignore` и публично не отдаются. Подробности и обоснование решения —
в `CONTEXT.md` и `docs/adr/0001-deploy-via-dokploy-compose-in-repo.md`.

### Локальный smoke-test образа

```bash
docker build -t svc-what-is-llm .
docker run --rm -p 8080:80 svc-what-is-llm   # → http://localhost:8080/
# -p только для локальной проверки; в docker-compose.yml host-портов нет
```

### Деплой на Dokploy

1. **Create → Compose** в проекте Dokploy.
2. **Source** = этот репозиторий, ветка `main`, Compose Path `docker-compose.yml`.
3. **Environment** → `SERVICE_DOMAIN=llm.heliotik.xyz`, `SERVICE_NAME=llm`.
4. **Deploy.** Traefik поднимет роутер и выпишет Let's Encrypt-сертификат за
   ~30–60 с. Push в `main` → автопересборка.

## Что готово

- [x] Инфраструктура (Vite, React Router, markdown viewer)
- [x] Слайды 07, 08, 09, 10
- [x] Speaker notes 07, 08, 09, 10
- [x] Карта Секции 1 с заглушками для остальных 49 слайдов
- [ ] Слайды 11–58 — добавляются по приоритетам из `CLAUDE.md`
- [ ] Открытие (01–05)

См. `CLAUDE.md` для деталей и приоритетов.
