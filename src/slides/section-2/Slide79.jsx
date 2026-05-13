import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '79',
  type: 'B',
  title: 'Первый ответ — черновик',
  subblock: '5.3 Итерация на редактуре',
};

/**
 * Слайд 79 · Первый ответ — почти всегда черновик
 * B-шаблон по образцу Slide21: мета-тег подблока сверху-слева,
 * заголовок-аппертив серый, центральный тезис крупно, anchor-строка снизу
 * над тонкой линией --rule.
 */
export default function Slide79() {
  return (
    <Stage label="79 Первый ответ — черновик">
      <Meta num="79" type="B" />

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
        5.3 Итерация
      </div>

      {/* Центральный блок: заголовок (аппертив), тезис, anchor */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h2
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 400,
            fontSize: 44,
            lineHeight: 1.15,
            color: 'var(--mute)',
            margin: '0 0 48px 0',
            letterSpacing: '-0.005em',
          }}
        >
          Первый ответ — почти всегда черновик
        </h2>

        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 84,
            lineHeight: 1.1,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.012em',
            maxWidth: 1600,
            textWrap: 'pretty',
          }}
        >
          Итерация — не&nbsp;починка ошибки.
          <br />
          Это нормальный режим работы.
        </p>
      </div>

      {/* Anchor над тонкой линией снизу */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          bottom: 116,
          height: 1,
          background: 'var(--rule)',
        }}
      />
      <p
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          bottom: 60,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 22,
          lineHeight: 1.4,
          color: 'var(--mute)',
          margin: 0,
          letterSpacing: '-0.002em',
        }}
      >
        Хороший результат за&nbsp;один проход — исключение.
        За&nbsp;2–3 итерации — норма
      </p>

      <Foot />
    </Stage>
  );
}
