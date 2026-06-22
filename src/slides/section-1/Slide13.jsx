import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '13',
  type: 'C',
  title: 'Emergent abilities',
  subblock: '1.3 От Transformer до GPT-3',
};

/**
 * Слайд 19 · Emergent abilities
 * Две пары предложений со стрелками-связями: «Она» в одинаковом
 * втором предложении указывает на разные слова первой части
 * (Winograd-подобная задача без терминологии).
 */
export default function Slide13() {
  // Пара 1 — baseline y = 270, бокс-рамка y = 234..280
  // Пара 2 — baseline y = 500, бокс-рамка y = 464..510
  // Координаты текстовых сегментов рассчитаны от лево-верхнего угла
  // SVG (viewBox 1080×720). textLength задан явно, чтобы боксы
  // выровнялись по словам.

  // ── Пара 1 ─────────────────────────────────────────────
  const p1 = {
    baselineY: 270,
    boxTop: 234,
    boxBottom: 280,
    seg1: { text: 'Рыба заглотила', x: 80, w: 295 },
    boxA: { text: 'приманку', x: 392, w: 175 }, // приманку
    period: { text: '.', x: 569 },
    boxB: { text: 'Она', x: 593, w: 76 }, // Она
    seg2: { text: 'была вкусной.', x: 685, w: 268 },
  };

  // ── Пара 2 ─────────────────────────────────────────────
  const p2 = {
    baselineY: 500,
    boxTop: 464,
    boxBottom: 510,
    boxA: { text: 'Рыба', x: 80, w: 95 }, // Рыба
    seg1: { text: 'заглотила приманку.', x: 193, w: 402 },
    boxB: { text: 'Она', x: 611, w: 76 }, // Она
    seg2: { text: 'была голодной.', x: 703, w: 285 },
  };

  const PAD_X = 8;
  const FONT_SIZE = 40;

  const renderBox = (box, boxTop, boxHeight) => (
    <rect
      x={box.x - PAD_X}
      y={boxTop}
      width={box.w + PAD_X * 2}
      height={boxHeight}
      rx="3"
      ry="3"
      fill="none"
      stroke="#1A1A1A"
      strokeWidth="1"
    />
  );

  const renderText = (seg, baselineY, opts = {}) => (
    <text
      x={seg.x}
      y={baselineY}
      fontFamily="IBM Plex Sans, sans-serif"
      fontWeight="400"
      fontSize={FONT_SIZE}
      fill="#1A1A1A"
      {...(seg.w ? { textLength: seg.w, lengthAdjust: 'spacingAndGlyphs' } : {})}
      {...opts}
    >
      {seg.text}
    </text>
  );

  // Центры боксов и точки выхода/входа стрелок (8px ниже бокса).
  const p1AStart = { x: p1.boxA.x + p1.boxA.w / 2, y: p1.boxBottom + 8 };
  const p1BEnd = { x: p1.boxB.x + p1.boxB.w / 2, y: p1.boxBottom + 8 };
  const p2AStart = { x: p2.boxA.x + p2.boxA.w / 2, y: p2.boxBottom + 8 };
  const p2BEnd = { x: p2.boxB.x + p2.boxB.w / 2, y: p2.boxBottom + 8 };

  return (
    <Stage label="13 Emergent abilities">
      <Meta num="13" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Две пары предложений со стрелками: в первой «Она» соединяется с «приманку», во второй — с «Рыба»"
        >
          <defs>
            <marker
              id="arrow19"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#1A1A1A" />
            </marker>
          </defs>

          {/* ─── Пара 1 ─────────────────────────────────────── */}
          {renderText(p1.seg1, p1.baselineY)}
          {renderText(p1.boxA, p1.baselineY)}
          {renderBox(p1.boxA, p1.boxTop, p1.boxBottom - p1.boxTop)}
          {renderText(p1.period, p1.baselineY)}
          {renderText(p1.boxB, p1.baselineY)}
          {renderBox(p1.boxB, p1.boxTop, p1.boxBottom - p1.boxTop)}
          {renderText(p1.seg2, p1.baselineY)}

          <path
            d={`M ${p1AStart.x} ${p1AStart.y} C ${p1AStart.x + 20} ${p1AStart.y + 50}, ${
              p1BEnd.x - 20
            } ${p1BEnd.y + 50}, ${p1BEnd.x} ${p1BEnd.y}`}
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
            markerEnd="url(#arrow19)"
          />

          {/* ─── Пара 2 ─────────────────────────────────────── */}
          {renderText(p2.boxA, p2.baselineY)}
          {renderBox(p2.boxA, p2.boxTop, p2.boxBottom - p2.boxTop)}
          {renderText(p2.seg1, p2.baselineY)}
          {renderText(p2.boxB, p2.baselineY)}
          {renderBox(p2.boxB, p2.boxTop, p2.boxBottom - p2.boxTop)}
          {renderText(p2.seg2, p2.baselineY)}

          <path
            d={`M ${p2AStart.x} ${p2AStart.y} C ${p2AStart.x + 80} ${p2AStart.y + 85}, ${
              p2BEnd.x - 80
            } ${p2BEnd.y + 85}, ${p2BEnd.x} ${p2BEnd.y}`}
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
            markerEnd="url(#arrow19)"
          />
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.3 От Transformer до GPT-3</div>
        <h2 className="title" style={{ fontSize: 60, lineHeight: 1.1 }}>
          Emergent abilities
        </h2>
        <p className="cap" style={{ fontSize: 30, lineHeight: 1.3, marginTop: 24 }}>
          Чему не учили — начало получаться само
        </p>
        <p
          style={{
            margin: '28px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 16,
            letterSpacing: '0.08em',
            color: 'var(--mute-2)',
          }}
        >
          2020 · GPT-3 · 175B
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
