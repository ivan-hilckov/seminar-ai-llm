import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '42',
  type: 'C',
  title: 'Где отвечает точно, а где выдумывает',
  subblock: '3.3 Точность и галлюцинации',
};

/**
 * Слайд 42 · Где отвечает точно, а где выдумывает
 * Полноширинный C. Не две колонки, а одна шкала: слева широкие темы с
 * плотными данными, справа узкие (лесные) — с редкими. Главный приём —
 * убывающая плотность штрихов (не цвет). Узкие темы ВНИИЛМ = опасная зона.
 */

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const HI = '#F0EEE8';

const LEFT_CHIPS = ['общая биология', 'школьная физика', 'перевод с английского'];
const RIGHT_CHIPS = ['короед в ельниках', 'локальные ГОСТы', 'методики ВНИИЛМ'];

// Штрихи плотности: густо слева, редеет вправо (шаг растёт).
const STROKES = (() => {
  const a = [];
  let x = 70;
  let gap = 9;
  while (x < 1660) {
    a.push(x);
    x += gap;
    gap += 1.7;
  }
  return a;
})();

function Chips({ items, x, w }) {
  return items.map((t, i) => (
    <g key={t} transform={`translate(${x}, ${64 + i * 92})`}>
      <rect x={0} y={0} width={w} height={66} rx={12} fill={HI} />
      <text x={w / 2} y={43} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="26" fill={INK}>
        {t}
      </text>
    </g>
  ));
}

export default function Slide42() {
  return (
    <Stage label="42 Где отвечает точно, а где выдумывает">
      <Meta num="42" type="C" />

      <div
        style={{
          position: 'absolute',
          top: 96,
          left: 96,
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 20,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
        }}
      >
        3.3 Точность и галлюцинации
      </div>

      <h2
        style={{
          position: 'absolute',
          top: 168,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 48,
          lineHeight: 1.18,
          color: 'var(--ink)',
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        Где отвечает точно, а&nbsp;где выдумывает
      </h2>

      <div style={{ position: 'absolute', top: 312, left: 96, width: 1728 }}>
        <svg
          viewBox="0 0 1728 500"
          style={{ width: 1728, height: 500, display: 'block' }}
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Шкала: слева широкие темы с плотными данными — точно; справа узкие лесные темы с редкими данными — выдумывает"
        >
          <Chips items={LEFT_CHIPS} x={40} w={380} />
          <Chips items={RIGHT_CHIPS} x={1308} w={380} />

          {/* ось-шкала */}
          <line x1={40} y1={362} x2={1660} y2={362} stroke={INK} strokeWidth={1.6} />
          <polygon points="1690,362 1666,350 1666,374" fill={INK} />

          {/* полоса плотности данных: густо → редко */}
          <g stroke={MUTE} strokeWidth={1.5} strokeLinecap="round">
            {STROKES.map((x, i) => (
              <line key={i} x1={x} y1={388} x2={x} y2={430} />
            ))}
          </g>

          <text x={70} y={478} fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={MUTE}>
            много текстов в обучении
          </text>
          <text x={1660} y={478} textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={MUTE}>
            мало текстов
          </text>
        </svg>
      </div>

      <p
        style={{
          position: 'absolute',
          bottom: 96,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 400,
          fontSize: 26,
          lineHeight: 1.4,
          color: 'var(--mute)',
          margin: 0,
          letterSpacing: '-0.002em',
        }}
      >
        Чем уже тема — тем тщательнее проверка.
      </p>

      <Foot />
    </Stage>
  );
}
