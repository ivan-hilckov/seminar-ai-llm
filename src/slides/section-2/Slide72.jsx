import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '72',
  type: 'D',
  title: 'Плохой → хороший',
  subblock: '5.3 Промт',
};

const cardBase = {
  border: '1px solid var(--rule)',
  borderRadius: 16,
  padding: '32px 34px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 22,
};
const promptStyle = { fontFamily: 'IBM Plex Mono, monospace', fontSize: 24, lineHeight: 1.4 };
const resStyle = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 26, lineHeight: 1.35 };
const cap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 16,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
};

export default function Slide72() {
  return (
    <Stage label="72 Плохой → хороший">
      <Meta num="72" type="D" />

      <div className="pvd-header">
        <div className="sub">5.3 Промт</div>
        <h2 className="title">Один и&nbsp;тот&nbsp;же запрос — два результата</h2>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: 300,
          display: 'flex',
          gap: 56,
          alignItems: 'flex-start',
        }}
      >
        {/* плохой — приглушён, уже */}
        <div style={{ ...cardBase, width: 560, opacity: 0.6 }}>
          <div style={cap}>плохой промт</div>
          <div style={{ ...promptStyle, color: 'var(--mute)' }}>напиши про короеда</div>
          <div style={{ ...resStyle, color: 'var(--mute)' }}>→ размытый общий текст «обо&nbsp;всём и&nbsp;ни&nbsp;о&nbsp;чём»</div>
        </div>

        {/* хороший — в фокусе, шире */}
        <div style={{ ...cardBase, flex: 1, background: '#fff' }}>
          <div style={cap}>хороший промт</div>
          <div style={{ ...promptStyle, color: 'var(--ink)' }}>
            Ты — лесопатолог. Памятка для&nbsp;лесничих, 150&nbsp;слов, три признака списком, без&nbsp;латыни.
          </div>
          <div style={{ ...resStyle, color: 'var(--ink)' }}>→ точный результат ровно по&nbsp;рамке</div>
        </div>
      </div>

      <div className="pvd-footnote">Разница не&nbsp;в&nbsp;модели, а&nbsp;в&nbsp;инструкции</div>

      <Foot />
    </Stage>
  );
}
