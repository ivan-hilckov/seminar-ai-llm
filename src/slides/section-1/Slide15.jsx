import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '15',
  type: 'C',
  title: 'ChatGPT, 30 ноября 2022',
  subblock: '1.4 ChatGPT 2022',
};

/**
 * Слайд 22 · ChatGPT, 30 ноября 2022
 * Стилизованная SVG-реконструкция первого интерфейса ChatGPT
 * (не подлинный скриншот): логотип-плейсхолдер, Free Research Preview,
 * три колонки Examples / Capabilities / Limitations с серыми плашками,
 * поле ввода «Send a message…». Палитра — система семинара.
 */
export default function Slide15() {
  const columns = [
    { x: 220, title: 'Examples' },
    { x: 540, title: 'Capabilities' },
    { x: 860, title: 'Limitations' },
  ];

  // Лёгкая нерегулярность ширин — чтобы плашки не выглядели сеткой.
  const cardLineWidths = [
    [220, 170],
    [238, 156],
    [200, 198],
    [228, 144],
    [212, 184],
    [240, 160],
  ];

  return (
    <Stage label="15 ChatGPT, 30 ноября 2022">
      <Meta num="15" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Стилизованная реконструкция первого интерфейса ChatGPT: логотип-плейсхолдер, подзаголовок Free Research Preview, три колонки Examples / Capabilities / Limitations с плашками-плейсхолдерами, поле ввода с плейсхолдером Send a message"
        >
          {/* ─── Рамка окна ─────────────────────────────────── */}
          <rect
            x="0.5"
            y="0.5"
            width="1079"
            height="719"
            rx="10"
            ry="10"
            fill="none"
            stroke="#D9D7CF"
            strokeWidth="1"
          />

          {/* Тайтлбар: три кружочка + разделитель */}
          <g fill="#D9D7CF">
            <circle cx="28" cy="28" r="5" />
            <circle cx="48" cy="28" r="5" />
            <circle cx="68" cy="28" r="5" />
          </g>
          <line x1="0" y1="56" x2="1080" y2="56" stroke="#ECEAE3" strokeWidth="1" />

          {/* ─── Логотип-плейсхолдер ────────────────────────── */}
          <circle cx="540" cy="116" r="18" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
          <text
            x="540"
            y="172"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="28"
            textAnchor="middle"
            fill="#1A1A1A"
          >
            ChatGPT
          </text>

          {/* ─── Free Research Preview ──────────────────────── */}
          <text
            x="540"
            y="206"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="14"
            letterSpacing="0.14em"
            textAnchor="middle"
            fill="#9A9893"
          >
            FREE RESEARCH PREVIEW
          </text>

          {/* ─── Заголовки колонок ──────────────────────────── */}
          {columns.map((col) => (
            <text
              key={`h-${col.title}`}
              x={col.x}
              y="278"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="500"
              fontSize="20"
              textAnchor="middle"
              fill="#1A1A1A"
            >
              {col.title}
            </text>
          ))}

          {/* ─── Плашки-плейсхолдеры ────────────────────────── */}
          {columns.map((col, ci) =>
            [0, 1, 2].map((row) => {
              const xLeft = col.x - 140;
              const y = 308 + row * 76;
              const [w1, w2] = cardLineWidths[(ci * 3 + row) % cardLineWidths.length];
              return (
                <g key={`card-${ci}-${row}`}>
                  <rect
                    x={xLeft}
                    y={y}
                    width="280"
                    height="60"
                    rx="6"
                    ry="6"
                    fill="#F0EEE8"
                  />
                  <rect x={xLeft + 20} y={y + 18} width={w1} height="4" rx="2" fill="#D9D7CF" />
                  <rect x={xLeft + 20} y={y + 32} width={w2} height="4" rx="2" fill="#D9D7CF" />
                </g>
              );
            })
          )}

          {/* ─── Поле ввода ─────────────────────────────────── */}
          <rect
            x="80"
            y="588"
            width="920"
            height="64"
            rx="10"
            ry="10"
            fill="none"
            stroke="#D9D7CF"
            strokeWidth="1"
          />
          <text
            x="108"
            y="628"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="20"
            fill="#9A9893"
          >
            Send a message…
          </text>
          {/* Иконка «отправить» — стрелка вверх в квадратике */}
          <g transform="translate(940, 604)">
            <rect
              x="0"
              y="0"
              width="32"
              height="32"
              rx="6"
              ry="6"
              fill="none"
              stroke="#D9D7CF"
              strokeWidth="1"
            />
            <path
              d="M 16 22 L 16 11 M 10.5 16 L 16 10.5 L 21.5 16"
              fill="none"
              stroke="#9A9893"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.4 ChatGPT 2022</div>
        <h2 className="title" style={{ fontSize: 48, lineHeight: 1.1 }}>
          ChatGPT,
          <br />
          30 ноября 2022
        </h2>
        <p className="cap" style={{ fontSize: 24, lineHeight: 1.35, marginTop: 24 }}>
          Дотренировали GPT-3.5 на&nbsp;диалогах. Сделали чат-оболочку. Технологии стали продуктом.
        </p>
        <p
          style={{
            margin: '24px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 16,
            letterSpacing: '0.08em',
            color: 'var(--mute-2)',
          }}
        >
          Внутри: GPT-3.5
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
