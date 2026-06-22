import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '27',
  type: 'C',
  title: 'Близость считают углом между векторами',
  subblock: '2.1 Векторы смыслов',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';

const RAD = Math.PI / 180;
const pt = (ox, oy, r, deg) => [ox + r * Math.cos(deg * RAD), oy - r * Math.sin(deg * RAD)];

function Arrow({ ox, oy, deg, len, label, labelDeg }) {
  const [tx, ty] = pt(ox, oy, len, deg);
  const a = Math.atan2(ty - oy, tx - ox);
  const h = 16;
  const w = 8;
  const bx = tx - h * Math.cos(a);
  const by = ty - h * Math.sin(a);
  const lx = bx - w * Math.sin(a);
  const ly = by + w * Math.cos(a);
  const rx = bx + w * Math.sin(a);
  const ry = by - w * Math.cos(a);
  const [lblX, lblY] = pt(ox, oy, len + 38, labelDeg ?? deg);
  return (
    <g>
      <line x1={ox} y1={oy} x2={bx} y2={by} stroke={INK} strokeWidth="2.6" />
      <polygon points={`${tx},${ty} ${lx},${ly} ${rx},${ry}`} fill={INK} />
      <text
        x={lblX}
        y={lblY}
        textAnchor="middle"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="26"
        fill={INK}
      >
        {label}
      </text>
    </g>
  );
}

function arcPath(ox, oy, r, deg1, deg2) {
  const [sx, sy] = pt(ox, oy, r, deg1);
  const [ex, ey] = pt(ox, oy, r, deg2);
  return `M ${sx} ${sy} A ${r} ${r} 0 0 0 ${ex} ${ey}`;
}

function Axes({ ox, oy }) {
  return (
    <g stroke={RULE} strokeWidth="1.2">
      <line x1={ox} y1={oy} x2={ox + 420} y2={oy} />
      <line x1={ox} y1={oy} x2={ox} y2={oy - 420} />
    </g>
  );
}

/**
 * Слайд 28 · Близость считают углом между векторами
 * C-шаблон: две панели косинусной близости. Слева малый угол (вишня↔яблоко,
 * 0.97), справа почти прямой (вишня↔машина, ≈0). Превращает «близость = смысл»
 * в считаемое число. Закрывает подблок 2.1.
 */
export default function Slide27() {
  const AY = 640;

  return (
    <Stage label="27 Близость считают углом между векторами">
      <Meta num="27" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Две панели: малый угол между векторами вишни и яблока даёт близость 0.97, почти прямой угол между вишней и машиной — близость около нуля"
        >
          {/* Панель А — близкие */}
          <Axes ox={150} oy={AY} />
          <path d={arcPath(150, AY, 96, 56, 72)} fill="none" stroke={MUTE} strokeWidth="1.6" />
          <Arrow ox={150} oy={AY} deg={72} len={380} label="вишня" labelDeg={78} />
          <Arrow ox={150} oy={AY} deg={56} len={380} label="яблоко" labelDeg={52} />
          <text x={230} y={AY + 56} fontFamily="IBM Plex Mono, monospace" fontSize="34" fill={INK}>
            0.97
          </text>
          <text x={230} y={AY + 88} fontFamily="IBM Plex Sans, sans-serif" fontSize="22" fill={MUTE}>
            почти одно
          </text>

          {/* Панель Б — далёкие */}
          <Axes ox={610} oy={AY} />
          <path d={arcPath(610, AY, 96, 6, 88)} fill="none" stroke={MUTE} strokeWidth="1.6" />
          <Arrow ox={610} oy={AY} deg={88} len={380} label="вишня" labelDeg={92} />
          <Arrow ox={610} oy={AY} deg={6} len={380} label="машина" labelDeg={6} />
          <text x={700} y={AY + 56} fontFamily="IBM Plex Mono, monospace" fontSize="34" fill={INK}>
            ≈ 0
          </text>
          <text x={700} y={AY + 88} fontFamily="IBM Plex Sans, sans-serif" fontSize="22" fill={MUTE}>
            не связаны
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Векторы смыслов</div>
        <h2 className="title">Близость считают углом</h2>
        <p className="cap">
          Стрелка из начала координат к слову — это его вектор. Чем меньше угол
          между двумя стрелками, тем ближе смысл.
          <br />
          <br />
          Смотрят в одну сторону → близко к 1. Под прямым углом → 0. Вот так
          «близость = смысл» превращается в число.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
