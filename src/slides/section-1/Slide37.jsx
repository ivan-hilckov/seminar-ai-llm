import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '37',
  type: 'C',
  title: 'Поиск — отдельная функция',
  subblock: '3.3 Доступ к интернету',
};

/**
 * Слайд 48 · Поиск — отдельная функция
 * Параллель двух сцен интерфейса DeepSeek: вверху — Search не нажат,
 * стрелка к книге «знания до 2024», подпись «модель вспоминает».
 * Внизу — Search нажат (инверсия чёрным, БЕЗ --accent), стрелка
 * к глобусу «интернет, сейчас», подпись «модель ищет».
 * Меняется только нажата ли кнопка Search — это и есть «отдельная функция».
 */

function PillButton({ x, y, w, label, active }) {
  const fill = active ? '#1A1A1A' : 'none';
  const stroke = active ? '#1A1A1A' : '#D9D7CF';
  const textFill = active ? '#FAFAF7' : '#6B6B68';
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={36}
        rx={18}
        ry={18}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + 24}
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="500"
        fontSize="16"
        letterSpacing="0.02em"
        fill={textFill}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ y, x1, x2 }) {
  return (
    <g stroke="#1A1A1A" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <polyline points={`${x2 - 12},${y - 7} ${x2},${y} ${x2 - 12},${y + 7}`} />
    </g>
  );
}

function Book() {
  return (
    <g fill="none" stroke="#1A1A1A" strokeWidth={1.5} strokeLinejoin="round">
      <path d="M6 12 L40 8 L40 76 L6 72 Z" />
      <path d="M74 12 L40 8 L40 76 L74 72 Z" />
      <line x1="40" y1="8" x2="40" y2="76" />
      <g stroke="#9A9893" strokeWidth="1">
        <line x1="14" y1="26" x2="34" y2="24" />
        <line x1="14" y1="38" x2="34" y2="36" />
        <line x1="14" y1="50" x2="34" y2="48" />
        <line x1="46" y1="24" x2="66" y2="26" />
        <line x1="46" y1="36" x2="66" y2="38" />
        <line x1="46" y1="48" x2="66" y2="50" />
      </g>
    </g>
  );
}

function Globe() {
  return (
    <g fill="none" stroke="#1A1A1A" strokeWidth={1.5}>
      <circle cx="40" cy="40" r="34" />
      <ellipse cx="40" cy="40" rx="34" ry="13" />
      <ellipse cx="40" cy="40" rx="13" ry="34" />
      <line x1="6" y1="40" x2="74" y2="40" />
    </g>
  );
}

function Scene({ yOffset, searchActive, IconRight, captionRight, sceneCaption }) {
  return (
    <g transform={`translate(0, ${yOffset})`}>
      {/* Input */}
      <rect
        x="60"
        y="40"
        width="680"
        height="80"
        rx="16"
        ry="16"
        fill="none"
        stroke="#D9D7CF"
        strokeWidth={1}
      />
      <text
        x="88"
        y="88"
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="22"
        fill="#9A9893"
      >
        Спросите что-нибудь
      </text>

      {/* Pill buttons under input */}
      <PillButton x={60} y={150} w={156} label="DeepThink" active={false} />
      <PillButton x={236} y={150} w={132} label="Search" active={searchActive} />

      {/* Arrow input → icon */}
      <Arrow y={80} x1={780} x2={920} />

      {/* Icon + caption */}
      <g transform="translate(940, 40)">
        <IconRight />
      </g>
      <text
        x="980"
        y="146"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="14"
        letterSpacing="0.06em"
        fill="#9A9893"
        textAnchor="middle"
      >
        {captionRight}
      </text>

      {/* Scene caption */}
      <text
        x="540"
        y="240"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="500"
        fontSize="24"
        fill="#1A1A1A"
        textAnchor="middle"
      >
        {sceneCaption}
      </text>
    </g>
  );
}

export default function Slide37() {
  return (
    <Stage label="37 Поиск — отдельная функция">
      <Meta num="37" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 600"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Две сцены интерфейса DeepSeek: вверху Search выключен и стрелка к книге, внизу Search нажат и стрелка к глобусу"
        >
          <Scene
            yOffset={0}
            searchActive={false}
            IconRight={Book}
            captionRight="знания до 2024"
            sceneCaption="модель вспоминает"
          />

          {/* Разделитель сцен */}
          <line x1="60" y1="290" x2="1020" y2="290" stroke="#D9D7CF" strokeWidth="1" />

          <Scene
            yOffset={310}
            searchActive={true}
            IconRight={Globe}
            captionRight="интернет, сейчас"
            sceneCaption="модель ищет"
          />
        </svg>
      </div>

      <div className="right">
        <div className="sub">3.3 Доступ к интернету</div>
        <h2 className="title" style={{ fontSize: 44, lineHeight: 1.15 }}>
          Поиск — отдельная функция
        </h2>
        <p
          className="cap"
          style={{
            fontSize: 22,
            lineHeight: 1.45,
            marginTop: 20,
            color: 'var(--mute)',
          }}
        >
          По умолчанию модель отвечает по&nbsp;памяти — той, что сложилась во&nbsp;время обучения. Чтобы она пошла в&nbsp;интернет, нужно нажать отдельную кнопку.
        </p>
        <p
          style={{
            margin: '32px 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 14,
            letterSpacing: '0.06em',
            color: 'var(--mute-2)',
          }}
        >
          DeepSeek · кнопка Search в&nbsp;инпуте
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
