import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '11',
  type: 'C',
  title: 'Smart Compose в Gmail',
  subblock: '1.2 Автозаполнение',
};

export default function Slide11() {
  return (
    <Stage label="11 Smart Compose в Gmail">
      <Meta num="11" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 680"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Окно почты со Smart Compose: напечатан фрагмент, серым достроена фраза"
        >
          {/* Рамка окна письма */}
          <rect
            x="0.5"
            y="0.5"
            width="1079"
            height="679"
            rx="10"
            ry="10"
            fill="none"
            stroke="#D9D7CF"
            strokeWidth="1"
          />

          {/* Тайтлбар: три кружочка слева, тонкая разделительная линия снизу */}
          <g fill="#D9D7CF">
            <circle cx="28" cy="28" r="5" />
            <circle cx="48" cy="28" r="5" />
            <circle cx="68" cy="28" r="5" />
          </g>
          <line x1="0" y1="56" x2="1080" y2="56" stroke="#ECEAE3" strokeWidth="1" />

          {/* Поле «Кому»: подпись + пустая линия */}
          <text
            x="40"
            y="100"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="14"
            letterSpacing="0.06em"
            fill="#9A9893"
          >
            Кому
          </text>
          <line x1="120" y1="102" x2="780" y2="102" stroke="#ECEAE3" strokeWidth="1" />

          {/* Поле «Тема»: подпись + пустая линия */}
          <text
            x="40"
            y="146"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="14"
            letterSpacing="0.06em"
            fill="#9A9893"
          >
            Тема
          </text>
          <line x1="120" y1="148" x2="780" y2="148" stroke="#ECEAE3" strokeWidth="1" />

          {/* Разделитель перед телом письма */}
          <line x1="0" y1="184" x2="1080" y2="184" stroke="#ECEAE3" strokeWidth="1" />

          {/* Тело письма: напечатанный текст + серое фантомное продолжение в одну строку */}
          <text
            x="40"
            y="282"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="44"
            fill="#1A1A1A"
          >
            Спасибо за письмо.{' '}
            <tspan fill="#9A9893">Я отвечу в течение дня.</tspan>
          </text>

          {/* Подсказка Tab → под фантомной фразой */}
          <g transform="translate(40, 320)">
            <rect
              x="0"
              y="0"
              width="80"
              height="28"
              rx="4"
              ry="4"
              fill="none"
              stroke="#D9D7CF"
              strokeWidth="1"
            />
            <text
              x="40"
              y="19"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="13"
              letterSpacing="0.08em"
              textAnchor="middle"
              fill="#6B6B68"
            >
              Tab →
            </text>
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.2 Автозаполнение</div>
        <h2 className="title" style={{ fontSize: 56, lineHeight: 1.1 }}>
          Smart Compose в Gmail
        </h2>
        <p className="cap" style={{ fontSize: 32, lineHeight: 1.25, marginTop: 24 }}>
          От следующего слова — к&nbsp;следующей фразе
        </p>
        <p
          style={{
            margin: '20px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 14,
            letterSpacing: '0.08em',
            color: 'var(--mute-2)',
          }}
        >
          Gmail · 2018
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
