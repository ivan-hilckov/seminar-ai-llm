import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '19',
  type: 'C',
  title: 'Chain of Thought',
  subblock: '1.5 Думающие модели',
};

/**
 * Слайд 27 · Chain of Thought
 * Стилизованная реконструкция чата с reasoning-моделью (DeepSeek R1):
 * вопрос пользователя → think-блок с черновиком (моно, серый, лево-граница) →
 * финальный ответ (sans, чёрный, без рамки). Контраст «черновик / чистовик».
 */

const THINK_LINES = [
  'Хвойный опад содержит больше органических кислот,',
  'чем лиственный. У ели иглы разлагаются медленнее',
  'и образуют кислый гумус. У берёзы листва богата',
  'кальцием, который частично нейтрализует кислоты.',
  'Значит, дело в составе опада и скорости разложения.',
];

const ANSWER_LINES = [
  'Из-за состава опада: хвоя ели даёт кислый медленно',
  'разлагающийся гумус, а листва берёзы богата кальцием',
  'и нейтрализует кислоты.',
];

export default function Slide19() {
  return (
    <Stage label="19 Chain of Thought">
      <Meta num="19" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Стилизованный чат с reasoning-моделью: вопрос пользователя, серый think-блок с пятью строками рассуждения о ельнике и берёзняке, и финальный чёрный ответ"
        >
          {/* ─── Блок 1 · Promptbox ─────────────────────────── */}
          <text
            x="40"
            y="76"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="14"
            letterSpacing="0.1em"
            fill="#9A9893"
          >
            ПОЛЬЗОВАТЕЛЬ
          </text>
          <rect
            x="40"
            y="92"
            width="1000"
            height="72"
            rx="10"
            ry="10"
            fill="#F0EEE8"
          />
          <text
            x="64"
            y="138"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="24"
            fill="#1A1A1A"
          >
            Почему в ельнике почва кислее, чем в берёзняке?
          </text>

          {/* ─── Блок 2 · Think ─────────────────────────────── */}
          <line
            x1="40"
            y1="210"
            x2="40"
            y2="436"
            stroke="#D9D7CF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text
            x="60"
            y="234"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="16"
            fill="#9A9893"
          >
            &lt;think&gt;
          </text>
          {THINK_LINES.map((line, i) => (
            <text
              key={i}
              x="60"
              y={270 + i * 32}
              fontFamily="IBM Plex Mono, monospace"
              fontSize="18"
              fill="#6B6B68"
            >
              {line}
            </text>
          ))}
          <text
            x="60"
            y="432"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="16"
            fill="#9A9893"
          >
            &lt;/think&gt;
          </text>

          {/* ─── Блок 3 · Финальный ответ ───────────────────── */}
          <text
            x="40"
            y="498"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="14"
            letterSpacing="0.1em"
            fill="#9A9893"
          >
            R1
          </text>
          {ANSWER_LINES.map((line, i) => (
            <text
              key={`a-${i}`}
              x="40"
              y={538 + i * 36}
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="400"
              fontSize="24"
              fill="#1A1A1A"
            >
              {line}
            </text>
          ))}
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.5 Думающие модели</div>
        <h2 className="title" style={{ fontSize: 56, lineHeight: 1.1 }}>
          Chain of Thought
        </h2>
        <p className="cap" style={{ fontSize: 28, lineHeight: 1.3, marginTop: 24 }}>
          Модель рассуждает текстом перед&nbsp;ответом
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
