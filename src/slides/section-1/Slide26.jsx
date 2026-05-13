import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '26',
  type: 'B',
  title: '2024–2025: модели, которые думают',
  subblock: '1.5 Думающие модели',
};

/**
 * Слайд 26 · 2024–2025: модели, которые думают
 * B-шаблон без отдельного заголовка — роль заголовка играет тезис.
 * Один смысловой акцент — italic на слове «думать». Anchor — четыре
 * компании через ` · ` (моно, --mute). Без --accent (он за слайдом 32).
 */
export default function Slide26() {
  return (
    <Stage label="26 2024–2025: модели, которые думают">
      <Meta num="26" type="B" />

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
        1.5 Думающие модели
      </div>

      {/* Центральный блок: тезис + anchor */}
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
            fontSize: 56,
            lineHeight: 1.18,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.005em',
            textWrap: 'pretty',
          }}
        >
          Модели научились{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 500 }}>думать</em>{' '}
          перед&nbsp;ответом
        </p>

        <p
          style={{
            margin: '64px 0 0 0',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 22,
            letterSpacing: '0.06em',
            color: 'var(--mute)',
          }}
        >
          OpenAI · DeepSeek · Anthropic · Google
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
