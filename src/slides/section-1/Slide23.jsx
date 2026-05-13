import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '23',
  type: 'C',
  title: 'RLHF · обучение с обратной связью от человека',
  subblock: '1.4 ChatGPT 2022',
};

/**
 * Слайд 23 · RLHF — обучение с обратной связью от человека
 * Линейная цепочка из 4 блоков: базовая модель → люди-разметчики →
 * reward-модель → базовая модель (дообучённая). Блоки 1 и 4 одного стиля
 * (та же модель в разных состояниях), 2 и 3 — иной стиль (промежуточные шаги).
 */

const BLOCK_W = 200;
const BLOCK_H = 130;
const GAP = 38;
const TOTAL_W = 4 * BLOCK_W + 3 * GAP; // 914
const X0 = (1080 - TOTAL_W) / 2; // 83
const BLOCK_Y = 180;
const BLOCK_CY = BLOCK_Y + BLOCK_H / 2;

const blocks = [
  {
    title: 'Базовая модель',
    captionL1: 'генерирует',
    captionL2: 'несколько ответов',
    sameModel: true,
  },
  {
    title: 'Люди-разметчики',
    captionL1: 'ранжируют ответы',
    captionL2: 'от лучшего к худшему',
    sameModel: false,
  },
  {
    title: 'Reward-модель',
    captionL1: 'отдельная нейросеть',
    captionL2: 'учится на ранжированиях',
    sameModel: false,
  },
  {
    title: 'Базовая модель',
    captionL1: 'дообучается под',
    captionL2: 'reward-модель',
    sameModel: true,
  },
];

export default function Slide23() {
  return (
    <Stage label="23 RLHF · обучение с обратной связью от человека">
      <Meta num="23" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Линейная схема RLHF: базовая модель генерирует ответы, люди-разметчики их ранжируют, на ранжированиях обучается reward-модель, базовая модель дообучается под reward-модель"
        >
          <defs>
            <marker
              id="arrow23"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#6B6B68" />
            </marker>
          </defs>

          {/* ─── Блоки ──────────────────────────────────────── */}
          {blocks.map((b, i) => {
            const x = X0 + i * (BLOCK_W + GAP);
            const cx = x + BLOCK_W / 2;
            return (
              <g key={`b-${i}`}>
                <rect
                  x={x}
                  y={BLOCK_Y}
                  width={BLOCK_W}
                  height={BLOCK_H}
                  rx="8"
                  ry="8"
                  fill={b.sameModel ? 'none' : '#F0EEE8'}
                  stroke={b.sameModel ? '#1A1A1A' : '#D9D7CF'}
                  strokeWidth={b.sameModel ? 1.5 : 1}
                />
                <text
                  x={cx}
                  y={BLOCK_CY + 8}
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontWeight="500"
                  fontSize="22"
                  textAnchor="middle"
                  fill="#1A1A1A"
                >
                  {b.title}
                </text>
                <text
                  x={cx}
                  y={BLOCK_Y + BLOCK_H + 40}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="14"
                  letterSpacing="0.04em"
                  textAnchor="middle"
                  fill="#6B6B68"
                >
                  {b.captionL1}
                </text>
                <text
                  x={cx}
                  y={BLOCK_Y + BLOCK_H + 62}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="14"
                  letterSpacing="0.04em"
                  textAnchor="middle"
                  fill="#6B6B68"
                >
                  {b.captionL2}
                </text>
              </g>
            );
          })}

          {/* ─── Стрелки между блоками ──────────────────────── */}
          {[0, 1, 2].map((i) => {
            const startX = X0 + (i + 1) * BLOCK_W + i * GAP + 6;
            const endX = X0 + (i + 1) * (BLOCK_W + GAP) - 4;
            return (
              <line
                key={`arrow-${i}`}
                x1={startX}
                y1={BLOCK_CY}
                x2={endX}
                y2={BLOCK_CY}
                stroke="#6B6B68"
                strokeWidth="1.2"
                markerEnd="url(#arrow23)"
              />
            );
          })}
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.4 ChatGPT 2022</div>
        <h2 className="title" style={{ fontSize: 36, lineHeight: 1.18 }}>
          RLHF · обучение с&nbsp;обратной связью от&nbsp;человека
        </h2>
        <p className="cap" style={{ fontSize: 22, lineHeight: 1.4, marginTop: 24 }}>
          Базовая модель предсказывает текст. RLHF учит её&nbsp;предсказывать то, что хочет человек.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
