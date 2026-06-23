import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '67',
  type: 'C',
  title: 'Состав хорошего промта',
  subblock: '5.3 Промт',
};

/**
 * Слайд 67 · V-14 Состав хорошего промта (опорный слайд блока)
 * Реальный промт в карточке, подписи частей — слева, серым. Опора для V-15…V-18.
 */

const PARTS = [
  { label: 'роль', text: 'Ты — лесопатолог.' },
  { label: 'задача', text: 'Составь памятку для лесничих.' },
  { label: 'контекст', text: 'Тема — раннее выявление очага короеда-типографа в ельниках.' },
  { label: 'формат', text: '150 слов, три признака списком.' },
  { label: 'критерии', text: 'Простой язык, без латыни в заголовках.' },
];

const row = { minHeight: 78, display: 'flex', alignItems: 'center' };
const labelStyle = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 20,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  justifyContent: 'flex-end',
  width: '100%',
  gap: 12,
};
const lineStyle = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 25,
  lineHeight: 1.3,
  color: 'var(--ink)',
  paddingLeft: 28,
};

export default function Slide67() {
  return (
    <Stage label="67 Состав хорошего промта">
      <Meta num="67" type="C" />

      <div className="pvd-header">
        <div className="sub">5.3 Промт</div>
        <h2 className="title">Из чего собран хороший промт</h2>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: 280,
          display: 'flex',
          justifyContent: 'center',
          gap: 0,
        }}
      >
        {/* подписи частей */}
        <div style={{ display: 'flex', flexDirection: 'column', width: 230 }}>
          {PARTS.map((p) => (
            <div key={p.label} style={{ ...row, ...labelStyle }}>
              {p.label} <span aria-hidden="true">▶</span>
            </div>
          ))}
        </div>
        {/* карточка промта */}
        <div
          style={{
            background: '#fff',
            border: '1px solid var(--rule)',
            borderRadius: 16,
            width: 920,
            boxSizing: 'border-box',
            padding: '8px 40px',
          }}
        >
          {PARTS.map((p) => (
            <div key={p.label} style={{ ...row, ...lineStyle }}>
              {p.text}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 96,
          textAlign: 'center',
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontSize: 24,
          color: 'var(--mute)',
        }}
      >
        не все нужны всегда — чем важнее задача, тем больше частей
      </div>

      <Foot />
    </Stage>
  );
}
