import Slide01 from './Slide01.jsx';
import Slide02 from './Slide02.jsx';
import Slide03 from './Slide03.jsx';
import Slide04 from './Slide04.jsx';
import Slide05 from './Slide05.jsx';

/**
 * Реестр открывающих слайдов (01–05).
 * Тот же контракт что у Секции 1: id, type, title, subblock, component, hasNotes.
 */

const slide = (id, type, title, subblock, component, hasNotes = false) => ({
  id,
  type,
  title,
  subblock,
  component,
  done: true,
  hasNotes,
  keystone: false,
});

export const openingSlides = [
  slide('01', 'E', 'Титул', 'Открытие', Slide01, true),
  slide('02', 'C', 'Карта дня', 'Открытие', Slide02, true),
  slide('03', 'B', 'Цели · Секция 1', 'Открытие', Slide03, true),
  slide('04', 'B', 'Цели · Секция 2', 'Открытие', Slide04, false),
  slide('05', 'B', 'Цели · Секция 3', 'Открытие', Slide05, false),
];

export const openingById = Object.fromEntries(openingSlides.map((s) => [s.id, s]));
