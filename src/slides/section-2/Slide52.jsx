import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '52',
  type: 'C',
  title: 'Как отключить обучение на ваших данных',
  subblock: 'Перед началом',
};

/**
 * Слайд 46 · Как отключить обучение на ваших данных
 * Семантическая SVG-реконструкция раздела Data controls в DeepSeek:
 * заголовок раздела + одна строка с переключателем «Improve the model
 * for everyone» в положении OFF. Без логотипов, без фирменных цветов,
 * без зелёного/красного — нейтральная палитра проекта.
 */
export default function Slide52() {
  return (
    <Stage label="52 Как отключить обучение на ваших данных">
      <Meta num="52" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 520"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Раздел настроек Data controls с переключателем Improve the model for everyone в положении OFF"
        >
          {/* Карточка панели настроек */}
          <rect
            x="0.5"
            y="0.5"
            width="1079"
            height="519"
            rx="14"
            ry="14"
            fill="#FAFAF7"
            stroke="#D9D7CF"
            strokeWidth="1"
          />

          {/* Заголовок раздела */}
          <text
            x="56"
            y="92"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
            fontSize="34"
            fill="#1A1A1A"
          >
            Data controls
          </text>

          {/* Тонкая линия под заголовком */}
          <line x1="56" y1="132" x2="1024" y2="132" stroke="#ECEAE3" strokeWidth="1" />

          {/* Строка настройки: название + описание + toggle */}
          <g>
            {/* Название переключателя */}
            <text
              x="56"
              y="262"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="500"
              fontSize="28"
              fill="#1A1A1A"
            >
              Improve the model for everyone
            </text>

            {/* Серое описание под названием */}
            <text
              x="56"
              y="306"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="400"
              fontSize="20"
              fill="#6B6B68"
            >
              Allow your content to be used to train our models and improve our services.
            </text>

            {/* Toggle справа · OFF (круг слева, нейтральный серый) */}
            <g transform="translate(896, 244)">
              <rect
                x="0"
                y="0"
                width="80"
                height="40"
                rx="20"
                ry="20"
                fill="#D9D7CF"
                stroke="#9A9893"
                strokeWidth="1"
              />
              <circle cx="20" cy="20" r="14" fill="#FAFAF7" stroke="#9A9893" strokeWidth="1" />
            </g>
          </g>

          {/* Тонкая линия под строкой — намёк на продолжение списка */}
          <line x1="56" y1="380" x2="1024" y2="380" stroke="#ECEAE3" strokeWidth="1" />
        </svg>
      </div>

      <div className="right">
        <div className="sub">Перед началом</div>
        <h2 className="title" style={{ fontSize: 44, lineHeight: 1.15 }}>
          Как отключить обучение на&nbsp;ваших данных
        </h2>
        <p className="cap" style={{ fontSize: 26, lineHeight: 1.3, marginTop: 20 }}>
          Чтобы данные не&nbsp;учили модель — найдите этот тоггл в&nbsp;настройках
        </p>
        <p
          style={{
            margin: '28px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 14,
            lineHeight: 1.5,
            letterSpacing: '0.04em',
            color: 'var(--mute-2)',
          }}
        >
          Settings → Data controls →
          <br />
          Improve the model for everyone
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
