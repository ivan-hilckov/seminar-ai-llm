/**
 * Реестр всех слайдов Секции 2 (46–60).
 * Часть IV «Какие бывают модели» (46–53) · Часть V (54–60, в переработке).
 * Слайды 55 и 56 — перенесены из Части III («Как отключить обучение»,
 * «Понимает буквально»), идут лид-блоком «Перед началом».
 */

import Slide46 from './Slide46.jsx';
import Slide47 from './Slide47.jsx';
import Slide48 from './Slide48.jsx';
import Slide49 from './Slide49.jsx';
import Slide50 from './Slide50.jsx';
import Slide51 from './Slide51.jsx';
import Slide52 from './Slide52.jsx';
import Slide53 from './Slide53.jsx';

import Slide54 from './Slide54.jsx';
import Slide55 from './Slide55.jsx';
import Slide56 from './Slide56.jsx';
import Slide57 from './Slide57.jsx';
import Slide58 from './Slide58.jsx';
import Slide59 from './Slide59.jsx';
import Slide60 from './Slide60.jsx';

const ready = (id, type, title, subblock, component, extra = {}) => ({
  id,
  type,
  title,
  subblock,
  component,
  done: true,
  hasNotes: extra.hasNotes !== false,
  keystone: !!extra.keystone,
});

export const slides = [
  // ── Часть IV · Какие бывают модели (46–53)
  ready('46', 'A', 'Какие бывают модели', '4.0 Заставка', Slide46, { hasNotes: false }),
  ready('47', 'C', 'Моделей десятки — у каждой свой профиль', '4.1 Карта моделей', Slide47),
  ready('48', 'D', 'Генерация текста — и генерация медиа', '4.2 Текст и медиа', Slide48),
  ready('49', 'C', 'Perplexity', '4.3 Четыре модели', Slide49),
  ready('50', 'C', 'Claude', '4.3 Четыре модели', Slide50),
  ready('51', 'C', 'ChatGPT', '4.3 Четыре модели', Slide51),
  ready('52', 'C', 'DeepSeek', '4.3 Четыре модели', Slide52),
  ready('53', 'D', 'Что у кого есть', '4.4 Свод по моделям', Slide53),

  // ── Часть V · Как формулировать запросы (54–60) · в переработке
  ready('54', 'A', 'Как формулировать запросы', '5.0 Заставка', Slide54, { hasNotes: false }),

  // Перед началом (перенесено из Части III)
  ready('55', 'C', 'Как отключить обучение на ваших данных', 'Перед началом', Slide55),
  ready('56', 'B', 'Она понимает буквально — не интуитивно', 'Перед началом', Slide56),

  ready('57', 'C', 'Формула промта', '5.1 Формула промта', Slide57, { hasNotes: false }),

  ready('58', 'C', 'Шаблон · Литобзор', '5.4 Четыре шаблона', Slide58, { hasNotes: false }),
  ready('59', 'C', 'Шаблон · Разбор данных', '5.4 Четыре шаблона', Slide59, { hasNotes: false }),
  ready('60', 'C', 'Шаблон · Письма и рецензии', '5.4 Четыре шаблона', Slide60, { hasNotes: false }),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. 'IV' (46–53) | 'V' (54–60).
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 53) return 'IV';
  return 'V';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 */
export const parts = {
  IV: {
    label: 'Часть IV',
    title: 'Какие бывают модели',
    range: [46, 53],
  },
  V: {
    label: 'Часть V',
    title: 'Как формулировать запросы',
    range: [54, 60],
  },
};
