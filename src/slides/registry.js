import { openingById, openingSlides } from './opening/index.js';
import { slideById as section1ById, slides as section1Slides } from './section-1/index.js';
import { slideById as section2ById, slides as section2Slides } from './section-2/index.js';

/**
 * Единый поиск слайда по id во всех секциях.
 * Возвращает запись { id, type, title, subblock, component, hasNotes, ... } или null.
 */
export function findSlide(id) {
  return openingById[id] || section1ById[id] || section2ById[id] || null;
}

/**
 * Полный список всех слайдов проекта (открытие + Секция 1 + Секция 2).
 */
export const allSlides = [...openingSlides, ...section1Slides, ...section2Slides];

/**
 * К какой части относится слайд (для роутинга/навигации, если понадобится).
 */
export function sectionOf(id) {
  if (openingById[id]) return 'opening';
  if (section1ById[id]) return 'section-1';
  if (section2ById[id]) return 'section-2';
  return null;
}
