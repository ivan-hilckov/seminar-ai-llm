import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '17',
  type: 'C',
  title: 'За сколько сервисы добирались до 100 миллионов',
  subblock: '1.4 ChatGPT 2022',
};

/**
 * Слайд 24 · За сколько сервисы добирались до 100 миллионов
 * Горизонтальная гистограмма из 4 баров, длины линейно пропорциональны
 * числу месяцев. Бар ChatGPT — единственный --ink (герой), остальные --mute.
 * Без сетки, осей, легенд, иконок.
 */

const X_NAME_END = 270;
const X_BAR_START = 290;
const BAR_AREA_W = 660;
const MAX_MONTHS = 54;
const PX_PER_MONTH = BAR_AREA_W / MAX_MONTHS;

const BAR_H = 56;
const ROW_GAP = 36;
const ROW_STRIDE = BAR_H + ROW_GAP;
const VB_H = 600;
const ROWS_TOTAL_H = 4 * BAR_H + 3 * ROW_GAP;
const Y_FIRST_BAR_TOP = (VB_H - ROWS_TOTAL_H) / 2;

const items = [
  { name: 'ChatGPT', months: 2, label: '2 мес', hero: true },
  { name: 'TikTok', months: 9, label: '9 мес', hero: false },
  { name: 'Instagram', months: 30, label: '2.5 года', hero: false },
  { name: 'Facebook', months: 54, label: '4.5 года', hero: false },
];

export default function Slide17() {
  return (
    <Stage label="17 За сколько сервисы добирались до 100 миллионов">
      <Meta num="17" type="C" />

      <div className="visual">
        <svg
          viewBox={`0 0 1080 ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Горизонтальная гистограмма скорости роста до 100 миллионов пользователей: ChatGPT — 2 месяца, TikTok — 9 месяцев, Instagram — 2.5 года, Facebook — 4.5 года"
        >
          {items.map((it, i) => {
            const barTop = Y_FIRST_BAR_TOP + i * ROW_STRIDE;
            const barCY = barTop + BAR_H / 2;
            const barW = it.months * PX_PER_MONTH;
            const color = it.hero ? '#1A1A1A' : '#6B6B68';
            return (
              <g key={it.name}>
                <text
                  x={X_NAME_END}
                  y={barCY + 8}
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontWeight="400"
                  fontSize="26"
                  textAnchor="end"
                  fill="#1A1A1A"
                >
                  {it.name}
                </text>
                <rect
                  x={X_BAR_START}
                  y={barTop}
                  width={barW}
                  height={BAR_H}
                  rx="3"
                  ry="3"
                  fill={color}
                />
                <text
                  x={X_BAR_START + barW + 16}
                  y={barCY + 6}
                  fontFamily="IBM Plex Mono, monospace"
                  fontWeight="500"
                  fontSize="22"
                  fill={color}
                  style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
                >
                  {it.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.4 ChatGPT 2022</div>
        <h2 className="title" style={{ fontSize: 36, lineHeight: 1.18 }}>
          За&nbsp;сколько сервисы добирались до&nbsp;100&nbsp;миллионов
        </h2>
        <p
          className="cap"
          style={{
            fontSize: 32,
            lineHeight: 1.3,
            marginTop: 32,
            fontFeatureSettings: '"tnum" 1, "lnum" 1',
          }}
        >
          ChatGPT&nbsp;— 2&nbsp;месяца.
          <br />
          Facebook&nbsp;— 4.5&nbsp;года.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
