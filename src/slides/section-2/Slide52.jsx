import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './model-portrait.css';

export const meta = {
  id: '52',
  type: 'C',
  title: 'DeepSeek',
  subblock: '4.3 Четыре модели',
};

/**
 * Слайд 52 · Портрет DeepSeek
 * Бесплатно и без VPN, сильная математика и рассуждения. Но данные —
 * на серверах в Китае: ограничение для конфиденциального.
 */

const FEATURES = [
  'Бесплатный чат без подписки',
  'Режим пошагового рассуждения (Think) для логики и математики',
  'Работа с файлами (PDF, DOCX) · открытые веса',
];

export default function Slide52() {
  return (
    <Stage label="52 DeepSeek">
      <Meta num="52" type="C" />

      <div className="mp-eyebrow">Бесплатно, без VPN · 4 / 4</div>
      <h1 className="mp-name">DeepSeek</h1>
      <p className="mp-purpose">
        Бесплатно и&nbsp;без&nbsp;VPN. Сильная математика и&nbsp;рассуждения.
        Самый доступный вход — но&nbsp;осторожно с&nbsp;чувствительными данными.
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
          Без&nbsp;VPN, бесплатно. <strong>Данные хранятся в&nbsp;Китае</strong> —
          не&nbsp;для&nbsp;конфиденциального.
        </span>
      </div>

      <Foot />
    </Stage>
  );
}
