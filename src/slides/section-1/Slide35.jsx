import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '35',
  type: 'C',
  title: 'После обучения карта застывает',
  subblock: '2.4 Обучение и заморозка',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';
const PALE = '#F1F0EC';

const terms = [
  { x: 150, y: 200, label: 'ель' },
  { x: 320, y: 178, label: 'сосна' },
  { x: 230, y: 268, label: 'пихта' },
  { x: 560, y: 196, label: 'почва' },
  { x: 720, y: 232, label: 'кислотность' },
  { x: 210, y: 372, label: 'засуха' },
  { x: 470, y: 360, label: 'короед' },
];

function Snow({ x, y, r = 16 }) {
  const a = [0, 60, 120];
  return (
    <g stroke={MUTE} strokeWidth={1.6} strokeLinecap="round">
      {a.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const dx = r * Math.cos(rad);
        const dy = r * Math.sin(rad);
        return <line key={deg} x1={x - dx} y1={y - dy} x2={x + dx} y2={y + dy} />;
      })}
    </g>
  );
}

function Lock({ x, y }) {
  return (
    <g stroke={MUTE} strokeWidth={2} fill="none">
      <rect x={x} y={y} width={30} height={24} rx={4} />
      <path d={`M ${x + 6} ${y} v -7 a 9 9 0 0 1 18 0 v 7`} />
      <circle cx={x + 15} cy={y + 12} r={2.4} fill={MUTE} stroke="none" />
    </g>
  );
}

/**
 * Слайд 35 · После обучения карта застывает
 * C-шаблон. Та же карта смыслов, но «подмёрзшая» (иней + замок), точки
 * на местах. Снизу — стрелка «ваши вопросы» упирается в карту (✕) и не
 * меняет её. Мост к Части III: куда тогда уходят данные.
 */
export default function Slide35() {
  return (
    <Stage label="35 После обучения карта застывает">
      <Meta num="35" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Замёрзшая карта смыслов с замком; вопросы снизу упираются в неё и не меняют"
        >
          {/* Заголовок-иней */}
          <Snow x={300} y={64} />
          <text x={547} y={74} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="27" fill={INK}>
            карта смыслов застыла
          </text>
          <Snow x={794} y={64} />

          {/* Подмёрзшая карта */}
          <rect x={64} y={120} width={966} height={320} rx={14} fill={PALE} stroke={RULE} strokeWidth={1.5} />
          <Lock x={968} y={140} />
          <Snow x={120} y={400} r={11} />
          <Snow x={960} y={380} r={11} />

          {terms.map((t) => (
            <g key={t.label}>
              <circle cx={t.x} cy={t.y} r={5} fill={INK} />
              <text x={t.x + 16} y={t.y + 8} fontFamily="IBM Plex Sans, sans-serif" fontSize="25" fill={INK}>
                {t.label}
              </text>
            </g>
          ))}

          {/* Вопросы упираются в карту */}
          <line x1={547} y1={566} x2={547} y2={476} stroke={INK} strokeWidth={2} />
          <polygon points="547,460 538,478 556,478" fill={INK} />
          {/* перечёркивание у границы */}
          <g stroke={INK} strokeWidth={3} strokeLinecap="round">
            <line x1={534} y1={444} x2={560} y2={470} />
            <line x1={560} y1={444} x2={534} y2={470} />
          </g>
          <text x={547} y={606} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="26" fill={INK}>
            ваши вопросы
          </text>
          <text x={620} y={462} fontFamily="IBM Plex Sans, sans-serif" fontSize="24" fill={MUTE}>
            карта не меняется
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Обучение и заморозка</div>
        <h2 className="title">После обучения карта застывает</h2>
        <p className="cap">
          Когда обучение закончилось — карта застывает. Дальше модель только
          пользуется тем, что уже сложилось, и сама по себе не меняется.
          <br />
          <br />
          Сколько бы вы её ни спрашивали — карта остаётся прежней.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
