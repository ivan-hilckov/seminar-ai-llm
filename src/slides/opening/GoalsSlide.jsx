import Stage from '../../components/Stage.jsx';
import './opening.css';

/**
 * Общая разметка слайдов «Цели секции N» (03/04/05).
 */
export default function GoalsSlide({ label, eyebrow, title, goals }) {
  return (
    <Stage label={label}>
      <div className="s03-eyebrow">{eyebrow}</div>
      <h2 className="s03-title">{title}</h2>

      <div className="s03-list">
        {goals.map((g, i) => (
          <div className="s03-row" key={i}>
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
            <span>{g}</span>
          </div>
        ))}
      </div>

      <div className="svc">
        <div className="brand">AI &amp; LLM · ФБУ ВНИИЛМ</div>
      </div>
    </Stage>
  );
}
