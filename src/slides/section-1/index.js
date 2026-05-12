import Slide06 from './Slide06.jsx';
import Slide07 from './Slide07.jsx';
import Slide08 from './Slide08.jsx';
import Slide09 from './Slide09.jsx';
import Slide10 from './Slide10.jsx';
import Slide17 from './Slide17.jsx';
import Slide21 from './Slide21.jsx';
import Slide22 from './Slide22.jsx';
import Slide29 from './Slide29.jsx';
import Slide30 from './Slide30.jsx';
import Slide39 from './Slide39.jsx';
import Slide40 from './Slide40.jsx';
import Slide41 from './Slide41.jsx';
import Slide50 from './Slide50.jsx';
import Slide56 from './Slide56.jsx';
import Slide57 from './Slide57.jsx';
import Slide58 from './Slide58.jsx';

/**
 * Реестр всех слайдов Секции 1.
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
  // ── Часть I · Как появились современные модели (06–29)
  ready('06', 'A', 'Откуда взялись нейросети', '1.0 Заставка', Slide06, { hasNotes: false }),
  ready('07', 'C', 'Помните это?', '1.1 Т9 на Nokia', Slide07),
  ready('08', 'C', 'Как работал Т9', '1.1 Т9 на Nokia', Slide08),
  ready('09', 'E', 'Машина начала угадывать', '1.1 Т9 на Nokia', Slide09),
  ready('10', 'D', 'Т9 vs LLM', '1.1 Т9 на Nokia', Slide10),

  draft('11', 'C', 'Smart Compose', '1.2 Автозаполнение'),
  draft('12', 'C', 'Автодополнение в поиске', '1.2 Автозаполнение'),
  draft('13', 'B', 'Со слов на фразы', '1.2 Автозаполнение'),

  draft('14', 'C', '2019 · GPT-2', '1.3 GPT-2 и GPT-3'),
  draft('15', 'C', 'Рост параметров', '1.3 GPT-2 и GPT-3'),
  draft('16', 'B', 'Масштаб меняет качество', '1.3 GPT-2 и GPT-3'),
  ready('17', 'E', '175 миллиардов', '1.3 GPT-2 и GPT-3', Slide17, { hasNotes: false }),

  draft('18', 'B', '30 ноября 2022', '1.4 ChatGPT'),
  draft('19', 'C', 'Первый ChatGPT', '1.4 ChatGPT'),
  draft('20', 'C', 'RLHF · дрессировка', '1.4 ChatGPT'),
  ready('21', 'E', '100 млн за 2 месяца', '1.4 ChatGPT', Slide21, { hasNotes: false }),
  ready('22', 'E', 'Текст → диалог', '1.4 ChatGPT', Slide22, { hasNotes: false }),

  draft('23', 'C', 'Думающая модель', '1.5 Думающие модели'),
  draft('24', 'D', 'GPT-4 vs o1 / R1', '1.5 Думающие модели'),
  draft('25', 'B', 'Студент с черновиком', '1.5 Думающие модели'),
  draft('26', 'C', 'Chain of Thought', '1.5 Думающие модели'),

  draft('27', 'B', 'Что общего у Т9 и GPT', '1.6 Главный вывод'),
  draft('28', 'B', 'Каждый шаг — предсказание', '1.6 Главный вывод'),
  ready('29', 'E', 'Не интеллект · статистика', '1.6 Главный вывод', Slide29, { hasNotes: false, keystone: true }),

  // ── Часть II · Что происходит при ответе (30–39)
  ready('30', 'A', 'Как это работает внутри', '2.0 Заставка', Slide30, { hasNotes: false }),
  draft('31', 'C', 'Слова в пространстве', '2.1 Векторы смыслов'),
  draft('32', 'C', 'Близость = смысл', '2.1 Векторы смыслов'),
  draft('33', 'B', 'Смысл живёт в координатах', '2.1 Векторы смыслов'),

  draft('34', 'C', 'Что такое контекст', '2.2 Контекст и память'),
  draft('35', 'D', 'Память — функция', '2.2 Контекст и память'),
  draft('36', 'B', 'Между чатами пусто', '2.2 Контекст и память'),

  draft('37', 'C', 'Тренировка → инференс', '2.3 Обучение и заморозка'),
  draft('38', 'B', 'Вопросы не меняют', '2.3 Обучение и заморозка'),
  ready('39', 'E', 'Веса заморожены', '2.3 Обучение и заморозка', Slide39, { hasNotes: false }),

  // ── Часть III · Что важно учитывать (40–53)
  ready('40', 'A', 'Важные особенности', '3.0 Заставка', Slide40, { hasNotes: false }),
  ready('41', 'E', 'Куда уходят данные', '3.1 Данные и приватность', Slide41, { hasNotes: false }),
  draft('42', 'D', 'Облако vs локально', '3.1 Данные и приватность'),

  draft('43', 'B', 'Каждый чат с нуля', '3.2 Память и контекст'),
  draft('44', 'C', 'Memory · когда нужна', '3.2 Память и контекст'),

  draft('45', 'B', 'Поиск — функция', '3.3 Доступ к интернету'),
  draft('46', 'C', 'Когда включать поиск', '3.3 Доступ к интернету'),

  draft('47', 'B', 'Уверенно ошибается', '3.4 Точность и галлюцинации'),
  draft('48', 'C', 'Демонстрация галлюцинации', '3.4 Точность и галлюцинации'),
  draft('49', 'B', 'Где проверять обязательно', '3.4 Точность и галлюцинации'),
  ready('50', 'E', 'Доверяй, но проверяй', '3.4 Точность и галлюцинации', Slide50, { hasNotes: false }),

  draft('51', 'B', 'Задачи, не профессии', '3.5 Границы применения'),
  draft('52', 'D', 'Хорошо vs плохо', '3.5 Границы применения'),
  draft('53', 'C', 'Светофор задач', '3.5 Границы применения'),

  // ── Закрытие (54–58)
  draft('54', 'B', 'Карта пройденного', 'Закрытие'),
  draft('55', 'B', 'Что дальше', 'Закрытие'),
  ready('56', 'E', 'Перерыв 15 минут', 'Закрытие', Slide56, { hasNotes: false }),
  ready('57', 'E', 'Живая демонстрация', 'Закрытие', Slide57, { hasNotes: false }),
  ready('58', 'E', 'Q&A', 'Закрытие', Slide58, { hasNotes: false }),
];

export const slideById = Object.fromEntries(slides.map((s) => [s.id, s]));

/**
 * Разбиение по частям. Возвращает 'I' | 'II' | 'III' | 'closing'.
 */
export function partOf(slide) {
  const n = Number(slide.id);
  if (n <= 29) return 'I';
  if (n <= 39) return 'II';
  if (n <= 53) return 'III';
  return 'closing';
}

/**
 * Метаинформация о частях — для шапки каждого блока на карте.
 */
export const parts = {
  I: {
    label: 'Часть I',
    title: 'Как появились современные языковые модели',
    range: [6, 29],
    time: '≈ 45 мин',
  },
  II: {
    label: 'Часть II',
    title: 'Что происходит при каждом ответе модели',
    range: [30, 39],
    time: '≈ 25 мин',
  },
  III: {
    label: 'Часть III',
    title: 'Что важно учитывать в работе с LLM',
    range: [40, 53],
    time: '≈ 20 мин',
  },
  closing: {
    label: 'Закрытие',
    title: 'Закрытие секции',
    range: [54, 58],
    time: '≈ 3 мин',
  },
};
