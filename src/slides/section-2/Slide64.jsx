import { CFrame } from './pv-kit.jsx';

export const meta = {
  id: '64',
  type: 'C',
  title: 'Markdown',
  subblock: '5.2 Результат в файл',
};

const card = {
  background: '#fff',
  border: '1px solid var(--rule)',
  borderRadius: 12,
  padding: '20px 24px',
  width: 460,
  boxSizing: 'border-box',
};
const cap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 15,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  marginBottom: 14,
};
const mono = { fontFamily: 'IBM Plex Mono, monospace', fontSize: 22, lineHeight: 1.5, color: 'var(--ink)' };

/**
 * Слайд 64 · V-11 Markdown
 * Две карточки одного ответа: «сырой» Markdown → отрендеренный.
 */
export default function Slide64() {
  return (
    <CFrame
      num="64"
      label="Markdown"
      eyebrow="5.2 Результат в файл"
      title="Markdown — текст со структурой"
      meaning="Значки структуры в обычном тексте; открывается в любом редакторе"
      footNote="весь разговор можно сохранить и выгрузить"
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={card}>
          <div style={cap}>сырой markdown</div>
          <div style={mono}># Признаки<br />- буровая мука<br />- ходы под корой</div>
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 16, color: 'var(--mute)' }}>↓ как выглядит</div>
        <div style={card}>
          <div style={cap}>отрендеренный</div>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', color: 'var(--ink)' }}>
            <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 8 }}>Признаки</div>
            <div style={{ fontSize: 24, lineHeight: 1.5 }}>• буровая мука<br />• ходы под корой</div>
          </div>
        </div>
      </div>
    </CFrame>
  );
}
