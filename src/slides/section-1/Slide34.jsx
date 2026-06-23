import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '34',
  type: 'C',
  title: 'Как выбирается слово',
  subblock: '2.4 Как рождается ответ',
};

const INK = '#1A1A1A';
const INK_SOFT = '#2B2A28';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';
const HI = '#F0EEE8';

const candidates = [
  { w: 'кислая', p: 58, chosen: true },
  { w: 'влажная', p: 22 },
  { w: 'бедная', p: 11 },
  { w: 'тёплая', p: 6 },
  { w: '…прочие', p: 3 },
];

const BAR_X = 250;
const BAR_MAX = 470;
const PCT_X = 770;
const ROW_TOP = 196;
const ROW_PITCH = 66;

/**
 * Слайд 32 · Как выбирается слово
 * C-шаблон. Незаконченная фраза → ранжированные кандидаты с полосками
 * вероятности (верхний выбран). Внизу — лента «слово за словом». Эхо Т9:
 * там кандидаты из словаря телефона, здесь — из всего языка.
 */
export default function Slide34() {
  return (
    <Stage label="34 Как выбирается слово">
      <Meta num="34" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Незаконченная фраза и ранжированные слова-кандидаты с вероятностями; верхнее выбрано"
        >
          {/* Незаконченная фраза */}
          <text x={28} y={74} fontFamily="IBM Plex Sans, sans-serif" fontSize="32" fill={INK}>
            В ельнике почва обычно
          </text>
          <rect x={508} y={50} width={16} height={32} fill={INK} />
          <text x={536} y={74} fontFamily="IBM Plex Sans, sans-serif" fontSize="32" fill={MUTE}>
            ______
          </text>

          <line x1={28} y1={110} x2={1060} y2={110} stroke={RULE} strokeWidth={1} />

          {/* Кандидаты */}
          {candidates.map((c, i) => {
            const yb = ROW_TOP + i * ROW_PITCH;
            const barW = (c.p / 58) * BAR_MAX;
            return (
              <g key={c.w}>
                {c.chosen && <rect x={20} y={yb - 34} width={1040} height={50} rx={8} fill={HI} />}
                <text x={44} y={yb} fontFamily="IBM Plex Sans, sans-serif" fontSize="27" fill={INK}>
                  {c.w}
                </text>
                <rect x={BAR_X} y={yb - 24} width={barW} height={26} rx={3} fill={c.chosen ? INK : INK_SOFT} opacity={c.chosen ? 1 : 0.55} />
                <text x={PCT_X} y={yb} fontFamily="IBM Plex Mono, monospace" fontSize="26" fill={INK}>
                  {c.p}%
                </text>
                {c.chosen && (
                  <text x={848} y={yb} fontFamily="IBM Plex Sans, sans-serif" fontSize="26" fill={MUTE}>
                    ← выбрано
                  </text>
                )}
              </g>
            );
          })}

          <line x1={28} y1={552} x2={1060} y2={552} stroke={RULE} strokeWidth={1} />

          {/* Лента «слово за словом» */}
          <text x={28} y={606} fontFamily="IBM Plex Mono, monospace" fontSize="26" fill={MUTE} letterSpacing="0.03em">
            …и так, слово за словом →
          </text>
          <text x={28} y={664} fontFamily="IBM Plex Sans, sans-serif" fontSize="28" fill={INK}>
            «В ельнике почва обычно{' '}
            <tspan fontWeight="600">кислая</tspan>, потому что…»
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Как рождается ответ</div>
        <h2 className="title">Как выбирается слово</h2>
        <p className="cap">
          Модель оценивает, насколько вероятно каждое следующее слово, и берёт
          из верхних.
          <br />
          <br />
          И так — слово за словом, до конца ответа.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
