import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '34',
  type: 'B',
  title: 'Когда Память полезна, когда мешает',
  subblock: '3.2 Память и контекст в работе',
};

/**
 * Слайд 47 · Когда Память полезна, когда мешает
 * Чистый B без anchor: мета-тег + заголовок-вопрос сверху, парный
 * антитезис по центру в две строки. Зеркальная структура «Полезна
 * для X. Мешает для Y.» — главный визуальный приём.
 */
export default function Slide34() {
  return (
    <Stage label="34 Когда Память полезна, когда мешает">
      <Meta num="34" type="B" />

      {/* Мета-тег подблока (top-left) */}
      <div
        style={{
          position: 'absolute',
          top: 96,
          left: 96,
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 20,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
        }}
      >
        3.2 Память и контекст в работе
      </div>

      {/* Заголовок чуть ниже мета-тега */}
      <h2
        style={{
          position: 'absolute',
          top: 168,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 36,
          lineHeight: 1.2,
          color: 'var(--ink)',
          margin: 0,
          letterSpacing: '-0.005em',
          maxWidth: 1500,
          textWrap: 'pretty',
        }}
      >
        Когда Память полезна, когда мешает
      </h2>

      {/* Центральный тезис: парный антитезис в две строки */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 88,
            lineHeight: 1.18,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.012em',
            textWrap: 'pretty',
          }}
        >
          Полезна для предпочтений.
          <br />
          Мешает для фактов.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
