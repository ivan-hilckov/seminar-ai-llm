import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide28.css';

export const meta = {
  id: '28',
  type: 'D',
  title: 'Обычная модель vs думающая',
  subblock: '1.5 Думающие модели',
};

/**
 * Слайд 28 · Обычная модель vs думающая
 * D-шаблон по образцу Slide10. Две равноправные колонки разделены 1px-линией.
 * Каждая содержит подзаголовок-метафору и три параллельные оси сравнения
 * (Поведение / Характер / Назначение). Снизу — summary через 1px-линию.
 */

const AXES = [
  {
    label: 'Поведение',
    left: 'Отвечает сразу',
    right: 'Сначала пишет черновик',
  },
  {
    label: 'Характер',
    left: 'Быстрый, без проработки',
    right: 'Медленный, последовательный',
  },
  {
    label: 'Назначение',
    left: 'Для коротких вопросов',
    right: 'Для сложных задач',
  },
];

function AxisColumn({ side }) {
  return (
    <div className="s28-axes">
      {AXES.map((a) => (
        <div key={a.label}>
          <div className="s28-axis-label">{a.label}</div>
          <p className="s28-axis-text">{a[side]}</p>
        </div>
      ))}
    </div>
  );
}

export default function Slide28() {
  return (
    <Stage label="28 Обычная модель vs думающая">
      <Meta num="28" type="D" />

      <div className="s28-header">
        <div className="sub">1.5 Думающие модели</div>
        <h2 className="title">Обычная модель vs думающая</h2>
      </div>

      <div className="s28-cols">
        <div className="col">
          <div className="ctitle">Студент-выскочка</div>
          <AxisColumn side="left" />
        </div>
        <div className="vrule" />
        <div className="col right-col">
          <div className="ctitle">Студент с&nbsp;черновиком</div>
          <AxisColumn side="right" />
        </div>
      </div>

      <div className="s28-hrule" />

      <div className="s28-summary">
        <p>Разные режимы — разные задачи</p>
      </div>

      <Foot />
    </Stage>
  );
}
