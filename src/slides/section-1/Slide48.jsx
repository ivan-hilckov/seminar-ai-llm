import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '48',
  type: 'B',
  title: 'Она понимает буквально — не интуитивно',
  subblock: '3.5 Границы применения',
};

/**
 * Слайд 54 · Она понимает буквально — не интуитивно
 * Финальный смысловой слайд Секции 1, мост к Секции 2.
 * B-каркас + локальное мини-сравнение из двух рамок:
 *   заголовок → тезис → [Размыто | Конкретно] → якорь.
 * Без --accent, без иконок, без стрелок между рамками. Левая
 * рамка не «плохая» — обе нейтральные. Иерархия: тезис
 * доминирует, рамки поддерживают, якорь снизу.
 */

function ExampleBox({ caption, text }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 16,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
          marginBottom: 14,
        }}
      >
        {caption}
      </div>
      <div
        style={{
          border: '1px solid var(--rule)',
          borderRadius: 8,
          padding: '36px 40px',
          height: 220,
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 400,
          fontSize: 26,
          lineHeight: 1.45,
          color: 'var(--ink)',
          letterSpacing: '-0.003em',
          background: 'transparent',
          textWrap: 'pretty',
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default function Slide48() {
  return (
    <Stage label="48 Она понимает буквально — не интуитивно">
      <Meta num="48" type="B" />

      {/* Заголовок */}
      <h2
        style={{
          position: 'absolute',
          top: 144,
          left: 96,
          right: 96,
          margin: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 36,
          lineHeight: 1.18,
          letterSpacing: '-0.005em',
          color: 'var(--ink)',
        }}
      >
        Она понимает буквально — не&nbsp;интуитивно
      </h2>

      {/* Тезис */}
      <p
        style={{
          position: 'absolute',
          top: 240,
          left: 96,
          right: 96,
          margin: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 56,
          lineHeight: 1.2,
          color: 'var(--ink)',
          letterSpacing: '-0.008em',
          maxWidth: 1600,
          textWrap: 'pretty',
        }}
      >
        Модель выполняет то, что написано, а&nbsp;не&nbsp;то, что вы&nbsp;имели в&nbsp;виду
      </p>

      {/* Две рамки рядом */}
      <div
        style={{
          position: 'absolute',
          top: 540,
          left: 96,
          right: 96,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
        }}
      >
        <ExampleBox caption="Размыто" text="Напиши что-нибудь про лес" />
        <ExampleBox
          caption="Конкретно"
          text="Напиши 3 абзаца для введения научной статьи о защите ельников от короеда-типографа в Центральной России"
        />
      </div>

      {/* Якорь снизу */}
      <p
        style={{
          position: 'absolute',
          bottom: 168,
          left: 96,
          right: 96,
          margin: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 400,
          fontSize: 24,
          lineHeight: 1.4,
          color: 'var(--mute)',
          letterSpacing: '-0.002em',
        }}
      >
        Поэтому формулировка запроса — навык, а&nbsp;не&nbsp;магия
      </p>

      <Foot />
    </Stage>
  );
}
