import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '18',
  type: 'C',
  title: 'Линия GPT',
  subblock: '1.3 От Transformer до GPT-3',
};

/**
 * Слайд 18 · Линия GPT
 * График на логарифмической шкале: три точки (GPT-1, GPT-2, GPT-3)
 * от 100M до 1T параметров за 2018–2020. Монохромно, без --accent.
 */
export default function Slide18() {
  const PLOT_LEFT = 130;
  const PLOT_RIGHT = 1020;
  const PLOT_TOP = 70;
  const PLOT_BOTTOM = 620;

  // Логарифмическая шкала: 1e8 (100M) внизу, 1e12 (1T) вверху.
  const yForLog = (logVal) => {
    const t = (logVal - 8) / (12 - 8);
    return PLOT_BOTTOM - t * (PLOT_BOTTOM - PLOT_TOP);
  };

  const gridLines = [
    { logVal: 8, label: '100M' },
    { logVal: 9, label: '1B' },
    { logVal: 10, label: '10B' },
    { logVal: 11, label: '100B' },
    { logVal: 12, label: '1T' },
  ];

  const points = [
    {
      x: 230,
      year: '2018',
      name: 'GPT-1 · 117M',
      subtitle: 'домашняя библиотека',
      value: 1.17e8,
      r: 7,
    },
    {
      x: 545,
      year: '2019',
      name: 'GPT-2 · 1.5B',
      subtitle: 'городская библиотека',
      value: 1.5e9,
      r: 7,
    },
    {
      x: 860,
      year: '2020',
      name: 'GPT-3 · 175B',
      subtitle: 'национальная библиотека',
      value: 1.75e11,
      r: 10,
    },
  ];

  const pts = points.map((p) => ({ ...p, y: yForLog(Math.log10(p.value)) }));

  return (
    <Stage label="18 Линия GPT">
      <Meta num="18" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Рост числа параметров: GPT-1 (117M, 2018), GPT-2 (1.5B, 2019), GPT-3 (175B, 2020) на логарифмической шкале"
        >
          {/* ─── Горизонтальные направляющие ───────────────────── */}
          {gridLines.map((g) => (
            <line
              key={`grid-${g.label}`}
              x1={PLOT_LEFT}
              y1={yForLog(g.logVal)}
              x2={PLOT_RIGHT}
              y2={yForLog(g.logVal)}
              stroke="#D9D7CF"
              strokeWidth="1"
            />
          ))}

          {/* ─── Подписи оси Y ─────────────────────────────────── */}
          {gridLines.map((g) => (
            <text
              key={`ylabel-${g.label}`}
              x={PLOT_LEFT - 16}
              y={yForLog(g.logVal) + 6}
              fontFamily="IBM Plex Mono, monospace"
              fontSize="18"
              textAnchor="end"
              fill="#9A9893"
              style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
            >
              {g.label}
            </text>
          ))}

          {/* ─── Оси ───────────────────────────────────────────── */}
          <line
            x1={PLOT_LEFT}
            y1={PLOT_TOP}
            x2={PLOT_LEFT}
            y2={PLOT_BOTTOM}
            stroke="#9A9893"
            strokeWidth="1"
          />
          <line
            x1={PLOT_LEFT}
            y1={PLOT_BOTTOM}
            x2={PLOT_RIGHT}
            y2={PLOT_BOTTOM}
            stroke="#9A9893"
            strokeWidth="1"
          />

          {/* ─── Тики оси X ────────────────────────────────────── */}
          {pts.map((p) => (
            <line
              key={`xtick-${p.year}`}
              x1={p.x}
              y1={PLOT_BOTTOM}
              x2={p.x}
              y2={PLOT_BOTTOM + 7}
              stroke="#9A9893"
              strokeWidth="1"
            />
          ))}

          {/* ─── Подписи оси X (годы) ──────────────────────────── */}
          {pts.map((p) => (
            <text
              key={`xlabel-${p.year}`}
              x={p.x}
              y={PLOT_BOTTOM + 36}
              fontFamily="IBM Plex Mono, monospace"
              fontSize="20"
              textAnchor="middle"
              fill="#6B6B68"
              style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
            >
              {p.year}
            </text>
          ))}

          {/* ─── Соединяющая линия ─────────────────────────────── */}
          <polyline
            points={pts.map((p) => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1.5"
          />

          {/* ─── Точки + подписи ───────────────────────────────── */}
          {pts.map((p) => (
            <g key={`pt-${p.year}`}>
              <circle cx={p.x} cy={p.y} r={p.r} fill="#1A1A1A" />
              <text
                x={p.x}
                y={p.y - 42}
                fontFamily="IBM Plex Mono, monospace"
                fontWeight="500"
                fontSize="22"
                textAnchor="middle"
                fill="#1A1A1A"
                style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
              >
                {p.name}
              </text>
              <text
                x={p.x}
                y={p.y - 20}
                fontFamily="IBM Plex Sans, sans-serif"
                fontWeight="400"
                fontSize="18"
                textAnchor="middle"
                fill="#6B6B68"
              >
                {p.subtitle}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.3 От Transformer до GPT-3</div>
        <h2 className="title" style={{ fontSize: 56, lineHeight: 1.1 }}>
          Линия GPT
        </h2>
        <p
          style={{
            margin: '24px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontWeight: 500,
            fontSize: 44,
            lineHeight: 1.2,
            letterSpacing: '0.01em',
            color: 'var(--ink)',
            fontFeatureSettings: '"tnum" 1, "lnum" 1',
          }}
        >
          117M → 1.5B → 175B
        </p>
        <p
          style={{
            margin: '24px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 16,
            letterSpacing: '0.06em',
            color: 'var(--mute)',
          }}
        >
          2018 → 2019 → 2020 · каждая модель × 10
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
