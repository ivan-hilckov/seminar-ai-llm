import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '22',
  type: 'C',
  title: 'От слова к рассуждению',
  subblock: '1.6 Главный вывод',
};

/**
 * Слайд 31 · От слова к рассуждению
 * SVG-лестница из 6 ступеней (Т9 → R1) + вертикальная ось предсказания
 * слева (буква → рассуждение). Высоты равные — это схема масштаба,
 * не таймлайн. Никаких логотипов, лет, иллюстраций внутри ступеней.
 */

const STEP_W = 150;
const STEP_H = 80;
const X0 = 146;
const Y_BOTTOM = 600; // нижний край самой нижней ступени
const AXIS_X = 130;

// Сверху вниз — справа налево по визуалу.
const steps = [
  { label: 'Т9', axis: 'буква' },
  { label: 'Автодополнение', axis: 'слово' },
  { label: 'Transformer', axis: 'фраза' },
  { label: 'GPT-3', axis: 'текст' },
  { label: 'ChatGPT', axis: 'диалог' },
  { label: 'R1', axis: 'рассуждение' },
];

export default function Slide22() {
  return (
    <Stage label="22 От слова к рассуждению">
      <Meta num="22" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Лестница из шести ступеней: Т9, Автодополнение, Transformer, GPT-3, ChatGPT, R1. Слева — вертикальная ось масштаба предсказания: буква, слово, фраза, текст, диалог, рассуждение"
        >
          <defs>
            <marker
              id="arrow31"
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

          {/* ─── Вертикальная ось предсказания ──────────────── */}
          <line
            x1={AXIS_X}
            y1={Y_BOTTOM + 20}
            x2={AXIS_X}
            y2={Y_BOTTOM - STEP_H * 6 + STEP_H / 2 - 40}
            stroke="#9A9893"
            strokeWidth="1"
            markerEnd="url(#arrow31)"
          />

          {/* ─── Подписи оси ────────────────────────────────── */}
          {steps.map((s, i) => {
            const rectY = Y_BOTTOM - STEP_H * (i + 1);
            const centerY = rectY + STEP_H / 2;
            return (
              <text
                key={`ax-${i}`}
                x={AXIS_X - 16}
                y={centerY + 5}
                fontFamily="IBM Plex Mono, monospace"
                fontSize="14"
                letterSpacing="0.04em"
                textAnchor="end"
                fill="#6B6B68"
              >
                {s.axis}
              </text>
            );
          })}

          {/* ─── Ступени ────────────────────────────────────── */}
          {steps.map((s, i) => {
            const x = X0 + i * STEP_W;
            const y = Y_BOTTOM - STEP_H * (i + 1);
            const cx = x + STEP_W / 2;
            const cy = y + STEP_H / 2;
            return (
              <g key={`s-${i}`}>
                <rect
                  x={x}
                  y={y}
                  width={STEP_W}
                  height={STEP_H}
                  rx="4"
                  ry="4"
                  fill="#F0EEE8"
                  stroke="#D9D7CF"
                  strokeWidth="1"
                />
                <text
                  x={cx}
                  y={cy + 7}
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontWeight="500"
                  fontSize="20"
                  textAnchor="middle"
                  fill="#1A1A1A"
                >
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.6 Главный вывод</div>
        <h2 className="title" style={{ fontSize: 52, lineHeight: 1.1 }}>
          От&nbsp;слова
          <br />
          к&nbsp;рассуждению
        </h2>
        <p className="cap" style={{ fontSize: 28, lineHeight: 1.3, marginTop: 24 }}>
          Одна и&nbsp;та&nbsp;же идея — предсказать следующее
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
