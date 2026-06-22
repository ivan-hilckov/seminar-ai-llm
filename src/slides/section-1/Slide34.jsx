import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide34.css';

export const meta = {
  id: '34',
  type: 'D',
  title: 'Облачно vs локально',
  subblock: '3.1 Данные и приватность',
};

/**
 * Слайд 45 · Облачно vs локально
 * D-сравнение по образцу Slide19. Две колонки разделены 1px-линией.
 * 4 параметра построчно (что происходит / где / кто видит / что нужно).
 * Без иконок, без названий конкретных сервисов, без --accent.
 * Архитектурный ответ на вопрос слайда 44.
 */

const AXES = [
  {
    label: 'Что происходит',
    left: 'Запрос уходит на сервер провайдера',
    right: 'Запрос остаётся на вашем компьютере',
  },
  {
    label: 'Где обрабатывается',
    left: 'Дата-центр (часто в США или ЕС)',
    right: 'Ваш процессор или видеокарта',
  },
  {
    label: 'Кто видит',
    left: 'Провайдер (в логах)',
    right: 'Никто, кроме вас',
  },
  {
    label: 'Что нужно',
    left: 'Только интернет',
    right: 'Мощный компьютер, дисковое место',
  },
];

function AxisColumn({ side }) {
  return (
    <div className="s45-axes">
      {AXES.map((a) => (
        <div key={a.label}>
          <div className="s45-axis-label">{a.label}</div>
          <p className="s45-axis-text">{a[side]}</p>
        </div>
      ))}
    </div>
  );
}

export default function Slide34() {
  return (
    <Stage label="34 Облачно vs локально">
      <Meta num="34" type="D" />

      <div className="s45-header">
        <div className="sub">3.1 Данные и приватность</div>
        <h2 className="title">Облачно vs локально</h2>
      </div>

      <div className="s45-cols">
        <div className="col">
          <div className="ctitle">Облако</div>
          <AxisColumn side="left" />
        </div>
        <div className="vrule" />
        <div className="col right-col">
          <div className="ctitle">Локально</div>
          <AxisColumn side="right" />
        </div>
      </div>

      <div className="s45-hrule" />

      <div className="s45-summary">
        <p>Для чувствительных данных — локально</p>
      </div>

      <Foot />
    </Stage>
  );
}
