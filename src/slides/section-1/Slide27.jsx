import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '27',
  type: 'C',
  title: 'Что такое контекст',
  subblock: '2.2 Контекст и память',
};

const BG = '#FAFAF7';
const HI = '#F0EEE8';
const RULE = '#D9D7CF';
const RULE_SOFT = '#ECEAE3';
const MUTE = '#6B6B68';
const MUTE_2 = '#9A9893';
const INK = '#1A1A1A';
const INK_SOFT = '#2B2A28';

function Bubble({ x, y, w, h = 60, text, role }) {
  const isUser = role === 'user';
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={18}
        fill={isUser ? HI : 'none'}
        stroke={isUser ? 'none' : RULE}
        strokeWidth={isUser ? 0 : 1}
      />
      <text
        x={x + 22}
        y={y + h / 2 + 8}
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="400"
        fontSize="22"
        fill={INK}
      >
        {text}
      </text>
    </g>
  );
}

/**
 * Слайд 37 · Что такое контекст
 * C-шаблон. Слева — стилизованная имитация чат-окна с тремя
 * подсвеченными зонами: правила (system), история диалога,
 * текущий вопрос. Под визуалом — мелкая мета-подпись об объёме окна
 * (анонс слайда 38). Справа — заголовок и тезис.
 */
export default function Slide27() {
  return (
    <Stage label="27 Что такое контекст">
      <Meta num="27" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Стилизованное чат-окно с тремя подсвеченными зонами: правила, история диалога, текущий вопрос"
        >
          {/* ── Окно чата ── */}
          <rect
            x={20}
            y={20}
            width={1054}
            height={656}
            rx={14}
            fill={BG}
            stroke={RULE}
            strokeWidth={1}
          />

          {/* Заголовок окна — три точки */}
          <g fill={RULE}>
            <circle cx={44} cy={42} r={5} />
            <circle cx={64} cy={42} r={5} />
            <circle cx={84} cy={42} r={5} />
          </g>
          <line x1={20} y1={64} x2={1074} y2={64} stroke={RULE_SOFT} strokeWidth={1} />

          {/* ── Зона 1 · Правила ── */}
          <text
            x={44}
            y={98}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="18"
            fill={MUTE}
          >
            Правила
          </text>
          <rect
            x={44}
            y={108}
            width={1006}
            height={72}
            rx={8}
            fill={HI}
            stroke={MUTE_2}
            strokeWidth={1}
          />
          <text
            x={68}
            y={152}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="22"
            fill={INK_SOFT}
          >
            Ты — помощник-ассистент. Отвечай вежливо и кратко.
          </text>

          {/* ── Зона 2 · История диалога ── */}
          <text
            x={44}
            y={208}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="18"
            fill={MUTE}
          >
            История диалога
          </text>
          <rect
            x={44}
            y={218}
            width={1006}
            height={278}
            rx={8}
            fill="none"
            stroke={MUTE_2}
            strokeWidth={1}
          />

          <Bubble
            x={546}
            y={244}
            w={480}
            text="Помоги составить план эксперимента"
            role="user"
          />
          <Bubble
            x={68}
            y={322}
            w={320}
            text="Конечно. Какая тема?"
            role="assistant"
          />
          <Bubble
            x={486}
            y={400}
            w={540}
            text="Влияние засушливого периода на хвойные"
            role="user"
          />

          {/* ── Зона 3 · Текущий вопрос ── */}
          <text
            x={44}
            y={526}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
            fontSize="18"
            fill={INK}
          >
            Текущий вопрос
          </text>
          <rect
            x={44}
            y={536}
            width={1006}
            height={120}
            rx={8}
            fill={BG}
            stroke={INK}
            strokeWidth={1.5}
          />
          <Bubble
            x={546}
            y={566}
            w={480}
            text="Какие методы измерения предложишь?"
            role="user"
          />

          {/* ── Подпись об объёме окна (анонс слайда 38) ── */}
          <text
            x={20}
            y={730}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="22"
            letterSpacing="0.04em"
            fill={MUTE}
          >
            Объём окна: ~128 000 токенов (~200 страниц)
          </text>
        </svg>
      </div>

      <div className="right">
        <h2 className="title">Что такое контекст</h2>
        <p className="cap">
          Каждый ответ опирается только на три части:
          <br />
          правила + история + вопрос
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
