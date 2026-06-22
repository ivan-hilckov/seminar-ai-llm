import Slide01 from './Slide01.jsx';

/**
 * Реестр открывающих слайдов. Сейчас только титул (01).
 * Контракт тот же, что у Секции 1: id, type, title, subblock, component, hasNotes.
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
];

export const openingById = Object.fromEntries(openingSlides.map((s) => [s.id, s]));
