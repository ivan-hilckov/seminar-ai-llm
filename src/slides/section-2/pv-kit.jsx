import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

/**
 * Набор переиспользуемых компонентов Части V.
 * CFrame — C-каркас: левая подпись (38%) + правый экран (62%).
 * Screen/You/Ai — стилизованный экран чата.
 * BSlide — тезис по центру (тип B).
 */

export function CFrame({ num, label, eyebrow, title, meaning, footNote, children }) {
  return (
    <Stage label={`${num} ${label}`}>
      <Meta num={num} type="C" />
      <div className="pvc-left">
        {eyebrow && <div className="pvc-eyebrow">{eyebrow}</div>}
        <h2 className="pvc-title">{title}</h2>
        <div className="pvc-rule" />
        {meaning && <p className="pvc-meaning">{meaning}</p>}
      </div>
      <div className="pvc-stage">{children}</div>
      {footNote && <div className="pvc-footnote">{footNote}</div>}
      <Foot />
    </Stage>
  );
}

export function Screen({ bar, children }) {
  return (
    <div className="pv-screen">
      {bar && <div className="pv-screen-bar">{bar}</div>}
      {children}
    </div>
  );
}

export function You({ children, role = 'вы' }) {
  return (
    <div className="pv-row pv-row--you">
      <span className="pv-role">{role}</span>
      <div className="pv-bubble pv-bubble--you">{children}</div>
    </div>
  );
}

export function Ai({ children, role = 'модель' }) {
  return (
    <div className="pv-row pv-row--ai">
      <span className="pv-role">{role}</span>
      <div className="pv-bubble pv-bubble--ai">{children}</div>
    </div>
  );
}

/* Пара «прогонов»: верхняя приглушённая карточка (без части) +
   нижняя обычная (с частью). Контраст виден без чтения деталей. */
export function Runs({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, width: '100%', maxWidth: 1040 }}>
      {children}
    </div>
  );
}

export function Run({ cap, dim, children }) {
  return (
    <div
      style={{
        background: dim ? 'transparent' : '#fff',
        border: '1px solid var(--rule)',
        borderRadius: 12,
        padding: '18px 24px',
        opacity: dim ? 0.62 : 1,
      }}
    >
      <div
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 15,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
          marginBottom: 10,
        }}
      >
        {cap}
      </div>
      <div
        style={{
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 22,
          lineHeight: 1.4,
          color: dim ? 'var(--mute)' : 'var(--ink)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function BSlide({ num, label, title, sub, children }) {
  return (
    <Stage label={`${num} ${label}`}>
      <Meta num={num} type="B" />
      <div className="pvb">
        <h1 className="pvb-title">{title}</h1>
        {sub && <p className="pvb-sub">{sub}</p>}
        {children}
      </div>
      <Foot />
    </Stage>
  );
}
