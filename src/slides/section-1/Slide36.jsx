import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '36',
  type: 'B',
  title: 'Близость = смысл',
  subblock: '2.1 Векторы смыслов',
};

/**
 * Слайд 36 · Близость = смысл
 * Закрывающий B-слайд подблока 2.1 — без заголовка.
 * Только мета-тег «ВЕКТОРЫ СМЫСЛОВ» сверху и тезис по центру.
 * Знак `=` — обычный --ink, не --accent (он закреплён за keystone слайдом 32).
 */
export default function Slide36() {
  return (
    <Stage label="36 Близость = смысл">
      <Meta num="36" type="B" />

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
        Векторы смыслов
      </div>

      {/* Центральный тезис */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 56,
            lineHeight: 1.1,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.005em',
            textWrap: 'nowrap',
          }}
        >
          Близость = смысл
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
