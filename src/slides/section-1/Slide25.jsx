import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '25',
  type: 'C',
  title: 'Знакомый пример: рост и вес',
  subblock: '2.1 Векторы смыслов',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';

// Диапазоны осей
const H0 = 146;
const H1 = 204;
const W0 = 48;
const W1 = 125;

const toX = (h) => 130 + ((h - H0) / (H1 - H0)) * 800;
const toY = (w) => 630 - ((w - W0) / (W1 - W0)) * 540;

const trend = (h) => 1.06 * h - 102;

// Детерминированное «облако» людей (без рандома — устойчиво при ресборке).
const people = Array.from({ length: 96 }, (_, i) => {
  const h = H0 + 6 + ((i * 53) % 520) / 10;
  const noise = Math.sin(i * 1.7) * 6 + Math.cos(i * 0.6) * 5 + Math.sin(i * 5.3) * 3;
  const w = Math.max(W0 + 2, Math.min(W1 - 2, trend(h) + noise));
  return { h, w };
});

const xTicks = [150, 160, 170, 180, 190, 200];
const yTicks = [60, 80, 100, 120];

/**
 * Слайд 26 · Знакомый пример: рост и вес
 * C-шаблон: житейская аналогия к «пространству смыслов». Люди как точки в
 * координатах (рост, вес), сквозь облако проступает общая зависимость —
 * линия. Близость слов устроена так же, только измерений не два, а сотни.
 * Подписи укрупнены ради читаемости с дальних рядов.
 */
export default function Slide25() {
  return (
    <Stage label="25 Знакомый пример: рост и вес">
      <Meta num="25" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1000 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1000, height: 720, display: 'block' }}
          aria-label="График: точки — отдельные люди по росту и весу, через облако проходит прямая линия общей зависимости вес = 1.06 × рост − 102"
        >
          {/* Оси */}
          <line x1={toX(H0)} y1={toY(W0)} x2={toX(H1)} y2={toY(W0)} stroke={INK} strokeWidth="1.6" />
          <line x1={toX(H0)} y1={toY(W0)} x2={toX(H0)} y2={toY(W1)} stroke={INK} strokeWidth="1.6" />

          {/* Сетка-засечки + подписи (укрупнены) */}
          <g fontFamily="IBM Plex Mono, monospace" fontSize="22" fill={MUTE}>
            {xTicks.map((h) => (
              <g key={`x-${h}`}>
                <line x1={toX(h)} y1={toY(W0)} x2={toX(h)} y2={toY(W0) + 10} stroke={INK} strokeWidth="1.4" />
                <text x={toX(h)} y={toY(W0) + 38} textAnchor="middle">
                  {h}
                </text>
              </g>
            ))}
            {yTicks.map((w) => (
              <g key={`y-${w}`}>
                <line x1={toX(H0) - 10} y1={toY(w)} x2={toX(H0)} y2={toY(w)} stroke={INK} strokeWidth="1.4" />
                <text x={toX(H0) - 20} y={toY(w) + 8} textAnchor="end">
                  {w}
                </text>
              </g>
            ))}
          </g>

          {/* Точки — отдельные люди */}
          {people.map((p, i) => (
            <circle key={i} cx={toX(p.h)} cy={toY(p.w)} r="5" fill={MUTE} opacity="0.7" />
          ))}

          {/* Линия общей зависимости */}
          <line x1={toX(148)} y1={toY(trend(148))} x2={toX(203)} y2={toY(trend(203))} stroke={INK} strokeWidth="4" />

          {/* Формула */}
          <text x={toX(176)} y={toY(62)} fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={INK}>
            вес ≈ 1.06 · рост − 102
          </text>

          {/* Заголовки осей (крупные) */}
          <text x={toX((H0 + H1) / 2)} y={toY(W0) + 76} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="28" fill={INK}>
            Рост, см
          </text>
          <text
            x={toX(H0) - 70}
            y={toY((W0 + W1) / 2)}
            textAnchor="middle"
            fontFamily="IBM Plex Sans, sans-serif"
            fontSize="28"
            fill={INK}
            transform={`rotate(-90 ${toX(H0) - 70} ${toY((W0 + W1) / 2)})`}
          >
            Вес, кг
          </text>

          {/* Легенда */}
          <g transform={`translate(${toX(150)}, ${toY(122)})`} fontFamily="IBM Plex Sans, sans-serif" fontSize="22" fill={INK}>
            <line x1="0" y1="0" x2="44" y2="0" stroke={INK} strokeWidth="4" />
            <text x="56" y="7">общая зависимость</text>
            <circle cx="22" cy="34" r="5" fill={MUTE} opacity="0.7" />
            <text x="56" y="41">отдельные люди</text>
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Векторы смыслов</div>
        <h2 className="title">Знакомый пример: рост и вес</h2>
        <p className="cap">
          У каждого человека — рост и вес, два числа. По множеству людей видно
          правило: выше — обычно тяжелее. Одна линия описывает общую зависимость.
          <br />
          <br />
          Близость смыслов устроена так же. Только у слова не два числа, а сотни.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
