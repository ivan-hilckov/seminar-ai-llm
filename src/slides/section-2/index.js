/**
 * Реестр всех слайдов Секции 2.
 * Часть IV (44–48) и Часть V (49–66) реализованы.
 * Часть VI пока не публикуется в реестре — её слайды не отображаются
 * ни на карте, ни в сайдбаре, ни по адресу /slide/XX.
 */

import Slide44 from './Slide44.jsx';
import Slide45 from './Slide45.jsx';
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
  // ── Часть IV · Карта инструментов (44–48)
  // Слайды 65 и 66 (Обычная/Думающая, Когда выбирать какую) убраны —
  // полностью дублировали тему «Думающие модели» из подблока 1.5 Секции 1.
  ready('44', 'A', 'Карта инструментов', '4.0 Заставка', Slide44, { hasNotes: false }),
  ready('45', 'D', 'ChatGPT · Claude · Gemini · DeepSeek', '4.1 Сервисы LLM', Slide45, { hasNotes: false }),
  ready('46', 'D', 'Бесплатное · платное · API', '4.3 Тарифы и API', Slide46, { hasNotes: false }),
  ready('47', 'B', 'Кому что подходит', '4.3 Тарифы и API', Slide47, { hasNotes: false }),
  ready('48', 'D', 'Облако vs локально', '4.4 Облако vs локально', Slide48, { hasNotes: false }),

  // ── Часть V · Как формулировать запросы (49–66)
  ready('49', 'A', 'Как формулировать запросы', '5.0 Заставка', Slide49, { hasNotes: false }),
  ready('50', 'C', 'Формула промта', '5.1 Формула промта', Slide50, { hasNotes: false }),
  ready('51', 'C', 'Полный пример по формуле', '5.1 Формула промта', Slide51, { hasNotes: false }),

  ready('52', 'C', 'Литобзор · плохой промт', '5.2 Плохой vs хороший', Slide52, { hasNotes: false }),
  ready('53', 'C', 'Литобзор · хороший промт', '5.2 Плохой vs хороший', Slide53, { hasNotes: false }),
  ready('54', 'C', 'Письмо · плохой промт', '5.2 Плохой vs хороший', Slide54, { hasNotes: false }),
  ready('55', 'C', 'Письмо · хороший промт', '5.2 Плохой vs хороший', Slide55, { hasNotes: false }),
  ready('56', 'C', 'Код · плохой промт', '5.2 Плохой vs хороший', Slide56, { hasNotes: false }),
  ready('57', 'C', 'Код · хороший промт', '5.2 Плохой vs хороший', Slide57, { hasNotes: false }),

  ready('58', 'B', 'Первый ответ — черновик', '5.3 Итерация на редактуре', Slide58, { hasNotes: false }),
  ready('59', 'C', 'Итерация 1 · косметика', '5.3 Итерация на редактуре', Slide59, { hasNotes: false }),
  ready('60', 'C', 'Итерация 2 · роль и критерии', '5.3 Итерация на редактуре', Slide60, { hasNotes: false }),
  ready('61', 'C', 'Итерация 3 · правки маркерами', '5.3 Итерация на редактуре', Slide61, { hasNotes: false }),

  ready('62', 'C', 'Четыре рабочих шаблона', '5.4 Четыре шаблона', Slide62, { hasNotes: false }),
  ready('63', 'C', 'Шаблон · Редактура', '5.4 Четыре шаблона', Slide63, { hasNotes: false }),
  ready('64', 'C', 'Шаблон · Литобзор', '5.4 Четыре шаблона', Slide64, { hasNotes: false }),
  ready('65', 'C', 'Шаблон · Разбор данных', '5.4 Четыре шаблона', Slide65, { hasNotes: false }),
  ready('66', 'C', 'Шаблон · Письма и рецензии', '5.4 Четыре шаблона', Slide66, { hasNotes: false }),

  // Часть VI (88–102) временно скрыта из реестра — слайды не публикуются.
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. 'IV' (44–48) | 'V' (49–66).
 * Часть VI (88–102) пока не публикуется и не возвращается из реестра.
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 48) return 'IV';
  return 'V';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 */
export const parts = {
  IV: {
    label: 'Часть IV',
    title: 'Карта инструментов',
    range: [44, 48],
  },
  V: {
    label: 'Часть V',
    title: 'Как формулировать запросы',
    range: [49, 66],
  },
};
