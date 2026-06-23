import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import { SpaceIcon, SPACE_CLUSTERS } from './meaningSpace.jsx';

export const meta = {
  id: '30',
  type: 'C',
  title: 'После обучения пространство фиксируется',
  subblock: '2.2 Обучение и заморозка',
};

const INK = '#1A1A1A';
const RULE = '#D9D7CF';
const PALE = '#F1F0EC';

// То же пространство, что на слайде 34. Рамка отцентрована по вертикали визуала
// (= по центру текста справа): её центр совпадает с серединой viewBox (400).
const UNIT = 84;
const GMAX = 6;
const FRAME_PAD = 36;
const FRAME_H = GMAX * UNIT + FRAME_PAD * 2;
const FRAME_TOP = 400 - FRAME_H / 2;
const ORIGIN_X = 295;
const ORIGIN_Y = FRAME_TOP + FRAME_PAD + GMAX * UNIT; // нижняя ось (gy=0)
const toX = (gx) => ORIGIN_X + gx * UNIT;
const toY = (gy) => ORIGIN_Y - gy * UNIT;
const MIDX = toX(3);
const FRAME_BOTTOM = FRAME_TOP + FRAME_H;

/**
 * Слайд 35 · После обучения пространство фиксируется
 * C-шаблон. То же пространство смыслов, что сложилось на слайде 34, но теперь
 * зафиксированное: точки на местах, фон бледный. Снизу стрелка «ваши вопросы»
 * упирается в него и не меняет. Мост к Части III: куда тогда уходят данные.
 */
export default function Slide30() {
  return (
    <Stage label="30 После обучения пространство фиксируется">
      <Meta num="30" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Зафиксированное пространство смыслов; вопросы снизу упираются в него и не меняют"
        >
          <text x={MIDX} y={FRAME_TOP - 26} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="28" fill={INK}>
            пространство смыслов зафиксировано
          </text>

          {/* Рамка вокруг сетки */}
          <rect x={toX(0) - FRAME_PAD} y={FRAME_TOP} width={GMAX * UNIT + FRAME_PAD * 2} height={FRAME_H} rx={16} fill={PALE} stroke={RULE} strokeWidth={1.5} />

          {/* Лёгкая сетка без чисел */}
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

          {/* Те же объекты на местах */}
          {SPACE_CLUSTERS.map((it) => (
            <g key={it.name} transform={`translate(${toX(it.gx)}, ${toY(it.gy)}) scale(1.9)`}>
              <SpaceIcon name={it.name} c={INK} />
            </g>
          ))}

          {/* Вопросы упираются в зафиксированное пространство */}
          <line x1={MIDX} y1={FRAME_BOTTOM + 70} x2={MIDX} y2={FRAME_BOTTOM + 24} stroke={INK} strokeWidth={2.4} />
          <polygon points={`${MIDX},${FRAME_BOTTOM + 8} ${MIDX - 11},${FRAME_BOTTOM + 30} ${MIDX + 11},${FRAME_BOTTOM + 30}`} fill={INK} />
          <text x={MIDX} y={FRAME_BOTTOM + 104} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="28" fill={INK}>
            ваши вопросы его не меняют
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Обучение и заморозка</div>
        <h2 className="title">После обучения пространство фиксируется</h2>
        <p className="cap">
          Когда обучение закончилось, пространство смыслов фиксируется. Дальше
          модель только пользуется тем, что уже сложилось, и сама по себе не
          меняется.
          <br />
          <br />
          Сколько бы вы её ни спрашивали — пространство остаётся прежним.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
