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

## Что готово

- [x] Инфраструктура (Vite, React Router, markdown viewer)
- [x] Слайды 07, 08, 09, 10
- [x] Speaker notes 07, 08, 09, 10
- [x] Карта Секции 1 с заглушками для остальных 49 слайдов
- [ ] Слайды 11–58 — добавляются по приоритетам из `CLAUDE.md`
- [ ] Открытие (01–05)

См. `CLAUDE.md` для деталей и приоритетов.
