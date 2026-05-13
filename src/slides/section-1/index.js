import Slide06 from './Slide06.jsx';
import Slide07 from './Slide07.jsx';
import Slide08 from './Slide08.jsx';
import Slide09 from './Slide09.jsx';
import Slide10 from './Slide10.jsx';
import Slide11 from './Slide11.jsx';
import Slide12 from './Slide12.jsx';
import Slide13 from './Slide13.jsx';
import Slide14 from './Slide14.jsx';
import Slide15 from './Slide15.jsx';
import Slide16 from './Slide16.jsx';
import Slide17 from './Slide17.jsx';
import Slide18 from './Slide18.jsx';
import Slide19 from './Slide19.jsx';
import Slide20 from './Slide20.jsx';
import Slide21 from './Slide21.jsx';
import Slide22 from './Slide22.jsx';
import Slide23 from './Slide23.jsx';
import Slide24 from './Slide24.jsx';
import Slide25 from './Slide25.jsx';
import Slide26 from './Slide26.jsx';
import Slide27 from './Slide27.jsx';
import Slide28 from './Slide28.jsx';
import Slide29 from './Slide29.jsx';
import Slide30 from './Slide30.jsx';
import Slide31 from './Slide31.jsx';
import Slide32 from './Slide32.jsx';
import Slide33 from './Slide33.jsx';
import Slide34 from './Slide34.jsx';
import Slide35 from './Slide35.jsx';
import Slide36 from './Slide36.jsx';
import Slide37 from './Slide37.jsx';
import Slide38 from './Slide38.jsx';
import Slide39 from './Slide39.jsx';
import Slide40 from './Slide40.jsx';
import Slide41 from './Slide41.jsx';
import Slide42 from './Slide42.jsx';
import Slide43 from './Slide43.jsx';
import Slide44 from './Slide44.jsx';
import Slide45 from './Slide45.jsx';
import Slide46 from './Slide46.jsx';
import Slide47 from './Slide47.jsx';
import Slide48 from './Slide48.jsx';
import Slide49 from './Slide49.jsx';
import Slide50 from './Slide50.jsx';
import Slide51 from './Slide51.jsx';

/**
 * Реестр всех слайдов Секции 1 (06–56 · 51 слайд · 90 мин).
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
  ready('15', 'C', 'Attention: каждое слово учитывает контекст', '1.3 От Transformer до GPT-3', Slide15),
  ready('16', 'D', '2018: GPT-1 · последовательно vs всё сразу', '1.3 От Transformer до GPT-3', Slide16),
  ready('17', 'C', '2019: GPT-2 · модель прочитала интернет', '1.3 От Transformer до GPT-3', Slide17),
  ready('18', 'C', 'Линия GPT', '1.3 От Transformer до GPT-3', Slide18),
  ready('19', 'C', 'Emergent abilities', '1.3 От Transformer до GPT-3', Slide19),
  ready('20', 'E', '175 миллиардов параметров', '1.3 От Transformer до GPT-3', Slide20, { hasNotes: false }),
  ready('21', 'B', 'Попугай, прочитавший интернет', '1.3 От Transformer до GPT-3', Slide21),

  // 1.4 ChatGPT 2022 (22–25)
  ready('22', 'C', 'ChatGPT, 30 ноября 2022', '1.4 ChatGPT 2022', Slide22),
  ready('23', 'C', 'RLHF · обучение с обратной связью от человека', '1.4 ChatGPT 2022', Slide23),
  ready('24', 'C', 'За сколько сервисы добирались до 100 миллионов', '1.4 ChatGPT 2022', Slide24),
  ready('25', 'E', 'Текст превратился в диалог', '1.4 ChatGPT 2022', Slide25, { hasNotes: false }),

  // 1.5 Думающие модели (26–30)
  ready('26', 'B', '2024–2025: модели, которые думают', '1.5 Думающие модели', Slide26),
  ready('27', 'C', 'Chain of Thought', '1.5 Думающие модели', Slide27),
  ready('28', 'D', 'Обычная модель vs думающая', '1.5 Думающие модели', Slide28),
  ready('29', 'D', 'Что меняется', '1.5 Думающие модели', Slide29),
  ready('30', 'D', 'У думающих моделей выше галлюцинации', '1.5 Думающие модели', Slide30),

  // 1.6 Главный вывод (31–32)
  ready('31', 'C', 'От слова к рассуждению', '1.6 Главный вывод', Slide31),
  ready('32', 'E', 'Это не интеллект. Это статистика.', '1.6 Главный вывод', Slide32, { keystone: true }),

  // ── Часть II · Что происходит при ответе (33–42 · 10 слайдов · ≈ 25 мин)
  ready('33', 'A', 'Как это работает внутри', '2.0 Заставка', Slide33),

  // 2.1 Векторы смыслов (34–36)
  ready('34', 'B', 'Откуда модель знает, что «врач» и «доктор» близки?', '2.1 Векторы смыслов', Slide34),
  ready('35', 'C', 'Пространство смыслов', '2.1 Векторы смыслов', Slide35),
  ready('36', 'B', 'Близость = смысл', '2.1 Векторы смыслов', Slide36),

  // 2.2 Контекст и память (37–40)
  ready('37', 'C', 'Что такое контекст', '2.2 Контекст и память', Slide37),
  ready('38', 'E', '128 000 токенов ≈ книга среднего объёма', '2.2 Контекст и память', Slide38),
  ready('39', 'D', 'Новый чат — новый лист', '2.2 Контекст и память', Slide39),
  ready('40', 'C', 'Память (Memory) — отдельная функция', '2.2 Контекст и память', Slide40),

  // 2.3 Обучение и заморозка (41–42)
  ready('41', 'B', 'Модель обучают один раз', '2.3 Обучение и заморозка', Slide41),
  ready('42', 'E', 'Ваши вопросы её не меняют', '2.3 Обучение и заморозка', Slide42),

  // ── Часть III · Важные особенности (43–55 · 13 слайдов · ≈ 17 мин)
  ready('43', 'A', 'Особенности в работе', '3.0 Заставка', Slide43),

  // 3.1 Данные и приватность (44–46)
  ready('44', 'E', 'Куда уходят ваши запросы?', '3.1 Данные и приватность', Slide44),
  ready('45', 'D', 'Облачно vs локально', '3.1 Данные и приватность', Slide45),
  ready('46', 'C', 'Как отключить обучение на ваших данных', '3.1 Данные и приватность', Slide46),

  // 3.2 Память и контекст в работе (47)
  ready('47', 'B', 'Когда Память полезна, когда мешает', '3.2 Память и контекст в работе', Slide47),

  // 3.3 Доступ к интернету (48) — слайд «когда включать/выключать» удалён, уходит в speaker notes к 48
  ready('48', 'C', 'Поиск — отдельная функция', '3.3 Доступ к интернету', Slide48),

  // 3.4 Точность и галлюцинации (49–52)
  ready('49', 'B', 'Не знает фактов — знает статистику текстов', '3.4 Точность и галлюцинации', Slide49),
  ready('50', 'D', 'Как выглядит галлюцинация', '3.4 Точность и галлюцинации', Slide50),
  ready('51', 'E', 'Доверяй, но проверяй', '3.4 Точность и галлюцинации', Slide51, { hasNotes: false }),
  draft('52', 'D', 'Где проверять обязательно', '3.4 Точность и галлюцинации'),

  // 3.5 Границы применения (53–54)
  draft('53', 'B', 'AI заменяет задачи, не профессии', '3.5 Границы применения'),
  draft('54', 'B', 'Модель читает буквально · мост к Секции 2', '3.5 Границы применения'),

  // ── Закрытие (55–56)
  draft('55', 'C', 'Карта пройденного', 'Закрытие'),
  draft('56', 'E', 'Что мы прошли — главные тезисы', 'Закрытие'),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. Возвращает 'I' | 'II' | 'III' | 'closing'.
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 32) return 'I';
  if (n <= 42) return 'II';
  if (n <= 54) return 'III';
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
    range: [43, 54],
    time: '≈ 16 мин',
  },
  closing: {
    label: 'Закрытие',
    title: 'Закрытие секции',
    range: [55, 56],
    time: '≈ 2 мин',
  },
};
