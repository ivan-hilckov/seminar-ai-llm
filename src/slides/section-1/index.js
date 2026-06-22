import Slide02 from './Slide02.jsx';
import Slide03 from './Slide03.jsx';
import Slide04 from './Slide04.jsx';
import Slide05 from './Slide05.jsx';
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

/**
 * Реестр всех слайдов Секции 1 (02–42 · 41 слайд · 90 мин).
 * Сквозная нумерация без пропусков; E-моменты (кроме keystone 22) убраны.
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

export const slides = [
  // 1.0 Заставка
  ready('02', 'A', 'Откуда взялись современные модели', '1.0 Заставка', Slide02, { hasNotes: false }),

  // 1.1 Т9 на Nokia
  ready('03', 'C', 'Помните это?', '1.1 Т9 на Nokia', Slide03),
  ready('04', 'C', 'Как работал Т9', '1.1 Т9 на Nokia', Slide04),

  // 1.2 Автозаполнение
  ready('05', 'C', 'Smart Compose в Gmail', '1.2 Автозаполнение', Slide05),
  ready('06', 'C', 'Автодополнение в поиске', '1.2 Автозаполнение', Slide06),
  ready('07', 'D', 'Т9 · Smart Compose · LLM', '1.2 Автозаполнение', Slide07),

  // 1.3 От Transformer до GPT-3
  ready('08', 'C', '2017: Transformer · Attention Is All You Need', '1.3 От Transformer до GPT-3', Slide08),
  ready('09', 'C', 'Attention: каждое слово учитывает контекст', '1.3 От Transformer до GPT-3', Slide09),
  ready('10', 'D', '2018: GPT-1 · последовательно vs всё сразу', '1.3 От Transformer до GPT-3', Slide10),
  ready('11', 'C', '2019: GPT-2 · модель прочитала интернет', '1.3 От Transformer до GPT-3', Slide11),
  ready('12', 'C', 'Линия GPT', '1.3 От Transformer до GPT-3', Slide12),
  ready('13', 'C', 'Emergent abilities', '1.3 От Transformer до GPT-3', Slide13),
  ready('14', 'B', 'Попугай, прочитавший интернет', '1.3 От Transformer до GPT-3', Slide14),

  // 1.4 ChatGPT 2022
  ready('15', 'C', 'RLHF · обучение с обратной связью от человека', '1.4 ChatGPT 2022', Slide15),
  ready('16', 'C', 'ChatGPT, 30 ноября 2022', '1.4 ChatGPT 2022', Slide16),
  ready('17', 'C', 'За сколько сервисы добирались до 100 миллионов', '1.4 ChatGPT 2022', Slide17),

  // 1.5 Думающие модели
  ready('18', 'C', 'Chain of Thought', '1.5 Думающие модели', Slide18),
  ready('19', 'D', 'Обычная модель vs думающая', '1.5 Думающие модели', Slide19),
  ready('20', 'D', 'Что меняется', '1.5 Думающие модели', Slide20),

  // 1.6 Главный вывод
  ready('21', 'C', 'От слова к рассуждению', '1.6 Главный вывод', Slide21),
  ready('22', 'E', 'Это не интеллект. Это статистика.', '1.6 Главный вывод', Slide22, { keystone: true }),

  // 2.0 Заставка
  ready('23', 'A', 'Как это работает внутри', '2.0 Заставка', Slide23),

  // 2.1 Векторы смыслов
  ready('24', 'B', 'Откуда модель знает, что «врач» и «доктор» близки?', '2.1 Векторы смыслов', Slide24),
  ready('25', 'C', 'Пространство смыслов', '2.1 Векторы смыслов', Slide25),
  ready('26', 'B', 'Близость = смысл', '2.1 Векторы смыслов', Slide26),

  // 2.2 Контекст и память
  ready('27', 'C', 'Что такое контекст', '2.2 Контекст и память', Slide27),
  ready('28', 'D', 'Новый чат — новый лист', '2.2 Контекст и память', Slide28),
  ready('29', 'C', 'Память (Memory) — отдельная функция', '2.2 Контекст и память', Slide29),

  // 2.3 Обучение и заморозка
  ready('30', 'B', 'Модель обучают один раз', '2.3 Обучение и заморозка', Slide30),

  // 3.0 Заставка
  ready('31', 'A', 'Особенности в работе', '3.0 Заставка', Slide31),

  // 3.1 Данные и приватность
  ready('32', 'D', 'Облачно vs локально', '3.1 Данные и приватность', Slide32),
  ready('33', 'C', 'Как отключить обучение на ваших данных', '3.1 Данные и приватность', Slide33),

  // 3.2 Память и контекст в работе
  ready('34', 'B', 'Когда Память полезна, когда мешает', '3.2 Память и контекст в работе', Slide34),

  // 3.3 Доступ к интернету
  ready('35', 'C', 'Поиск — отдельная функция', '3.3 Доступ к интернету', Slide35),

  // 3.4 Точность и галлюцинации
  ready('36', 'B', 'Не знает фактов — знает статистику текстов', '3.4 Точность и галлюцинации', Slide36),
  ready('37', 'D', 'Как выглядит галлюцинация', '3.4 Точность и галлюцинации', Slide37),
  ready('38', 'D', 'У думающих моделей выше галлюцинации', '3.4 Точность и галлюцинации', Slide38),
  ready('39', 'D', 'Где проверять обязательно', '3.4 Точность и галлюцинации', Slide39),

  // 3.5 Границы применения
  ready('40', 'B', 'AI берёт на себя задачи, не роль', '3.5 Границы применения', Slide40),
  ready('41', 'B', 'Она понимает буквально — не интуитивно', '3.5 Границы применения', Slide41),

  // Итог первой половины (три колонки по главам + таймлайн истории LLM)
  ready('42', 'C', 'Что мы прошли', 'Итог', Slide42),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. Возвращает 'I' | 'II' | 'III'.
 * Итоговый слайд «Что мы прошли» (42) входит в Часть III.
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 22) return 'I';
  if (n <= 30) return 'II';
  return 'III';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 */
export const parts = {
  I: {
    label: 'Часть I',
    title: 'Откуда взялись современные модели',
    range: [2, 22],
    time: '≈ 45 мин',
  },
  II: {
    label: 'Часть II',
    title: 'Что происходит при ответе',
    range: [23, 30],
    time: '≈ 25 мин',
  },
  III: {
    label: 'Часть III',
    title: 'Важные особенности',
    range: [31, 42],
    time: '≈ 18 мин',
  },
};
