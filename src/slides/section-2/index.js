/**
 * Реестр всех слайдов Секции 2 (46–84).
 * Часть IV «Какие бывают модели» (46–53) · Часть V «Как пользоваться
 * моделями» (54–84). Часть V — 5 блоков: что решает сразу · результат
 * в файл · промт · инструменты вживую · галлюцинации и разброс.
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

  // ── Часть V · Как пользоваться моделями (54–84)
  ready('54', 'A', 'Как пользоваться моделями', '5.0 Заставка', Slide54, { hasNotes: false }),

  // Блок 1 · Что модель решает сразу
  ready('55', 'B', 'Что модель решает сразу', '5.1 Что решает сразу', Slide55),
  ready('56', 'C', 'Перевести', '5.1 Что решает сразу', Slide56),
  ready('57', 'C', 'Сократить', '5.1 Что решает сразу', Slide57),
  ready('58', 'C', 'Переформулировать', '5.1 Что решает сразу', Slide58),
  ready('59', 'C', 'Формализовать', '5.1 Что решает сразу', Slide59),
  ready('60', 'C', 'Объяснить', '5.1 Что решает сразу', Slide60),
  ready('61', 'C', 'Извлечь', '5.1 Что решает сразу', Slide61),
  ready('62', 'C', 'Проверить', '5.1 Что решает сразу', Slide62),
  ready('63', 'C', 'Черновик', '5.1 Что решает сразу', Slide63),

  // Блок 1б · Результат в нужном формате
  ready('64', 'C', 'Markdown', '5.2 Результат в файл', Slide64),
  ready('65', 'D', 'Word · Excel · PowerPoint', '5.2 Результат в файл', Slide65),

  // Блок 2 · Промт: из чего собран
  ready('66', 'B', 'Промт — это инструкция', '5.3 Промт', Slide66),
  ready('67', 'C', 'Состав хорошего промта', '5.3 Промт', Slide67),
  ready('68', 'C', 'Роль', '5.3 Промт', Slide68),
  ready('69', 'C', 'Задача и контекст', '5.3 Промт', Slide69),
  ready('70', 'C', 'Формат и критерии', '5.3 Промт', Slide70),
  ready('71', 'C', 'Примеры (few-shot)', '5.3 Промт', Slide71),
  ready('72', 'D', 'Плохой → хороший', '5.3 Промт', Slide72),

  // Блок 3 · Инструменты вживую
  ready('73', 'C', 'Perplexity — поиск с источниками', '5.4 Инструменты вживую', Slide73),
  ready('74', 'C', 'Perplexity — фокус и файлы', '5.4 Инструменты вживую', Slide74),
  ready('75', 'C', 'ChatGPT — генерация изображения', '5.4 Инструменты вживую', Slide75),
  ready('76', 'C', 'ChatGPT — проекты и память', '5.4 Инструменты вживую', Slide76),
  ready('77', 'C', 'Claude — профиль и настройки', '5.4 Инструменты вживую', Slide77),
  ready('78', 'C', 'Claude — артефакты и визуализация', '5.4 Инструменты вживую', Slide78),
  ready('79', 'C', 'Claude — интерактив и скиллы', '5.4 Инструменты вживую', Slide79),
  ready('80', 'C', 'DeepSeek — режим рассуждения', '5.4 Инструменты вживую', Slide80),

  // Блок 4 · Галлюцинации и соглашательство вживую
  ready('81', 'C', 'Галлюцинация вживую', '5.5 Галлюцинации и разброс', Slide81),
  ready('82', 'C', 'Соглашательство вживую', '5.5 Галлюцинации и разброс', Slide82),
  ready('83', 'C', 'Температура — разброс ответа', '5.5 Галлюцинации и разброс', Slide83),
  ready('84', 'B', 'Когда разброс полезен', '5.5 Галлюцинации и разброс', Slide84),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. 'IV' (46–53) | 'V' (54–84).
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
    title: 'Как пользоваться моделями',
    range: [54, 84],
  },
};
