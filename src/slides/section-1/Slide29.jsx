import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import { SpaceIcon, SPACE_CLUSTERS } from './meaningSpace.jsx';

export const meta = {
  id: '29',
  type: 'C',
  title: 'Откуда взялось пространство смыслов',
  subblock: '2.2 Обучение и заморозка',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';

// «ДО»: те же объекты, что справа, но разбросаны без связи (серым).
const scattered = [
  { name: 'apple', x: 250, y: 215 },
  { name: 'football', x: 110, y: 270 },
  { name: 'house', x: 300, y: 360 },
  { name: 'car', x: 130, y: 400 },
  { name: 'banana', x: 290, y: 510 },
  { name: 'tennis', x: 150, y: 540 },
];

// «ПОСЛЕ»: сетка как на слайде 26 (без координатных чисел — их с зала не видно).
// Метки групп не нужны: сами иконки (мяч, яблоко, машина) и есть подписи.
const ORIGIN_X = 600;
const ORIGIN_Y = 632;
const UNIT = 72;
const GMAX = 6;
const toX = (gx) => ORIGIN_X + gx * UNIT;
const toY = (gy) => ORIGIN_Y - gy * UNIT;

/**
 * Слайд 34 · Откуда взялось пространство смыслов
 * C-шаблон. Поток ДО → ПОСЛЕ: слева те же объекты разбросаны без связи →
 * стрелка «обучение» → справа они улеглись в кластеры на координатной сетке
 * (та самая картинка со слайда 26). Пространство никто не расставлял вручную —
 * оно сложилось само из текста. Крупные иконки, минимум подписей.
 */
export default function Slide29() {
  return (
    <Stage label="29 Откуда взялось пространство смыслов">
      <Meta num="29" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Слева объекты разбросаны без связи, стрелка обучение, справа те же объекты сгруппированы в кластеры на сетке"
        >
          {/* ── ДО ── */}
          <text x={205} y={150} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={MUTE} letterSpacing="0.08em">
            ДО ОБУЧЕНИЯ
          </text>
          {scattered.map((s) => (
            <g key={s.name} transform={`translate(${s.x}, ${s.y}) scale(1.7)`}>
              <SpaceIcon name={s.name} c={MUTE} />
            </g>
          ))}
          <text x={205} y={628} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="28" fill={MUTE}>
            связей нет
          </text>

          {/* ── Стрелка обучения ── */}
          <text x={448} y={352} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={INK} letterSpacing="0.08em">
            ОБУЧЕНИЕ
          </text>
          <line x1={372} y1={392} x2={520} y2={392} stroke={INK} strokeWidth="3" />
          <polygon points="536,392 516,381 516,403" fill={INK} />

          {/* ── ПОСЛЕ ── */}
          <text x={toX(3)} y={150} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={INK} letterSpacing="0.08em">
            ПОСЛЕ ОБУЧЕНИЯ
          </text>

          {/* лёгкая сетка без чисел — обозначает «это координаты» */}
          <g stroke={RULE} strokeWidth="1">
            {Array.from({ length: GMAX + 1 }, (_, i) => (
              <line key={`vx-${i}`} x1={toX(i)} y1={toY(0)} x2={toX(i)} y2={toY(GMAX)} />
            ))}
            {Array.from({ length: GMAX + 1 }, (_, i) => (
              <line key={`hy-${i}`} x1={toX(0)} y1={toY(i)} x2={toX(GMAX)} y2={toY(i)} />
            ))}
          </g>
          <line x1={toX(0)} y1={toY(0)} x2={toX(GMAX)} y2={toY(0)} stroke={INK} strokeWidth="1.6" />
          <line x1={toX(0)} y1={toY(0)} x2={toX(0)} y2={toY(GMAX)} stroke={INK} strokeWidth="1.6" />

          {SPACE_CLUSTERS.map((it) => (
            <g key={it.name} transform={`translate(${toX(it.gx)}, ${toY(it.gy)}) scale(1.9)`}>
              <SpaceIcon name={it.name} c={INK} />
            </g>
          ))}
        </svg>
      </div>

      <div className="right">
        <div className="sub">Обучение и заморозка</div>
        <h2 className="title">Откуда взялось пространство смыслов</h2>
        <p className="cap">
          Это пространство никто не расставлял вручную. Модель прочитала
          огромное количество текста — и сама расположила слова: те, что
          встречаются в похожих фразах, оказались рядом.
          <br />
          <br />
          Так из беспорядка сложилось то самое пространство смыслов со слайда 26.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
