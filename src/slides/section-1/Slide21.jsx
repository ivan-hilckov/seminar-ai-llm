import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '21',
  type: 'B',
  title: 'Попугай, прочитавший интернет',
  subblock: '1.3 От Transformer до GPT-3',
};

/**
 * Слайд 21 · Попугай, прочитавший интернет
 * B-шаблон: мета-тег подблока сверху-слева, центральный тезис
 * в две фразы с цезурой по точке, anchor (Bender et al.) снизу.
 * Никаких иллюстраций, никакого --accent.
 */
export default function Slide21() {
  return (
    <Stage label="21 Попугай, прочитавший интернет">
      <Meta num="21" type="B" />

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
        1.3 От Transformer до GPT-3
      </div>

      {/* Центральный блок: заголовок, тезис, anchor */}
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
          Попугай, прочитавший интернет
        </h2>

        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 96,
            lineHeight: 1.1,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.012em',
            maxWidth: 1600,
            textWrap: 'pretty',
          }}
        >
          Знает всё, что написано.
          <br />
          Не знает, что это значит.
        </p>

        <p
          style={{
            margin: '72px 0 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 20,
            letterSpacing: '0.04em',
            color: 'var(--mute)',
          }}
        >
          Bender et al., 2021 — “On the Dangers of Stochastic Parrots”
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
