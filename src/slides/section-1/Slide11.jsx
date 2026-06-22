import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '11',
  type: 'C',
  title: '2019: GPT-2 · модель прочитала интернет',
  subblock: '1.3 От Transformer до GPT-3',
};

/**
 * Слайд 17 · 2019: GPT-2 · модель прочитала интернет
 * Горизонтальная SVG-цепочка из трёх ступеней с нарастающим визуальным масштабом:
 * кластер Reddit-карточек → 8 000 000 ссылок → 40 ГБ текста.
 */
export default function Slide11() {
  // 6 карточек: 3 «выжили» (≥3 лайков, обводка --ink) + 3 «отсеяны» (<3, --mute-2 с opacity).
  const cards = [
    { col: 0, row: 0, votes: '12', kept: true },
    { col: 1, row: 0, votes: '1', kept: false },
    { col: 0, row: 1, votes: '7', kept: true },
    { col: 1, row: 1, votes: '2', kept: false },
    { col: 0, row: 2, votes: '4', kept: true },
    { col: 1, row: 2, votes: '1', kept: false },
  ];

  const CARD_W = 110;
  const CARD_H = 56;
  const COL_GAP = 14;
  const ROW_GAP = 12;
  const CLUSTER_X = 24;
  const CLUSTER_Y = 124;

  const cardX = (col) => CLUSTER_X + col * (CARD_W + COL_GAP);
  const cardY = (row) => CLUSTER_Y + row * (CARD_H + ROW_GAP);

  return (
    <Stage label="11 2019: GPT-2 · модель прочитала интернет">
      <Meta num="11" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 500"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Цепочка: кластер постов с лайками — 8 миллионов ссылок — 40 гигабайт текста"
        >
          <defs>
            <marker
              id="arrow17"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#9A9893" />
            </marker>
          </defs>

          {/* ─── Ступень 1: кластер постов ──────────────────────── */}
          {cards.map((c, i) => {
            const x = cardX(c.col);
            const y = cardY(c.row);
            const stroke = c.kept ? '#1A1A1A' : '#9A9893';
            const opacity = c.kept ? 1 : 0.55;
            return (
              <g key={i} opacity={opacity}>
                <rect
                  x={x}
                  y={y}
                  width={CARD_W}
                  height={CARD_H}
                  rx="4"
                  ry="4"
                  fill="none"
                  stroke={stroke}
                  strokeWidth="1"
                />
                {/* Upvote ▲ */}
                <polygon
                  points={`${x + 12},${y + 14} ${x + 20},${y + 14} ${x + 16},${y + 6}`}
                  fill={stroke}
                />
                {/* Число лайков */}
                <text
                  x={x + 26}
                  y={y + 16}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="12"
                  fill={stroke}
                >
                  {c.votes}
                </text>
                {/* 3 серых линии — имитация текста поста */}
                <rect x={x + 12} y={y + 28} width="84" height="3" rx="1.5" fill="#D9D7CF" />
                <rect x={x + 12} y={y + 36} width="68" height="3" rx="1.5" fill="#D9D7CF" />
                <rect x={x + 12} y={y + 44} width="52" height="3" rx="1.5" fill="#D9D7CF" />
              </g>
            );
          })}

          {/* ─── Стрелка 1 ──────────────────────────────────────── */}
          <line
            x1="270"
            y1="250"
            x2="338"
            y2="250"
            stroke="#9A9893"
            strokeWidth="1.2"
            markerEnd="url(#arrow17)"
          />

          {/* ─── Ступень 2: 8 000 000 ссылок ─────────────────────── */}
          <g>
            <text
              x="510"
              y="260"
              fontFamily="IBM Plex Mono, monospace"
              fontWeight="500"
              fontSize="64"
              textAnchor="middle"
              fill="#1A1A1A"
              style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
            >
              8 000 000
            </text>
            <text
              x="510"
              y="304"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="400"
              fontSize="22"
              letterSpacing="0.02em"
              textAnchor="middle"
              fill="#6B6B68"
            >
              ссылок
            </text>
          </g>

          {/* ─── Стрелка 2 ──────────────────────────────────────── */}
          <line
            x1="680"
            y1="250"
            x2="748"
            y2="250"
            stroke="#9A9893"
            strokeWidth="1.2"
            markerEnd="url(#arrow17)"
          />

          {/* ─── Ступень 3: 40 ГБ текста ─────────────────────────── */}
          <g>
            <text
              x="900"
              y="280"
              fontFamily="IBM Plex Mono, monospace"
              fontWeight="500"
              fontSize="112"
              textAnchor="middle"
              fill="#1A1A1A"
              style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
            >
              40 ГБ
            </text>
            <text
              x="900"
              y="324"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="400"
              fontSize="24"
              letterSpacing="0.02em"
              textAnchor="middle"
              fill="#6B6B68"
            >
              текста
            </text>
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.3 От Transformer до GPT-3</div>
        <h2 className="title" style={{ fontSize: 52, lineHeight: 1.1 }}>
          2019: GPT-2
          <br />
          модель прочитала интернет
        </h2>
        <p className="cap" style={{ fontSize: 32, lineHeight: 1.25, marginTop: 24 }}>
          8&nbsp;миллионов ссылок с&nbsp;Reddit → 40&nbsp;ГБ текста
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
          1.5B параметров
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
