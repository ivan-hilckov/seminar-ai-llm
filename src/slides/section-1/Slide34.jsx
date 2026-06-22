import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '34',
  type: 'C',
  title: 'Как училась модель',
  subblock: '2.4 Обучение и заморозка',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';

const sources = ['сайты', 'книги', 'статьи', 'код', 'форумы'];
const srcY = [178, 230, 282, 334, 386];

// Мини-карта смыслов (та же кластеризация, что на слайде «Пространство смыслов»)
const mapDots = [
  { x: 744, y: 206, label: 'ель' },
  { x: 884, y: 190, label: 'сосна' },
  { x: 800, y: 262, label: 'пихта' },
  { x: 744, y: 410, label: 'почва' },
  { x: 884, y: 404, label: 'грунт' },
  { x: 760, y: 474, label: 'кислотность' },
];

const BOX_X = 382;
const BOX_Y = 228;
const BOX_W = 268;
const BOX_H = 128;
const BOX_CY = BOX_Y + BOX_H / 2;

/**
 * Слайд 34 · Как училась модель
 * C-шаблон. Конвейер слева направо: поток разных текстов → коробка «модель
 * сама подстраивается» (с подписью про цену) → мини-карта смыслов с той же
 * кластеризацией. Карту никто не расставлял — она сложилась сама из текста.
 */
export default function Slide34() {
  return (
    <Stage label="34 Как училась модель">
      <Meta num="34" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Конвейер: источники текста → модель подстраивается → карта смыслов с кластерами"
        >
          {/* Заголовки этапов */}
          <g fontFamily="IBM Plex Mono, monospace" fontSize="18" fill={MUTE} letterSpacing="0.08em">
            <text x={120} y={86} textAnchor="middle">ИСТОЧНИКИ</text>
            <text x={BOX_X + BOX_W / 2} y={86} textAnchor="middle">ОБУЧЕНИЕ</text>
            <text x={822} y={86} textAnchor="middle">КАРТА СМЫСЛОВ</text>
          </g>

          {/* Источники + воронка в коробку */}
          {sources.map((s, i) => (
            <g key={s}>
              <line x1={222} y1={srcY[i] - 8} x2={BOX_X} y2={BOX_CY} stroke={RULE} strokeWidth={1} />
              <text x={206} y={srcY[i]} textAnchor="end" fontFamily="IBM Plex Sans, sans-serif" fontSize="25" fill={INK}>
                {s}
              </text>
            </g>
          ))}

          {/* Коробка обучения */}
          <rect x={BOX_X} y={BOX_Y} width={BOX_W} height={BOX_H} rx={14} fill="none" stroke={INK} strokeWidth={1.6} />
          <text x={BOX_X + BOX_W / 2} y={BOX_CY - 8} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="25" fill={INK}>
            модель сама
          </text>
          <text x={BOX_X + BOX_W / 2} y={BOX_CY + 26} textAnchor="middle" fontFamily="IBM Plex Sans, sans-serif" fontSize="25" fill={INK}>
            подстраивается
          </text>
          <text x={BOX_X + BOX_W / 2} y={416} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="20" fill={MUTE}>
            один раз · месяцы ·
          </text>
          <text x={BOX_X + BOX_W / 2} y={446} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="20" fill={MUTE}>
            тысячи видеокарт
          </text>

          {/* Стрелка коробка → карта */}
          <line x1={BOX_X + BOX_W} y1={BOX_CY} x2={702} y2={BOX_CY} stroke={INK} strokeWidth={1.8} />
          <polygon points={`712,${BOX_CY} 698,${BOX_CY - 8} 698,${BOX_CY + 8}`} fill={INK} />

          {/* Карта смыслов — кластеры */}
          {mapDots.map((d) => (
            <g key={d.label}>
              <circle cx={d.x} cy={d.y} r={5} fill={INK} />
              <text x={d.x + 16} y={d.y + 8} fontFamily="IBM Plex Sans, sans-serif" fontSize="24" fill={INK}>
                {d.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="right">
        <div className="sub">Обучение и заморозка</div>
        <h2 className="title">Как училась модель</h2>
        <p className="cap">
          Модель не писали по правилам. Ей показали огромное количество текста —
          и она сама подстроилась под него.
          <br />
          <br />
          Так и сложилась карта смыслов: близкие по смыслу слова встали рядом.
          Это делается один раз и очень долго — месяцы работы тысяч видеокарт.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
