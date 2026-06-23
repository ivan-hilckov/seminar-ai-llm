import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './model-portrait.css';

export const meta = {
  id: '49',
  type: 'C',
  title: 'Perplexity',
  subblock: '4.3 Четыре модели',
};

/**
 * Слайд 49 · Портрет Perplexity
 * Поисковый ассистент: отвечает и сразу даёт ссылки на источники.
 * Первый из четырёх портретов — другой класс, чем «чат».
 */

const FEATURES = [
  'Лучшие в классе ссылки-цитаты на источники',
  'Режимы фокуса (Academic и др.) для научного поиска',
  'Работа с загруженными файлами',
];

export default function Slide49() {
  return (
    <Stage label="49 Perplexity">
      <Meta num="49" type="C" />

      <div className="mp-eyebrow">Поиск с источниками · 1 / 4</div>
      <h1 className="mp-name">Perplexity</h1>
      <p className="mp-purpose">
        Отвечает на&nbsp;вопрос и&nbsp;сразу даёт ссылки на&nbsp;источники.
        Поисковый ассистент для&nbsp;литобзора — не&nbsp;«чат».
      </p>

      <div className="mp-features">
        {FEATURES.map((f) => (
          <div className="mp-feature" key={f}>
            <span className="mp-feature-dot" aria-hidden="true" />
            <p className="mp-feature-text">{f}</p>
          </div>
        ))}
      </div>

      <div className="mp-access">
        <span className="mp-access-label">Доступ из России</span>
        <span className="mp-access-text">
          Работает без&nbsp;VPN. Базовый поиск — бесплатно, Pro-режим — платно.
        </span>
      </div>

      <Foot />
    </Stage>
  );
}
