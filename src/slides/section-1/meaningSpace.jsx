const INK = '#1A1A1A';

/**
 * Иконки и раскладка «пространства смыслов» — общий источник для слайдов 26,
 * 34 и 35, чтобы все показывали ОДНУ И ТУ ЖЕ картинку (точки-объекты,
 * сгруппированные в кластеры). Цвет линий параметризуется (для «серого» ДО).
 */
export function SpaceIcon({ name, c = INK }) {
  switch (name) {
    case 'football':
      return (
        <g fill="none" stroke={c} strokeWidth="1.5">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <polygon points="0,-6 5.7,-1.9 3.5,4.9 -3.5,4.9 -5.7,-1.9" fill={c} stroke="none" />
          <line x1="0" y1="-6" x2="0" y2="-14" />
          <line x1="5.7" y1="-1.9" x2="13.3" y2="-4.3" />
          <line x1="3.5" y1="4.9" x2="8.2" y2="11.3" />
          <line x1="-3.5" y1="4.9" x2="-8.2" y2="11.3" />
          <line x1="-5.7" y1="-1.9" x2="-13.3" y2="-4.3" />
        </g>
      );
    case 'basketball':
      return (
        <g fill="none" stroke={c} strokeWidth="1.4">
          <circle cx="0" cy="0" r="14" strokeWidth="1.6" />
          <line x1="0" y1="-14" x2="0" y2="14" />
          <line x1="-14" y1="0" x2="14" y2="0" />
          <path d="M 0 -14 Q -7 0 0 14" />
          <path d="M 0 -14 Q 7 0 0 14" />
        </g>
      );
    case 'tennis':
      return (
        <g fill="none" stroke={c} strokeWidth="1.4">
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
            stroke={c}
            strokeWidth="1.6"
          />
          <path d="M 0 -10 L 1 -16" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
          <path d="M 1 -16 Q 8 -18 9 -12" fill="none" stroke={c} strokeWidth="1.4" />
        </g>
      );
    case 'banana':
      return (
        <g fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M -14 -4 Q -10 14 14 8 Q 11 -2 -14 -4 Z" />
          <path d="M -14 -4 Q -16 -7 -14 -8" />
        </g>
      );
    case 'cherry':
      return (
        <g fill="none" stroke={c} strokeWidth="1.4">
          <circle cx="-5" cy="7" r="6" />
          <circle cx="6" cy="9" r="6" />
          <path d="M -5 1 Q 0 -10 1 -14" />
          <path d="M 6 3 Q 2 -8 1 -14" />
          <path d="M 1 -14 Q 7 -14 10 -10" />
        </g>
      );
    case 'house':
      return (
        <g fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M -14 12 L -14 -2 L 0 -14 L 14 -2 L 14 12 Z" />
          <path d="M -4 12 L -4 2 L 4 2 L 4 12" strokeWidth="1.4" />
        </g>
      );
    case 'truck':
      return (
        <g fill="none" stroke={c} strokeWidth="1.4">
          <rect x="-16" y="-7" width="13" height="11" />
          <path d="M -3 4 L -3 -3 L 4 -3 L 9 2 L 16 2 L 16 4 Z" />
          <circle cx="-10" cy="6" r="3.5" fill="#FAFAF7" />
          <circle cx="11" cy="6" r="3.5" fill="#FAFAF7" />
        </g>
      );
    case 'car':
      return (
        <g fill="none" stroke={c} strokeWidth="1.4">
          <path d="M -16 4 L -14 -2 L -8 -2 L -4 -8 L 6 -8 L 12 -2 L 16 -2 L 16 4 Z" strokeLinejoin="round" />
          <circle cx="-9" cy="4" r="3.5" fill="#FAFAF7" />
          <circle cx="9" cy="4" r="3.5" fill="#FAFAF7" />
        </g>
      );
    default:
      return null;
  }
}

// Раскладка кластеров в координатах сетки (gx, gy) ∈ [0;6]: спорт (верх-слева),
// фрукты (верх-справа), транспорт (низ). Тот же набор объектов, что на слайде 26,
// но сокращён до 6 — крупные иконки читаются с дальних рядов (слабовидящие).
export const SPACE_CLUSTERS = [
  { name: 'football', gx: 1, gy: 5, group: 'спорт' },
  { name: 'tennis', gx: 1, gy: 4, group: 'спорт' },
  { name: 'apple', gx: 5, gy: 5, group: 'фрукты' },
  { name: 'banana', gx: 4, gy: 5, group: 'фрукты' },
  { name: 'house', gx: 1, gy: 1, group: 'транспорт' },
  { name: 'car', gx: 4, gy: 1, group: 'транспорт' },
];
