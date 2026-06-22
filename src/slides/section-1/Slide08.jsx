import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '08',
  type: 'C',
  title: '2017: Transformer · Attention Is All You Need',
  subblock: '1.3 От Transformer до GPT-3',
};

/**
 * Слайд 14 · 2017: Transformer · Attention Is All You Need
 * Стилизованная титульная страница arXiv-препринта.
 * Главный визуальный акцент — заголовок статьи и дата 2017.
 */
export default function Slide08() {
  // Имитация абстракта: 6 прямоугольников разной длины, серым.
  const abstractLines = [
    { x: 100, w: 880 },
    { x: 100, w: 920 },
    { x: 100, w: 820 },
    { x: 100, w: 900 },
    { x: 100, w: 780 },
    { x: 100, w: 540 },
  ];

  return (
    <Stage label="08 Transformer · Attention Is All You Need">
      <Meta num="08" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 780"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Стилизованная титульная страница arXiv-препринта Attention Is All You Need, 12 июня 2017"
        >
          {/* Рамка страницы */}
          <rect
            x="20.5"
            y="20.5"
            width="1039"
            height="739"
            rx="6"
            ry="6"
            fill="none"
            stroke="#D9D7CF"
            strokeWidth="1"
          />

          {/* Шапка arXiv: идентификатор слева, дата справа */}
          <text
            x="100"
            y="106"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="16"
            letterSpacing="0.06em"
            fill="#6B6B68"
          >
            arXiv:1706.03762 [cs.CL]
          </text>
          <text
            x="980"
            y="106"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="16"
            letterSpacing="0.06em"
            textAnchor="end"
            fill="#6B6B68"
          >
            12 Jun 2017
          </text>

          {/* Тонкая разделительная линия под шапкой */}
          <line x1="100" y1="128" x2="980" y2="128" stroke="#ECEAE3" strokeWidth="1" />

          {/* Главный заголовок статьи */}
          <text
            x="540"
            y="252"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
            fontSize="64"
            textAnchor="middle"
            fill="#1A1A1A"
          >
            Attention Is All You Need
          </text>

          {/* Авторы — две строки по четыре */}
          <text
            x="540"
            y="332"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="22"
            textAnchor="middle"
            fill="#6B6B68"
          >
            Ashish Vaswani · Noam Shazeer · Niki Parmar · Jakob Uszkoreit
          </text>
          <text
            x="540"
            y="364"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="22"
            textAnchor="middle"
            fill="#6B6B68"
          >
            Llion Jones · Aidan N. Gomez · Łukasz Kaiser · Illia Polosukhin
          </text>

          {/* Аффилиации — одной строкой, мельче и светлее */}
          <text
            x="540"
            y="406"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="16"
            textAnchor="middle"
            fill="#9A9893"
          >
            Google Brain · Google Research · University of Toronto
          </text>

          {/* Подзаголовок Abstract */}
          <text
            x="100"
            y="486"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="500"
            fontSize="18"
            letterSpacing="0.18em"
            fill="#6B6B68"
          >
            ABSTRACT
          </text>

          {/* Имитация абстракта — серые полосы разной длины */}
          {abstractLines.map((l, i) => (
            <rect
              key={i}
              x={l.x}
              y={510 + i * 24}
              width={l.w}
              height="8"
              rx="2"
              ry="2"
              fill="#D9D7CF"
            />
          ))}
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.3 От Transformer до GPT-3</div>
        <h2 className="title" style={{ fontSize: 56, lineHeight: 1.1 }}>
          2017:&nbsp;Transformer
        </h2>
        <p className="cap" style={{ fontSize: 32, lineHeight: 1.25, marginTop: 24 }}>
          Архитектура, на&nbsp;которой построены все современные модели — от&nbsp;GPT-3 до&nbsp;ChatGPT
        </p>
        <p
          style={{
            margin: '20px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 14,
            letterSpacing: '0.08em',
            color: 'var(--mute-2)',
          }}
        >
          arXiv:1706.03762 · 12 Jun 2017
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
