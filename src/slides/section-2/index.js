/**
 * Реестр всех слайдов Секции 2.
 * Часть IV (63–69) и Часть V (70–87) реализованы.
 * Часть VI пока не публикуется в реестре — её слайды не отображаются
 * ни на карте, ни в сайдбаре, ни по адресу /slide/XX.
 */

import Slide63 from './Slide63.jsx';
import Slide64 from './Slide64.jsx';
import Slide67 from './Slide67.jsx';
import Slide68 from './Slide68.jsx';
import Slide69 from './Slide69.jsx';

import Slide70 from './Slide70.jsx';
import Slide71 from './Slide71.jsx';
import Slide72 from './Slide72.jsx';
import Slide73 from './Slide73.jsx';
import Slide74 from './Slide74.jsx';
import Slide75 from './Slide75.jsx';
import Slide76 from './Slide76.jsx';
import Slide77 from './Slide77.jsx';
import Slide78 from './Slide78.jsx';
import Slide79 from './Slide79.jsx';
import Slide80 from './Slide80.jsx';
import Slide81 from './Slide81.jsx';
import Slide82 from './Slide82.jsx';
import Slide83 from './Slide83.jsx';
import Slide84 from './Slide84.jsx';
import Slide85 from './Slide85.jsx';
import Slide86 from './Slide86.jsx';
import Slide87 from './Slide87.jsx';

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
  // ── Часть IV · Карта инструментов (63–69)
  // Слайды 65 и 66 (Обычная/Думающая, Когда выбирать какую) убраны —
  // полностью дублировали тему «Думающие модели» из подблока 1.5 Секции 1.
  ready('63', 'A', 'Карта инструментов', '4.0 Заставка', Slide63, { hasNotes: false }),
  ready('64', 'D', 'ChatGPT · Claude · Gemini · DeepSeek', '4.1 Сервисы LLM', Slide64, { hasNotes: false }),
  ready('67', 'D', 'Бесплатное · платное · API', '4.3 Тарифы и API', Slide67, { hasNotes: false }),
  ready('68', 'B', 'Кому что подходит', '4.3 Тарифы и API', Slide68, { hasNotes: false }),
  ready('69', 'D', 'Облако vs локально', '4.4 Облако vs локально', Slide69, { hasNotes: false }),

  // ── Часть V · Как формулировать запросы (70–87)
  ready('70', 'A', 'Как формулировать запросы', '5.0 Заставка', Slide70, { hasNotes: false }),
  ready('71', 'C', 'Формула промта', '5.1 Формула промта', Slide71, { hasNotes: false }),
  ready('72', 'C', 'Полный пример по формуле', '5.1 Формула промта', Slide72, { hasNotes: false }),

  ready('73', 'C', 'Литобзор · плохой промт', '5.2 Плохой vs хороший', Slide73, { hasNotes: false }),
  ready('74', 'C', 'Литобзор · хороший промт', '5.2 Плохой vs хороший', Slide74, { hasNotes: false }),
  ready('75', 'C', 'Письмо · плохой промт', '5.2 Плохой vs хороший', Slide75, { hasNotes: false }),
  ready('76', 'C', 'Письмо · хороший промт', '5.2 Плохой vs хороший', Slide76, { hasNotes: false }),
  ready('77', 'C', 'Код · плохой промт', '5.2 Плохой vs хороший', Slide77, { hasNotes: false }),
  ready('78', 'C', 'Код · хороший промт', '5.2 Плохой vs хороший', Slide78, { hasNotes: false }),

  ready('79', 'B', 'Первый ответ — черновик', '5.3 Итерация на редактуре', Slide79, { hasNotes: false }),
  ready('80', 'C', 'Итерация 1 · косметика', '5.3 Итерация на редактуре', Slide80, { hasNotes: false }),
  ready('81', 'C', 'Итерация 2 · роль и критерии', '5.3 Итерация на редактуре', Slide81, { hasNotes: false }),
  ready('82', 'C', 'Итерация 3 · правки маркерами', '5.3 Итерация на редактуре', Slide82, { hasNotes: false }),

  ready('83', 'C', 'Четыре рабочих шаблона', '5.4 Четыре шаблона', Slide83, { hasNotes: false }),
  ready('84', 'C', 'Шаблон · Редактура', '5.4 Четыре шаблона', Slide84, { hasNotes: false }),
  ready('85', 'C', 'Шаблон · Литобзор', '5.4 Четыре шаблона', Slide85, { hasNotes: false }),
  ready('86', 'C', 'Шаблон · Разбор данных', '5.4 Четыре шаблона', Slide86, { hasNotes: false }),
  ready('87', 'C', 'Шаблон · Письма и рецензии', '5.4 Четыре шаблона', Slide87, { hasNotes: false }),

  // Часть VI (88–102) временно скрыта из реестра — слайды не публикуются.
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. 'IV' (63–69) | 'V' (70–87).
 * Часть VI (88–102) пока не публикуется и не возвращается из реестра.
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 69) return 'IV';
  return 'V';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 */
export const parts = {
  IV: {
    label: 'Часть IV',
    title: 'Карта инструментов',
    range: [63, 69],
  },
  V: {
    label: 'Часть V',
    title: 'Как формулировать запросы',
    range: [70, 87],
  },
};
