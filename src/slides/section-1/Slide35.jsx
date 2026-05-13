import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '35',
  type: 'C',
  title: 'Пространство смыслов',
  subblock: '2.1 Векторы смыслов',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';

const ORIGIN_X = 217;
const ORIGIN_Y = 710;
const UNIT = 110;
const toX = (gx) => ORIGIN_X + gx * UNIT;
const toY = (gy) => ORIGIN_Y - gy * UNIT;

const items = [
  // Спорт (верх-слева)
  { x: 0.4, y: 5.7, icon: 'football', label: 'футбол' },
  { x: 1.6, y: 5.0, icon: 'basketball', label: 'баскетбол' },
  { x: 0.5, y: 4.5, icon: 'tennis', label: 'теннис' },

  // Фрукты (верх-справа)
  { x: 5.4, y: 5.5, icon: 'apple', label: 'яблоко' },
  { x: 4.3, y: 5.0, icon: 'banana', label: 'банан' },
  { x: 5.6, y: 4.4, icon: 'cherry', label: 'вишня' },
  { x: 4.5, y: 4.0, icon: 'strawberry', label: 'клубника' },

  // Здания + транспорт (низ)
  { x: 1.3, y: 1.6, icon: 'castle', label: 'замок' },
  { x: 2.4, y: 0.7, icon: 'house', label: 'дом' },
  { x: 3.5, y: 1.8, icon: 'building', label: 'здание' },
  { x: 4.6, y: 0.4, icon: 'bicycle', label: 'велосипед' },
  { x: 5.3, y: 1.4, icon: 'truck', label: 'грузовик' },
  { x: 5.7, y: 0.5, icon: 'car', label: 'машина' },
];

function Icon({ name }) {
  switch (name) {
    case 'football':
      return (
        <g>
          <circle cx="0" cy="0" r="14" fill="none" stroke={INK} strokeWidth="1.6" />
          <polygon points="-5,-3 5,-3 7,5 0,9 -7,5" fill={INK} />
        </g>
      );
    case 'basketball':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <line x1="-14" y1="0" x2="14" y2="0" />
          <line x1="0" y1="-14" x2="0" y2="14" />
          <path d="M -10 -10 Q 0 0 10 10" />
          <path d="M 10 -10 Q 0 0 -10 10" />
        </g>
      );
    case 'tennis':
      return (
        <g fill="none" stroke={INK} strokeWidth="1.4">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <path d="M -13 -3 Q 0 6 13 -3" />
          <path d="M -13 3 Q 0 -6 13 3" />
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
 * Слайд 35 · Пространство смыслов
 * C-шаблон: 2D-сетка с тремя визуально различимыми кластерами слов
 * (фрукты, спорт, здания+транспорт). Кластеры не подписаны — группировка
 * считывается из расположения. Под визуалом — мелкая формула word2vec.
 */
export default function Slide35() {
  return (
    <Stage label="35 Пространство смыслов">
      <Meta num="35" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Двумерное пространство слов с тремя кластерами: фрукты, спорт, здания и транспорт"
        >
          {/* Сетка */}
          <g>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line
                key={`vx-${i}`}
                x1={toX(i)}
                y1={toY(0)}
                x2={toX(i)}
                y2={toY(6)}
                stroke={RULE}
                strokeWidth="1"
              />
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line
                key={`vy-${i}`}
                x1={toX(0)}
                y1={toY(i)}
                x2={toX(6)}
                y2={toY(i)}
                stroke={RULE}
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Усиленные оси */}
          <line x1={toX(0)} y1={toY(0)} x2={toX(6)} y2={toY(0)} stroke={INK} strokeWidth="1.4" />
          <line x1={toX(0)} y1={toY(0)} x2={toX(0)} y2={toY(6)} stroke={INK} strokeWidth="1.4" />

          {/* Подписи осей */}
          <g fontFamily="IBM Plex Mono, monospace" fontSize="14" fill={MUTE}>
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <text key={`xl-${i}`} x={toX(i)} y={toY(0) + 24} textAnchor="middle">
                {i}
              </text>
            ))}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <text key={`yl-${i}`} x={toX(0) - 18} y={toY(i) + 5} textAnchor="end">
                {i}
              </text>
            ))}
          </g>

          {/* Слова — иконка + подпись */}
          {items.map((item) => (
            <g key={item.label} transform={`translate(${toX(item.x)}, ${toY(item.y)})`}>
              <Icon name={item.icon} />
              <text
                y={34}
                textAnchor="middle"
                fontFamily="IBM Plex Mono, monospace"
                fontSize="14"
                letterSpacing="0.04em"
                fill={INK}
              >
                {item.label}
              </text>
            </g>
          ))}

          {/* Опциональная формула под визуалом */}
          <text
            x={toX(0)}
            y={780}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="20"
            letterSpacing="0.04em"
            fill={MUTE}
          >
            король − мужчина + женщина ≈ королева
          </text>
        </svg>
      </div>

      <div className="right">
        <h2 className="title">Пространство смыслов</h2>
        <p className="cap">
          Каждое слово — точка.
          <br />
          Расстояние = близость смысла.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
