import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide30.css';

export const meta = {
  id: '30',
  type: 'D',
  title: 'Новый чат — новый лист',
  subblock: '2.2 Контекст и память',
};

const BG = '#FAFAF7';
const HI = '#F0EEE8';
const RULE = '#D9D7CF';
const RULE_SOFT = '#ECEAE3';
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
      <text
        x={x + 18}
        y={y + h / 2 + 6}
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="400"
        fontSize="18"
        fill={INK}
      >
        {text}
      </text>
    </g>
  );
}

function ChatWindow({ children, ariaLabel }) {
  return (
    <svg
      viewBox="0 0 768 440"
      xmlns="http://www.w3.org/2000/svg"
      className="cchat"
      aria-label={ariaLabel}
    >
      {/* Окно */}
      <rect
        x={0.5}
        y={0.5}
        width={767}
        height={439}
        rx={12}
        fill={BG}
        stroke={RULE}
        strokeWidth={1}
      />
      {/* Заголовок окна */}
      <g fill={RULE}>
        <circle cx={24} cy={24} r={4} />
        <circle cx={40} cy={24} r={4} />
        <circle cx={56} cy={24} r={4} />
      </g>
      <line x1={0} y1={44} x2={768} y2={44} stroke={RULE_SOFT} strokeWidth={1} />
      {children}
    </svg>
  );
}

/**
 * Слайд 39 · Новый чат — новый лист
 * D-сравнение: слева — чат с накопленной историей («Помнит всё»),
 * справа — тот же интерфейс, пустой, с курсором в поле ввода
 * («Не знает ничего»). Тонкая линия --rule между колонками. Снизу —
 * мелкая моно-приписка про исключение Memory (см. слайд 40).
 */
export default function Slide30() {
  return (
    <Stage label="30 Новый чат — новый лист">
      <Meta num="30" type="D" />

      <div className="s39-header">
        <h2 className="title">Новый чат — новый лист</h2>
      </div>

      <div className="s39-cols">
        {/* ── Левая колонка · Помнит всё ── */}
        <div className="col">
          <div className="ctitle">Помнит всё</div>

          <ChatWindow ariaLabel="Окно чата с пятью сообщениями: накопленная история">
            <Bubble
              x={344}
              y={68}
              w={400}
              text="Помоги составить план эксперимента"
              role="user"
            />
            <Bubble
              x={24}
              y={132}
              w={320}
              text="Конечно. Какая тема и цель?"
              role="assistant"
            />
            <Bubble
              x={284}
              y={196}
              w={460}
              text="Влияние засушливого периода на хвойные"
              role="user"
            />
            <Bubble
              x={24}
              y={260}
              w={400}
              text="Понял. Уточним методику измерения?"
              role="assistant"
            />
            <Bubble
              x={444}
              y={324}
              w={300}
              text="Какие методы предложишь?"
              role="user"
            />
          </ChatWindow>

          <p className="cthesis">Модель помнит всю беседу</p>
        </div>

        <div className="vrule" />

        {/* ── Правая колонка · Не знает ничего ── */}
        <div className="col right-col">
          <div className="ctitle">Не знает ничего</div>

          <ChatWindow ariaLabel="Пустое окно чата: только поле ввода с курсором">
            {/* Поле ввода */}
            <rect
              x={24}
              y={376}
              width={720}
              height={44}
              rx={22}
              fill={BG}
              stroke={RULE}
              strokeWidth={1}
            />
            {/* Курсор */}
            <line
              x1={44}
              y1={388}
              x2={44}
              y2={408}
              stroke={INK}
              strokeWidth={1.6}
            />
            {/* Плейсхолдер */}
            <text
              x={54}
              y={404}
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="400"
              fontSize="17"
              fill={MUTE_2}
            >
              Начните новый разговор…
            </text>
          </ChatWindow>

          <p className="cthesis">Модель не знает ни имени, ни прошлых вопросов</p>
        </div>
      </div>

      <div className="s39-hrule" />

      <div className="s39-summary">
        <p>Исключение — функция Памяти (см. слайд 40)</p>
      </div>

      <Foot />
    </Stage>
  );
}
