/**
 * Реестр всех слайдов Секции 2 (46–70).
 * Часть IV (46–50) · Часть V (51–70).
 * Слайды 52 и 53 — перенесены из Части III («Как отключить обучение»,
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
import Slide61 from './Slide61.jsx';
import Slide62 from './Slide62.jsx';
import Slide63 from './Slide63.jsx';
import Slide64 from './Slide64.jsx';
import Slide65 from './Slide65.jsx';
import Slide66 from './Slide66.jsx';
import Slide67 from './Slide67.jsx';
import Slide68 from './Slide68.jsx';
import Slide69 from './Slide69.jsx';
import Slide70 from './Slide70.jsx';

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
  // ── Часть IV · Карта инструментов (46–50)
  ready('46', 'A', 'Карта инструментов', '4.0 Заставка', Slide46, { hasNotes: false }),
  ready('47', 'D', 'ChatGPT · Claude · Gemini · DeepSeek', '4.1 Сервисы LLM', Slide47, { hasNotes: false }),
  ready('48', 'D', 'Бесплатное · платное · API', '4.3 Тарифы и API', Slide48, { hasNotes: false }),
  ready('49', 'B', 'Кому что подходит', '4.3 Тарифы и API', Slide49, { hasNotes: false }),
  ready('50', 'D', 'Облако vs локально', '4.4 Облако vs локально', Slide50, { hasNotes: false }),

  // ── Часть V · Как формулировать запросы (51–70)
  ready('51', 'A', 'Как формулировать запросы', '5.0 Заставка', Slide51, { hasNotes: false }),

  // Перед началом (перенесено из Части III)
  ready('52', 'C', 'Как отключить обучение на ваших данных', 'Перед началом', Slide52),
  ready('53', 'B', 'Она понимает буквально — не интуитивно', 'Перед началом', Slide53),

  ready('54', 'C', 'Формула промта', '5.1 Формула промта', Slide54, { hasNotes: false }),
  ready('55', 'C', 'Полный пример по формуле', '5.1 Формула промта', Slide55, { hasNotes: false }),

  ready('56', 'C', 'Литобзор · плохой промт', '5.2 Плохой vs хороший', Slide56, { hasNotes: false }),
  ready('57', 'C', 'Литобзор · хороший промт', '5.2 Плохой vs хороший', Slide57, { hasNotes: false }),
  ready('58', 'C', 'Письмо · плохой промт', '5.2 Плохой vs хороший', Slide58, { hasNotes: false }),
  ready('59', 'C', 'Письмо · хороший промт', '5.2 Плохой vs хороший', Slide59, { hasNotes: false }),
  ready('60', 'C', 'Код · плохой промт', '5.2 Плохой vs хороший', Slide60, { hasNotes: false }),
  ready('61', 'C', 'Код · хороший промт', '5.2 Плохой vs хороший', Slide61, { hasNotes: false }),

  ready('62', 'B', 'Первый ответ — черновик', '5.3 Итерация на редактуре', Slide62, { hasNotes: false }),
  ready('63', 'C', 'Итерация 1 · косметика', '5.3 Итерация на редактуре', Slide63, { hasNotes: false }),
  ready('64', 'C', 'Итерация 2 · роль и критерии', '5.3 Итерация на редактуре', Slide64, { hasNotes: false }),
  ready('65', 'C', 'Итерация 3 · правки маркерами', '5.3 Итерация на редактуре', Slide65, { hasNotes: false }),

  ready('66', 'C', 'Четыре рабочих шаблона', '5.4 Четыре шаблона', Slide66, { hasNotes: false }),
  ready('67', 'C', 'Шаблон · Редактура', '5.4 Четыре шаблона', Slide67, { hasNotes: false }),
  ready('68', 'C', 'Шаблон · Литобзор', '5.4 Четыре шаблона', Slide68, { hasNotes: false }),
  ready('69', 'C', 'Шаблон · Разбор данных', '5.4 Четыре шаблона', Slide69, { hasNotes: false }),
  ready('70', 'C', 'Шаблон · Письма и рецензии', '5.4 Четыре шаблона', Slide70, { hasNotes: false }),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. 'IV' (46–50) | 'V' (51–70).
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 50) return 'IV';
  return 'V';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 */
export const parts = {
  IV: {
    label: 'Часть IV',
    title: 'Карта инструментов',
    range: [46, 50],
  },
  V: {
    label: 'Часть V',
    title: 'Как формулировать запросы',
    range: [51, 70],
  },
};
