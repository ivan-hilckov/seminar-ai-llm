import { openingById, openingSlides } from './opening/index.js';
import {
  slideById as section1ById,
  slides as section1Slides,
  parts as section1Parts,
  partOf as section1PartOf,
} from './section-1/index.js';
import {
  slideById as section2ById,
  slides as section2Slides,
  parts as section2Parts,
  partOf as section2PartOf,
} from './section-2/index.js';

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

/**
 * Единый поток глав через весь семинар — без деления на секции.
 * Каждая глава: { key, marker, label, title, range, slides }.
 * marker — римская цифра (I…V) или «·» для открытия/закрытия.
 */
function partGroups(slides, parts, partOf) {
  return Object.keys(parts)
    .map((key) => {
      const p = parts[key];
      const marker = p.label?.startsWith('Часть ') ? p.label.slice('Часть '.length) : '·';
      return {
        key,
        marker,
        label: p.label,
        title: p.title,
        range: p.range,
        slides: slides.filter((s) => partOf(s) === key),
      };
    })
    .filter((g) => g.slides.length > 0);
}

const openingRange = openingSlides.length
  ? [Number(openingSlides[0].id), Number(openingSlides[openingSlides.length - 1].id)]
  : [0, 0];

export const chapters = [
  {
    key: 'opening',
    marker: '·',
    label: 'Открытие',
    title: 'Открытие',
    range: openingRange,
    slides: openingSlides,
  },
  ...partGroups(section1Slides, section1Parts, section1PartOf),
  ...partGroups(section2Slides, section2Parts, section2PartOf),
];
