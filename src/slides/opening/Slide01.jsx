import Stage from '../../components/Stage.jsx';
import './opening.css';

export default function Slide01() {
  return (
    <Stage label="01 Титул" className="s01">
      <h1 className="s01-title">
        AI <span className="amp">и</span> LLM
        <br />
        для исследователей
      </h1>

      <p className="s01-sub">Семинар для научных сотрудников</p>

      <div className="s01-meta">
        <div className="col">
          <div className="k">Ведущие</div>
          <div className="v">Иван Хильков · Андрей Гиценко</div>
        </div>
        <div className="col">
          <div className="k">Дата</div>
          <div className="v">13 мая 2026</div>
        </div>
      </div>

      <div className="svc">
        <div className="brand">AI &amp; LLM · ФБУ ВНИИЛМ</div>
      </div>
    </Stage>
  );
}
