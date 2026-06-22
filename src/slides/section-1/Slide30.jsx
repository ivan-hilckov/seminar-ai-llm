import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '30',
  type: 'C',
  title: 'Память (Memory) — отдельная функция',
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

const notes = [
  'Работает в ВНИИЛМ',
  'Интересуется засушливыми периодами',
  'Предпочитает короткие ответы',
  'Зовут Иван',
];

/**
 * Слайд 40 · Память (Memory) — отдельная функция
 * C-шаблон. Слева — нейтральная панель «Заметки о пользователе» с
 * четырьмя чипами. Стрелка вправо в блок «Системные инструкции», где
 * заметки выделены курсивной строкой «+ заметки о пользователе».
 * Стрелка вниз — в нейтральный блок «Модель». Под визуалом — мелкая
 * моно-приписка с тремя свойствами Memory. Без `--accent`, без AI-стока.
 */
export default function Slide30() {
  return (
    <Stage label="30 Память — отдельная функция">
      <Meta num="30" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Схема: панель Памяти подмешивается в системные инструкции, оттуда — в модель"
        >
          <defs>
            <marker
              id="s40-arr"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={MUTE_2} />
            </marker>
          </defs>

          {/* ── Панель «Заметки о пользователе» ── */}
          <rect
            x={20}
            y={140}
            width={440}
            height={520}
            rx={14}
            fill={BG}
            stroke={RULE}
            strokeWidth={1}
          />
          <text
            x={44}
            y={188}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="22"
            fill={INK}
          >
            Заметки о пользователе
          </text>
          <line
            x1={20}
            y1={215}
            x2={460}
            y2={215}
            stroke={RULE_SOFT}
            strokeWidth={1}
          />

          {notes.map((text, i) => {
            const y = 235 + i * 96;
            return (
              <g key={text}>
                <rect
                  x={44}
                  y={y}
                  width={392}
                  height={78}
                  rx={10}
                  fill={HI}
                />
                <text
                  x={64}
                  y={y + 49}
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontWeight="400"
                  fontSize="19"
                  fill={INK}
                >
                  {text}
                </text>
                <text
                  x={418}
                  y={y + 50}
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontWeight="400"
                  fontSize="22"
                  fill={MUTE_2}
                  textAnchor="end"
                >
                  ×
                </text>
              </g>
            );
          })}

          {/* ── Стрелка 1: Memory → Системные инструкции ── */}
          <line
            x1={466}
            y1={400}
            x2={574}
            y2={400}
            stroke={MUTE_2}
            strokeWidth={1.6}
            markerEnd="url(#s40-arr)"
          />

          {/* ── Блок «Системные инструкции» ── */}
          <text
            x={580}
            y={260}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="18"
            fill={MUTE}
          >
            Системные инструкции
          </text>
          <rect
            x={580}
            y={280}
            width={420}
            height={240}
            rx={12}
            fill={BG}
            stroke={MUTE_2}
            strokeWidth={1}
          />
          <text
            x={604}
            y={336}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="22"
            fill={INK_SOFT}
          >
            Будь вежлив. Отвечай кратко.
          </text>
          <line
            x1={604}
            y1={376}
            x2={976}
            y2={376}
            stroke={RULE_SOFT}
            strokeWidth={1}
          />
          <text
            x={604}
            y={426}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontStyle="italic"
            fontSize="22"
            fill={INK_SOFT}
          >
            + заметки о пользователе
          </text>

          {/* ── Стрелка 2: Системные инструкции → Модель ── */}
          <line
            x1={790}
            y1={526}
            x2={790}
            y2={596}
            stroke={MUTE_2}
            strokeWidth={1.6}
            markerEnd="url(#s40-arr)"
          />

          {/* ── Блок «Модель» ── */}
          <rect
            x={690}
            y={602}
            width={200}
            height={100}
            rx={14}
            fill={HI}
            stroke={INK}
            strokeWidth={1.5}
          />
          <text
            x={790}
            y={663}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="30"
            fill={INK}
            textAnchor="middle"
          >
            Модель
          </text>

          {/* ── Подпись под визуалом ── */}
          <text
            x={20}
            y={760}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="18"
            letterSpacing="0.06em"
            fill={MUTE}
          >
            Можно выключить · Можно увидеть · Можно стереть
          </text>
        </svg>
      </div>

      <div className="right">
        <h2 className="title">Память (Memory) — отдельная функция</h2>
        <p className="cap">
          Не модель вас запоминает — продукт хранит заметки и&nbsp;подмешивает их в&nbsp;промт
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
