import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide42.css';

export const meta = {
  id: '42',
  type: 'C',
  title: 'Что мы прошли',
  subblock: 'Итог',
};

/**
 * Итоговый слайд первой половины семинара. Сверху — три колонки по главам
 * (без номеров частей), под ними — таймлайн ключевых вех истории LLM.
 * Заменяет прежнюю пару «Что мы прошли» + «Главные тезисы».
 */

const COLUMNS = [
  {
    head: 'Откуда взялись современные модели',
    items: [
      'Т9 и автозаполнение',
      'От Transformer до GPT-3',
      'ChatGPT и диалог',
      '«Думающие» модели',
      'Не интеллект — статистика',
    ],
  },
  {
    head: 'Что происходит при ответе',
    items: ['Векторы смыслов', 'Контекст и память', 'Обучение и заморозка'],
  },
  {
    head: 'Важные особенности',
    items: [
      'Данные и приватность',
      'Память в работе',
      'Доступ к интернету',
      'Точность и галлюцинации',
      'Границы применения',
    ],
  },
];

const TIMELINE = [
  { year: 'до 2017', label: 'Т9, автозаполнение' },
  { year: '2017', label: 'Transformer' },
  { year: '2018', label: 'GPT-1' },
  { year: '2019', label: 'GPT-2' },
  { year: '2020', label: 'GPT-3 · 175 млрд' },
  { year: '2022', label: 'ChatGPT' },
  { year: '2024–25', label: '«Думающие» модели' },
];

export default function Slide42() {
  return (
    <Stage label="42 Что мы прошли">
      <Meta num="42" type="C" />

      <div className="s43-header">
        <h2 className="title">Что мы прошли</h2>
      </div>

      <div className="s43-cols">
        {COLUMNS.map((col) => (
          <div key={col.head} className="s43-col">
            <h3 className="s43-col__head">{col.head}</h3>
            <ul className="s43-list">
              {col.items.map((it) => (
                <li key={it} className="s43-item">
                  <span className="s43-dot" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="s43-timeline">
        <div className="s43-tl__caption">История одним взглядом</div>
        <div className="s43-track">
          {TIMELINE.map((node) => (
            <div key={node.year} className="s43-node">
              <span className="s43-node__year">{node.year}</span>
              <span className="s43-node__dot-row">
                <span className="s43-node__dot" aria-hidden="true" />
              </span>
              <span className="s43-node__label">{node.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Foot />
    </Stage>
  );
}
