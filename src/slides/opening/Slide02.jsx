import Stage from '../../components/Stage.jsx';
import './opening.css';

export default function Slide02() {
  return (
    <Stage label="02 Карта дня">
      <div className="s02-eyebrow">Карта дня</div>
      <h2 className="s02-title">Сегодня — три секции</h2>

      <div className="s02-grid">
        <div className="pair current">
          <div className="num">
            <span>Секция 1</span>
            <span className="now">→ сейчас</span>
          </div>
          <h3>
            История и устройство
            <br />
            языковых моделей
          </h3>
          <div className="tags">
            <span>История</span>
            <span className="sep">·</span>
            <span>Устройство</span>
            <span className="sep">·</span>
            <span>Особенности</span>
          </div>
        </div>

        <div className="pair current">
          <div className="num">
            <span>Секция 2</span>
            <span className="now">после перерыва</span>
          </div>
          <h3>
            Методика работы
            <br />
            с языковыми моделями
          </h3>
          <div className="tags">
            <span>Инструменты</span>
            <span className="sep">·</span>
            <span>Промтинг</span>
            <span className="sep">·</span>
            <span>Границы</span>
          </div>
        </div>

        <div className="pair">
          <div className="num">
            <span>Секция 3</span>
            <span className="now">после обеда</span>
          </div>
          <h3>
            Практика применения
            <br />
            языковых моделей
          </h3>
          <div className="tags">
            <span>Задачи</span>
            <span className="sep">·</span>
            <span>Безопасность</span>
            <span className="sep">·</span>
            <span>Материалы</span>
          </div>
        </div>
      </div>

      <div className="svc">
        <div className="brand">AI &amp; LLM · ФБУ ВНИИЛМ</div>
      </div>
    </Stage>
  );
}
