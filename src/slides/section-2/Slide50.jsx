import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './model-portrait.css';

export const meta = {
  id: '50',
  type: 'C',
  title: 'Claude',
  subblock: '4.3 Четыре модели',
};

/**
 * Слайд 50 · Портрет Claude
 * Длинные тексты и аккуратная работа с документами. Большой контекст,
 * артефакты рядом с чатом.
 */

const FEATURES = [
  'Очень большой контекст — крупный документ помещается целиком',
  'Артефакты: результат собирается рядом с чатом, можно править',
  'Аккуратный тон, осторожен с фактами · проекты и память',
];

export default function Slide50() {
  return (
    <Stage label="50 Claude">
      <Meta num="50" type="C" />

      <div className="mp-eyebrow">Длинные тексты и документы · 2 / 4</div>
      <h1 className="mp-name">Claude</h1>
      <p className="mp-purpose">
        Длинные тексты и&nbsp;аккуратная работа с&nbsp;документами.
        Когда нужен структурированный текст и&nbsp;большой файл целиком.
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
          Нужен VPN. Бесплатный тариф работает в&nbsp;браузере, Pro — зарубежная карта.
        </span>
      </div>

      <Foot />
    </Stage>
  );
}
