import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './model-portrait.css';

export const meta = {
  id: '51',
  type: 'C',
  title: 'ChatGPT',
  subblock: '4.3 Четыре модели',
};

/**
 * Слайд 51 · Портрет ChatGPT
 * Универсал: самый широкий набор возможностей в одном месте.
 */

const FEATURES = [
  'Голосовой режим · генерация изображений',
  'Выполнение Python-кода прямо в чате — разбор данных',
  'Память, проекты, кастомные инструкции · самая широкая экосистема',
];

export default function Slide51() {
  return (
    <Stage label="51 ChatGPT">
      <Meta num="51" type="C" />

      <div className="mp-eyebrow">Универсал · 3 / 4</div>
      <h1 className="mp-name">ChatGPT</h1>
      <p className="mp-purpose">
        Самый широкий набор возможностей в&nbsp;одном месте.
        Если нужен один инструмент «на&nbsp;всё» — это он.
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
          Нужен VPN. Бесплатный тариф есть, Plus — зарубежная карта.
        </span>
      </div>

      <Foot />
    </Stage>
  );
}
