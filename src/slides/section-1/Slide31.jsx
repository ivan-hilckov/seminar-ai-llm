import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '31',
  type: 'C',
  title: 'Что такое контекст',
  subblock: '2.3 Контекст и память',
};

const BG = '#FAFAF7';
const HI = '#F0EEE8';
const PALE = '#F4F3EF';
const RULE = '#D9D7CF';
const RULE_SOFT = '#ECEAE3';
const MUTE = '#6B6B68';
const MUTE_2 = '#9A9893';
const INK = '#1A1A1A';

function Bubble({ x, y, w, h = 52, text, role }) {
  const isUser = role === 'user';
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        fill={isUser ? HI : 'none'}
        stroke={isUser ? 'none' : RULE}
        strokeWidth={isUser ? 0 : 1}
      />
      <text x={x + 18} y={y + h / 2 + 6} fontFamily="IBM Plex Sans, sans-serif" fontSize="20" fill={INK}>
        {text}
      </text>
    </g>
  );
}

const WIN_X = 16;
const WIN_W = 1058;
const IN_X = 44;
const IN_W = 1006;
const IN_R = IN_X + IN_W; // правый внутренний край

/**
 * Слайд 29 · Что такое контекст
 * C-шаблон. Чат-окно с тремя подписанными зонами: правила работы (бледнее,
 * со значком-замком и припиской «задаёт сервис»), что уже обсудили, ваш
 * вопрос. Окно = граница знания: чего нет в листе — для модели не существует.
 */
export default function Slide31() {
  return (
    <Stage label="31 Что такое контекст">
      <Meta num="31" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Чат-окно с тремя зонами: правила работы, что уже обсудили, ваш вопрос."
        >
          {/* ── Окно чата ── */}
          <rect x={WIN_X} y={20} width={WIN_W} height={656} rx={14} fill={BG} stroke={RULE} strokeWidth={1} />
          <g fill={RULE}>
            <circle cx={WIN_X + 24} cy={44} r={5} />
            <circle cx={WIN_X + 44} cy={44} r={5} />
            <circle cx={WIN_X + 64} cy={44} r={5} />
          </g>
          <line x1={WIN_X} y1={66} x2={WIN_X + WIN_W} y2={66} stroke={RULE_SOFT} strokeWidth={1} />

          {/* ── Зона 1 · Правила работы (бледнее) ── */}
          <g stroke={MUTE_2} strokeWidth="1.4" fill="none">
            <rect x={IN_X} y={92} width={14} height={11} rx={2} />
            <path d={`M ${IN_X + 3} 92 v -3 a 4 4 0 0 1 8 0 v 3`} />
          </g>
          <text x={IN_X + 24} y={102} fontFamily="IBM Plex Sans, sans-serif" fontWeight="500" fontSize="18" fill={MUTE}>
            Правила работы
          </text>
          <text x={IN_X + 178} y={102} fontFamily="IBM Plex Sans, sans-serif" fontSize="14" fill={MUTE_2}>
            задаёт сервис — вы их не пишете и обычно не видите
          </text>
          <rect x={IN_X} y={114} width={IN_W} height={64} rx={8} fill={PALE} stroke={RULE_SOFT} strokeWidth={1} />
          <text x={IN_X + 22} y={152} fontFamily="IBM Plex Sans, sans-serif" fontSize="20" fill={MUTE}>
            Ты — помощник-ассистент. Отвечай вежливо и кратко.
          </text>

          {/* ── Зона 2 · Что уже обсудили ── */}
          <text x={IN_X} y={212} fontFamily="IBM Plex Sans, sans-serif" fontWeight="500" fontSize="18" fill={MUTE}>
            Что уже обсудили
          </text>
          <rect x={IN_X} y={224} width={IN_W} height={246} rx={8} fill="none" stroke={MUTE_2} strokeWidth={1} />
          <Bubble x={IN_R - 480 - 24} y={248} w={480} text="Помоги составить план эксперимента" role="user" />
          <Bubble x={IN_X + 24} y={318} w={340} text="Конечно. Какая тема?" role="assistant" />
          <Bubble x={IN_R - 540 - 24} y={388} w={540} text="Влияние засушливого периода на хвойные" role="user" />

          {/* ── Зона 3 · Ваш вопрос сейчас ── */}
          <text x={IN_X} y={508} fontFamily="IBM Plex Sans, sans-serif" fontWeight="600" fontSize="18" fill={INK}>
            Ваш вопрос сейчас
          </text>
          <rect x={IN_X} y={520} width={IN_W} height={120} rx={8} fill={BG} stroke={INK} strokeWidth={1.5} />
          <Bubble x={IN_R - 480 - 24} y={556} w={480} text="Какие методы измерения предложишь?" role="user" />
        </svg>
      </div>

      <div className="right">
        <div className="sub">Контекст и память</div>
        <h2 className="title">Что такое контекст</h2>
        <p className="cap">
          Контекст — единственное, что модель видит при ответе:
          <br />
          правила + что обсудили + ваш вопрос.
          <br />
          <br />
          Чего нет в листе — для модели не существует.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
