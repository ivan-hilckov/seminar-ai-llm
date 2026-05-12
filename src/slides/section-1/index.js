import Slide06 from './Slide06.jsx';
import Slide07 from './Slide07.jsx';
import Slide08 from './Slide08.jsx';
import Slide09 from './Slide09.jsx';
import Slide10 from './Slide10.jsx';
import Slide11 from './Slide11.jsx';
import Slide12 from './Slide12.jsx';
import Slide13 from './Slide13.jsx';
import Slide14 from './Slide14.jsx';
import Slide20 from './Slide20.jsx';
import Slide24 from './Slide24.jsx';
import Slide25 from './Slide25.jsx';
import Slide32 from './Slide32.jsx';
import Slide33 from './Slide33.jsx';
import Slide42 from './Slide42.jsx';
import Slide43 from './Slide43.jsx';
import Slide44 from './Slide44.jsx';
import Slide53 from './Slide53.jsx';
import Slide59 from './Slide59.jsx';
import Slide60 from './Slide60.jsx';
import Slide61 from './Slide61.jsx';

/**
 * Реестр всех слайдов Секции 1 (06–61 · 56 слайдов · 90 мин).
 * Источник истины — stuff/md/section-1-map.md.
 * - title — короткий лейбл для карты секции
 * - component — React-компонент или null для черновика
 * - hasNotes — есть ли .md в src/notes/section-1/
 * - keystone — главный тезис, помечается акцентной обводкой
 */

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

const draft = (id, type, title, subblock, extra = {}) => ({
  id,
  type,
  title,
  subblock,
  component: null, // отрендерится через StubSlide
  done: false,
  hasNotes: false,
  keystone: !!extra.keystone,
});

export const slides = [
  // ── Часть I · Откуда взялись современные модели (06–32 · 27 слайдов · ≈ 45 мин)
  ready('06', 'A', 'Откуда взялись современные модели', '1.0 Заставка', Slide06, { hasNotes: false }),

  // 1.1 Т9 на Nokia (07–10)
  ready('07', 'C', 'Помните это?', '1.1 Т9 на Nokia', Slide07),
  ready('08', 'C', 'Как работал Т9', '1.1 Т9 на Nokia', Slide08),
  ready('09', 'E', 'Машина впервые угадала слово', '1.1 Т9 на Nokia', Slide09),
  ready('10', 'D', 'Т9 vs LLM', '1.1 Т9 на Nokia', Slide10),

  // 1.2 Автозаполнение (11–13)
  ready('11', 'C', 'Smart Compose в Gmail', '1.2 Автозаполнение', Slide11),
  ready('12', 'C', 'Автодополнение в поиске', '1.2 Автозаполнение', Slide12),
  ready('13', 'E', 'Машина научилась достраивать фразы', '1.2 Автозаполнение', Slide13, { hasNotes: false }),

  // 1.3 От Transformer до GPT-3 (14–21)
  ready('14', 'C', '2017: Transformer · Attention Is All You Need', '1.3 От Transformer до GPT-3', Slide14),
  draft('15', 'C', 'Attention: каждое слово смотрит на каждое', '1.3 От Transformer до GPT-3'),
  draft('16', 'D', '2018: GPT-1 · последовательно vs всё сразу', '1.3 От Transformer до GPT-3'),
  draft('17', 'C', '2019: GPT-2 · 40 ГБ Reddit, 1.5B параметров', '1.3 От Transformer до GPT-3'),
  draft('18', 'C', 'Линия GPT · рост параметров', '1.3 От Transformer до GPT-3'),
  draft('19', 'B', 'Emergent abilities · внезапные способности', '1.3 От Transformer до GPT-3'),
  ready('20', 'E', '175 миллиардов параметров', '1.3 От Transformer до GPT-3', Slide20, { hasNotes: false }),
  draft('21', 'B', 'Метафора попугая · статистика, не понимание', '1.3 От Transformer до GPT-3'),

  // 1.4 ChatGPT 2022 (22–25)
  draft('22', 'C', '30 ноября 2022 · первый интерфейс', '1.4 ChatGPT 2022'),
  draft('23', 'C', 'RLHF · схема обучения', '1.4 ChatGPT 2022'),
  ready('24', 'E', '100 миллионов пользователей за 2 месяца', '1.4 ChatGPT 2022', Slide24, { hasNotes: false }),
  ready('25', 'E', 'Текст превратился в диалог', '1.4 ChatGPT 2022', Slide25, { hasNotes: false }),

  // 1.5 Думающие модели (26–30)
  draft('26', 'B', '2024–2025 · o1, R1, GPT-5', '1.5 Думающие модели'),
  draft('27', 'C', 'Chain of Thought · скрин с <think>', '1.5 Думающие модели'),
  draft('28', 'D', 'Выскочка vs студент с черновиком', '1.5 Думающие модели'),
  draft('29', 'D', 'Что меняется · обычная vs думающая', '1.5 Думающие модели'),
  draft('30', 'D', 'Ловушка · выше галлюцинации (R1 vs V3)', '1.5 Думающие модели'),

  // 1.6 Главный вывод (31–32)
  draft('31', 'C', 'Линия времени · Т9 → R1', '1.6 Главный вывод'),
  ready('32', 'E', 'Это не интеллект. Это статистика.', '1.6 Главный вывод', Slide32, { hasNotes: false, keystone: true }),

  // ── Часть II · Что происходит при ответе (33–42 · 10 слайдов · ≈ 25 мин)
  ready('33', 'A', 'Как это работает внутри', '2.0 Заставка', Slide33, { hasNotes: false }),

  // 2.1 Векторы смыслов (34–36)
  draft('34', 'B', 'Откуда модель знает, что врач и доктор близки?', '2.1 Векторы смыслов'),
  draft('35', 'C', 'Слова в пространстве · визуализация кластеров', '2.1 Векторы смыслов'),
  draft('36', 'B', 'Близость = смысл', '2.1 Векторы смыслов'),

  // 2.2 Контекст и память (37–40)
  draft('37', 'C', 'Что такое контекст · схема', '2.2 Контекст и память'),
  draft('38', 'E', '128 000 токенов ≈ 200 страниц', '2.2 Контекст и память'),
  draft('39', 'D', 'Между чатами — пусто', '2.2 Контекст и память'),
  draft('40', 'C', 'Память (Memory) — отдельная функция', '2.2 Контекст и память'),

  // 2.3 Обучение и заморозка (41–42)
  draft('41', 'B', 'После релиза — модель заморожена', '2.3 Обучение и заморозка'),
  ready('42', 'E', 'Ваши вопросы её не меняют', '2.3 Обучение и заморозка', Slide42, { hasNotes: false }),

  // ── Часть III · Важные особенности (43–56 · 14 слайдов · ≈ 20 мин)
  ready('43', 'A', 'Важные особенности', '3.0 Заставка', Slide43, { hasNotes: false }),

  // 3.1 Данные и приватность (44–46)
  ready('44', 'E', 'Куда уходят ваши запросы?', '3.1 Данные и приватность', Slide44, { hasNotes: false }),
  draft('45', 'C', 'Облачно vs локально', '3.1 Данные и приватность'),
  draft('46', 'C', 'Как отключить обучение · скрин toggle', '3.1 Данные и приватность'),

  // 3.2 Память и контекст в работе (47–48)
  draft('47', 'B', 'Каждый новый чат — с нуля', '3.2 Память и контекст в работе'),
  draft('48', 'B', 'Когда Memory полезна, когда мешает', '3.2 Память и контекст в работе'),

  // 3.3 Доступ к интернету (49–50)
  draft('49', 'C', 'Поиск — отдельная функция · скрин toggle', '3.3 Доступ к интернету'),
  draft('50', 'B', 'Когда включать, когда выключать', '3.3 Доступ к интернету'),

  // 3.4 Точность и галлюцинации (51–54)
  draft('51', 'B', 'Не знает фактов — знает статистику текстов', '3.4 Точность и галлюцинации'),
  draft('52', 'E', 'Живая демонстрация галлюцинации', '3.4 Точность и галлюцинации'),
  ready('53', 'E', 'Доверяй, но проверяй', '3.4 Точность и галлюцинации', Slide53, { hasNotes: false }),
  draft('54', 'D', 'Где проверять обязательно', '3.4 Точность и галлюцинации'),

  // 3.5 Границы применения (55–56)
  draft('55', 'B', 'AI заменяет задачи, не профессии', '3.5 Границы применения'),
  draft('56', 'B', 'Модель читает буквально · мост к Секции 2', '3.5 Границы применения'),

  // ── Закрытие (57–61)
  draft('57', 'C', 'Карта пройденного', 'Закрытие'),
  draft('58', 'E', 'Что мы прошли — главные тезисы', 'Закрытие'),
  ready('59', 'E', 'Перерыв 15 минут', 'Закрытие', Slide59, { hasNotes: false }),
  ready('60', 'E', 'Живая демонстрация · резерв', 'Закрытие', Slide60, { hasNotes: false }),
  ready('61', 'E', 'Q&A', 'Закрытие', Slide61, { hasNotes: false }),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. Возвращает 'I' | 'II' | 'III' | 'closing'.
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 32) return 'I';
  if (n <= 42) return 'II';
  if (n <= 56) return 'III';
  return 'closing';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 * Заголовки совпадают с section-1-map.md.
 */
export const parts = {
  I: {
    label: 'Часть I',
    title: 'Откуда взялись современные модели',
    range: [6, 32],
    time: '≈ 45 мин',
  },
  II: {
    label: 'Часть II',
    title: 'Что происходит при ответе',
    range: [33, 42],
    time: '≈ 25 мин',
  },
  III: {
    label: 'Часть III',
    title: 'Важные особенности',
    range: [43, 56],
    time: '≈ 20 мин',
  },
  closing: {
    label: 'Закрытие',
    title: 'Закрытие секции',
    range: [57, 61],
    time: '≈ 3 мин',
  },
};
