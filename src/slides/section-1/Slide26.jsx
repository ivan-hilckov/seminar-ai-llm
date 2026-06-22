import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '26',
  type: 'C',
  title: 'Пространство смыслов',
  subblock: '2.1 Векторы смыслов',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';
const HL = '#F0EEE8';

// Оси идут до 7, точки лежат внутри [1;6] — ничего не сидит на самой оси.
const AXIS = [0, 1, 2, 3, 4, 5, 6, 7];
const AXIS_MAX = 7;
const ORIGIN_X = 100;
const ORIGIN_Y = 740;
const UNIT = 100;
const toX = (gx) => ORIGIN_X + gx * UNIT;
const toY = (gy) => ORIGIN_Y - gy * UNIT;

const items = [
  // Спорт (верх-слева)
  { x: 1, y: 6, icon: 'football', label: 'футбол', tbl: true },
  { x: 2, y: 5, icon: 'basketball', label: 'баскетбол' },
  { x: 1, y: 4, icon: 'tennis', label: 'теннис' },

  // Фрукты (верх-справа)
  { x: 5, y: 6, icon: 'apple', label: 'яблоко', tbl: true, hl: true },
  { x: 4, y: 5, icon: 'banana', label: 'банан', tbl: true },
  { x: 6, y: 4, icon: 'cherry', label: 'вишня', tbl: true },
  { x: 4, y: 4, icon: 'strawberry', label: 'клубника' },

  // Здания + транспорт (низ)
  { x: 1, y: 2, icon: 'castle', label: 'замок' },
  { x: 2, y: 1, icon: 'house', label: 'дом', tbl: true },
  { x: 3, y: 2, icon: 'building', label: 'здание' },
  { x: 4, y: 1, icon: 'bicycle', label: 'велосипед' },
  { x: 5, y: 2, icon: 'truck', label: 'грузовик' },
  { x: 6, y: 1, icon: 'car', label: 'машина', tbl: true },
];

const tableRows = items.filter((it) => it.tbl);
const hlIndex = tableRows.findIndex((it) => it.hl);

// Таблица вертикально отцентрована относительно сетки графика.
const GRID_MID = (toY(0) + toY(AXIS_MAX)) / 2;
const TBL_RH = 96;
const TBL_ROWS_H = TBL_RH * tableRows.length;
const HEADER_RULE_Y = GRID_MID - TBL_ROWS_H / 2;
const TBL_X0 = 920;
const TBL_X1 = 1716;
const COL_WORD = 1140;
const COL_A = 1500;
const COL_B = 1660;

function Icon({ name }) {
  switch (name) {
    case 'football':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.5">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <polygon points="0,-6 5.7,-1.9 3.5,4.9 -3.5,4.9 -5.7,-1.9" fill={INK} stroke="none" />
          <line x1="0" y1="-6" x2="0" y2="-14" />
          <line x1="5.7" y1="-1.9" x2="13.3" y2="-4.3" />
          <line x1="3.5" y1="4.9" x2="8.2" y2="11.3" />
          <line x1="-3.5" y1="4.9" x2="-8.2" y2="11.3" />
          <line x1="-5.7" y1="-1.9" x2="-13.3" y2="-4.3" />
        </g>
      );
    case 'basketball':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <line x1="0" y1="-14" x2="0" y2="14" />
          <line x1="-14" y1="0" x2="14" y2="0" />
          <path d="M 0 -14 Q -7 0 0 14" />
          <path d="M 0 -14 Q 7 0 0 14" />
        </g>
      );
    case 'tennis':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <path d="M -13 -3 C -5 -12 5 12 13 3" />
        </g>
      );
    case 'apple':
      return (
        <g>
          <path
            d="M -12 -1 C -14 -10 -4 -14 0 -9 C 4 -14 14 -10 12 -1 C 12 9 4 14 0 14 C -4 14 -12 9 -12 -1 Z"
            fill="none"
            stroke={INK}
            strokeWidth="1.6"
          />
          <path d="M 0 -10 L 1 -16" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 1 -16 Q 8 -18 9 -12" fill="none" stroke={INK} strokeWidth="1.4" />
        </g>
      );
    case 'banana':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M -14 -4 Q -10 14 14 8 Q 11 -2 -14 -4 Z" />
          <path d="M -14 -4 Q -16 -7 -14 -8" />
        </g>
      );
    case 'cherry':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <circle cx="-5" cy="7" r="6" />
          <circle cx="6" cy="9" r="6" />
          <path d="M -5 1 Q 0 -10 1 -14" />
          <path d="M 6 3 Q 2 -8 1 -14" />
          <path d="M 1 -14 Q 7 -14 10 -10" />
        </g>
      );
    case 'strawberry':
      return (
        <g>
          <path
            d="M -13 -4 C -13 -10 -6 -12 0 -10 C 6 -12 13 -10 13 -4 C 13 6 4 16 0 16 C -4 16 -13 6 -13 -4 Z"
            fill="none"
            stroke={INK}
            strokeWidth="1.6"
          />
          <path d="M -6 -10 L 0 -15 L 6 -10" fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="-5" cy="0" r="0.9" fill={INK} />
          <circle cx="5" cy="0" r="0.9" fill={INK} />
          <circle cx="0" cy="6" r="0.9" fill={INK} />
          <circle cx="-7" cy="6" r="0.9" fill={INK} />
          <circle cx="7" cy="6" r="0.9" fill={INK} />
        </g>
      );
    case 'castle':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4" strokeLinejoin="round">
          <path d="M -16 10 L -16 -4 L -12 -4 L -12 -8 L -8 -8 L -8 -4 L -4 -4 L -4 -8 L 0 -8 L 0 -4 L 4 -4 L 4 -8 L 8 -8 L 8 -4 L 12 -4 L 12 -8 L 16 -8 L 16 10 Z" />
          <path d="M -3 10 L -3 2 L 3 2 L 3 10" />
        </g>
      );
    case 'house':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M -14 12 L -14 -2 L 0 -14 L 14 -2 L 14 12 Z" />
          <path d="M -4 12 L -4 2 L 4 2 L 4 12" strokeWidth="1.4" />
        </g>
      );
    case 'building':
      return (
        <g>
          <rect x="-10" y="-16" width="20" height="32" fill="none" stroke={INK} strokeWidth="1.6" />
          <g fill={INK}>
            <rect x="-7" y="-13" width="4" height="4" />
            <rect x="3" y="-13" width="4" height="4" />
            <rect x="-7" y="-5" width="4" height="4" />
            <rect x="3" y="-5" width="4" height="4" />
            <rect x="-7" y="3" width="4" height="4" />
            <rect x="3" y="3" width="4" height="4" />
          </g>
        </g>
      );
    case 'bicycle':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <circle cx="-10" cy="6" r="6" />
          <circle cx="10" cy="6" r="6" />
          <path d="M -10 6 L -2 -6 L 6 -6 L 10 6 M -2 -6 L 0 -10 L 4 -10 M -2 -6 L 4 6" />
        </g>
      );
    case 'truck':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <rect x="-16" y="-7" width="13" height="11" />
          <path d="M -3 4 L -3 -3 L 4 -3 L 9 2 L 16 2 L 16 4 Z" />
          <circle cx="-10" cy="6" r="3.5" fill="#FAFAF7" />
          <circle cx="11" cy="6" r="3.5" fill="#FAFAF7" />
        </g>
      );
    case 'car':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <path d="M -16 4 L -14 -2 L -8 -2 L -4 -8 L 6 -8 L 12 -2 L 16 -2 L 16 4 Z" strokeLinejoin="round" />
          <circle cx="-9" cy="4" r="3.5" fill="#FAFAF7" />
          <circle cx="9" cy="4" r="3.5" fill="#FAFAF7" />
        </g>
      );
    default:
      return null;
  }
}

/**
 * Слайд 26 · Пространство смыслов (график + таблица)
 * Слева крупный 2D-график со словами-иконками, справа таблица с теми же
 * словами и их координатами. Точка на графике = строка в таблице. Оси с
 * запасом (до 7), точки внутри — не сидят на осях. Значки и подписи
 * укрупнены (была жалоба от слабовидящих). Подсвечена строка «яблоко».
 */
export default function Slide26() {
  return (
    <Stage label="26 Пространство смыслов">
      <Meta num="26" type="C" />

      <div style={{ position: 'absolute', top: 88, left: 96 }}>
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
          Векторы смыслов
        </div>
        <h2
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 44,
            lineHeight: 1.1,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          Пространство смыслов: слово — это точка с координатами
        </h2>
      </div>

      <div style={{ position: 'absolute', top: 200, left: 96, width: 1728, height: 800 }}>
        <svg
          viewBox="0 0 1728 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1728, height: 800, display: 'block' }}
          aria-label="Слева график: слова сгруппированы в кластеры (спорт, фрукты, здания и транспорт). Справа таблица тех же слов с их координатами."
        >
          {/* ── ГРАФИК ── */}
          {/* Сетка */}
          <g>
            {AXIS.map((i) => (
              <line key={`vx-${i}`} x1={toX(i)} y1={toY(0)} x2={toX(i)} y2={toY(AXIS_MAX)} stroke={RULE} strokeWidth="1" />
            ))}
            {AXIS.map((i) => (
              <line key={`vy-${i}`} x1={toX(0)} y1={toY(i)} x2={toX(AXIS_MAX)} y2={toY(i)} stroke={RULE} strokeWidth="1" />
            ))}
          </g>

          {/* Усиленные оси */}
          <line x1={toX(0)} y1={toY(0)} x2={toX(AXIS_MAX)} y2={toY(0)} stroke={INK} strokeWidth="1.6" />
          <line x1={toX(0)} y1={toY(0)} x2={toX(0)} y2={toY(AXIS_MAX)} stroke={INK} strokeWidth="1.6" />

          {/* Подписи осей */}
          <g fontFamily="IBM Plex Mono, monospace" fontSize="22" fill={MUTE}>
            {AXIS.map((i) => (
              <text key={`xl-${i}`} x={toX(i)} y={toY(0) + 38} textAnchor="middle">
                {i}
              </text>
            ))}
            {AXIS.map((i) => (
              <text key={`yl-${i}`} x={toX(0) - 28} y={toY(i) + 7} textAnchor="end">
                {i}
              </text>
            ))}
          </g>

          {/* Слова — иконка + подпись */}
          {items.map((item) => (
            <g key={item.label} transform={`translate(${toX(item.x)}, ${toY(item.y)})`}>
              <g transform="scale(1.5)">
                <Icon name={item.icon} />
              </g>
              <text
                y={48}
                textAnchor="middle"
                fontFamily="IBM Plex Mono, monospace"
                fontSize="24"
                letterSpacing="0.02em"
                fill={INK}
              >
                {item.label}
              </text>
            </g>
          ))}

          {/* ── ТАБЛИЦА ── */}
          {hlIndex >= 0 && (
            <rect
              x={TBL_X0}
              y={HEADER_RULE_Y + hlIndex * TBL_RH}
              width={TBL_X1 - TBL_X0}
              height={TBL_RH}
              fill={HL}
            />
          )}

          <g fontFamily="IBM Plex Mono, monospace" fontSize="20" fill={MUTE} letterSpacing="0.08em">
            <text x={COL_WORD} y={HEADER_RULE_Y - 24} textAnchor="middle">СЛОВО</text>
            <text x={COL_A} y={HEADER_RULE_Y - 24} textAnchor="middle">ОСЬ 1</text>
            <text x={COL_B} y={HEADER_RULE_Y - 24} textAnchor="middle">ОСЬ 2</text>
          </g>
          <line x1={TBL_X0} y1={HEADER_RULE_Y} x2={TBL_X1} y2={HEADER_RULE_Y} stroke={INK} strokeWidth="1.6" />

          {tableRows.map((r, i) => {
            const baseY = HEADER_RULE_Y + i * TBL_RH + TBL_RH / 2 + 12;
            const sepY = HEADER_RULE_Y + (i + 1) * TBL_RH;
            return (
              <g key={r.label}>
                <text x={COL_WORD} y={baseY} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="34" fill={INK}>
                  {r.label}
                </text>
                <text x={COL_A} y={baseY} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="34" fill={INK}>
                  {r.x}
                </text>
                <text x={COL_B} y={baseY} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="34" fill={INK}>
                  {r.y}
                </text>
                <line x1={TBL_X0} y1={sepY} x2={TBL_X1} y2={sepY} stroke={RULE} strokeWidth="1" />
              </g>
            );
          })}

          <text
            x={TBL_X0}
            y={HEADER_RULE_Y + TBL_ROWS_H + 46}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="20"
            fill={MUTE}
            letterSpacing="0.02em"
          >
            точка на графике = пара чисел · близкие по смыслу рядом
          </text>
        </svg>
      </div>

      <Foot />
    </Stage>
  );
}
