import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '30',
  type: 'B',
  title: 'Модель не помнит — перечитывает',
  subblock: '2.2 Контекст и память',
};

const INK = '#1A1A1A';
const MUTE_2 = '#9A9893';
const RULE = '#D9D7CF';
const HI = '#F0EEE8';

const BH = 70;
const PITCH = 86;
const TOP = 24;

// Реальный диалог (тот же, что на слайде 31)
const chat = [
  { label: 'Составь план эксперимента', role: 'user' },
  { label: 'Конечно. Какая тема?', role: 'bot' },
  { label: 'Влияние засухи на хвойные', role: 'user' },
  { label: 'Уточним методику измерения?', role: 'bot' },
  { label: 'Какие методы предложишь?', role: 'user' },
  { label: 'Предлагаю три метода…', role: 'bot' },
];

const U_X = 1086;
const U_W = 600;
const A_X = 300;
const A_W = 600;

function Bubble({ y, label, role }) {
  const user = role === 'user';
  const x = user ? U_X : A_X;
  const w = user ? U_W : A_W;
  return (
    <g>
      <rect x={x} y={y} width={w} height={BH} rx={16} fill={user ? HI : 'none'} stroke={user ? 'none' : RULE} strokeWidth={1.2} />
      <text x={x + 26} y={y + BH / 2 + 9} fontFamily="IBM Plex Sans, sans-serif" fontSize="27" fill={INK}>
        {label}
      </text>
      <text
        x={user ? x + w - 26 : x + w - 26}
        y={y + BH / 2 + 8}
        textAnchor="end"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="19"
        letterSpacing="0.06em"
        fill={MUTE_2}
      >
        {user ? 'вы' : 'модель'}
      </text>
    </g>
  );
}

// Петля ↻ — «перечитывает всё»
function Loop({ cx, cy, r = 30 }) {
  const RAD = Math.PI / 180;
  const pt = (d) => [cx + r * Math.cos(d * RAD), cy - r * Math.sin(d * RAD)];
  const [sx, sy] = pt(60);
  const [ex, ey] = pt(120);
  return (
    <g fill="none" stroke={INK} strokeWidth={2.6} strokeLinecap="round">
      <path d={`M ${sx} ${sy} A ${r} ${r} 0 1 1 ${ex} ${ey}`} />
      <polyline points={`${ex - 9},${ey - 3} ${ex + 3},${ey - 8} ${ex + 6},${ey + 5}`} />
    </g>
  );
}

/**
 * Слайд 30 · Модель не помнит — перечитывает
 * B-шаблон. Реальный короткий диалог (тот же, что на слайде 31). Слева —
 * скоба со значком ↻: перед каждым ответом модель перечитывает всю беседу
 * заново, с начала. Слово «окно» не используем (вводится на слайде 31).
 */
export default function Slide30() {
  const bottom = TOP + PITCH * (chat.length - 1) + BH;

  return (
    <Stage label="30 Модель не помнит — перечитывает">
      <Meta num="30" type="B" />

      <div style={{ position: 'absolute', top: 92, left: 96 }}>
        <div
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 18,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--mute)',
            marginBottom: 14,
          }}
        >
          Контекст и память
        </div>
        <h2
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 50,
            lineHeight: 1.1,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Модель не помнит — перечитывает
        </h2>
        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 400,
            fontSize: 28,
            lineHeight: 1.3,
            color: 'var(--ink)',
            margin: '20px 0 0 0',
            maxWidth: 1500,
          }}
        >
          Чтобы ответить, модель каждый раз перечитывает всю беседу заново — с самого начала. Чем длиннее диалог, тем больше.
        </p>
      </div>

      <div style={{ position: 'absolute', top: 332, left: 96, width: 1728, height: 600 }}>
        <svg viewBox="0 0 1728 600" xmlns="http://www.w3.org/2000/svg" style={{ width: 1728, height: 600, display: 'block' }} aria-label="Короткий диалог; слева значок перечитывания: каждый ответ — заново вся беседа">
          {/* Скоба слева — охватывает всю беседу */}
          <path
            d={`M 296 ${TOP} h -22 v ${bottom - TOP} h 22`}
            fill="none"
            stroke={INK}
            strokeWidth={1.6}
          />
          <Loop cx={170} cy={(TOP + bottom) / 2 - 44} />
          <text x={170} y={(TOP + bottom) / 2 + 8} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="26" fill={INK}>
            читает
          </text>
          <text x={170} y={(TOP + bottom) / 2 + 42} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="26" fill={INK}>
            всё заново
          </text>

          {chat.map((m, i) => (
            <Bubble key={i} y={TOP + i * PITCH} label={m.label} role={m.role} />
          ))}
        </svg>
      </div>

      <Foot />
    </Stage>
  );
}
