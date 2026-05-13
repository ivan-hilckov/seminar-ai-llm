import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide29.css';

export const meta = {
  id: '29',
  type: 'D',
  title: 'Что меняется',
  subblock: '1.5 Думающие модели',
};

/**
 * Слайд 29 · Что меняется
 * D-шаблон: две равноправные колонки с примерами задач из контекста
 * аудитории (научные сотрудники). Левая — короткие вопросы (обычная модель),
 * правая — сложные задачи (думающая). Summary внизу: «Думающая не всегда лучше».
 */

const LEFT = [
  'Переформулировать абзац для статьи',
  'Перевести аннотацию на английский',
  'Найти определение термина',
  'Резюмировать раздел методики',
  'Составить список ключевых слов к статье',
];

const RIGHT = [
  'Разобрать логику чужого эксперимента',
  'Найти противоречия в двух источниках',
  'Спланировать дизайн исследования',
  'Проверить статистические выкладки',
  'Связать разнородные данные в выводы',
];

export default function Slide29() {
  return (
    <Stage label="29 Что меняется">
      <Meta num="29" type="D" />

      <div className="s29-header">
        <div className="sub">1.5 Думающие модели</div>
        <h2 className="title">Что меняется</h2>
      </div>

      <div className="s29-cols">
        <div className="col">
          <div className="ctitle">Короткие вопросы</div>
          <div className="ccode">обычная модель</div>
          <ul className="s29-list">
            {LEFT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="vrule" />
        <div className="col right-col">
          <div className="ctitle">Сложные задачи</div>
          <div className="ccode">думающая модель</div>
          <ul className="s29-list">
            {RIGHT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="s29-hrule" />

      <div className="s29-summary">
        <p>Думающая не&nbsp;всегда лучше</p>
      </div>

      <Foot />
    </Stage>
  );
}
