import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '65',
  type: 'C',
  title: 'Шаблон · Разбор данных',
  subblock: '5.4 Четыре шаблона',
};

const PROMPT = [
  ['Роль',     'Ты аналитик данных, помогаешь исследователю.'],
  ['Задача',   'Опиши прикреплённый набор данных и обрати внимание на то, что в нём может быть подозрительным.'],
  ['Контекст', 'Набор: {что это, как собирали, за какой период}. Цель моего исследования: {одно предложение}.'],
  ['Формат',   `1) Что в наборе (колонки, тип данных, период, количество строк).
2) Сводные числа (средние, медианы, минимум, максимум по ключевым переменным).
3) Что выглядит странно (пропуски, выбросы, противоречия, дубликаты).
4) Какие проверки стоит сделать перед серьёзным анализом.`],
  ['Огранич.', 'Не делай выводов о причинах. Не предлагай гипотезы. Только описание и подозрительные места.'],
];

/**
 * Слайд 86 · Шаблон · Разбор данных
 * C-слайд. Слева — готовый промт-шаблон. Блок [Формат] — многострочный
 * с пронумерованным списком из четырёх пунктов.
 */
export default function Slide65() {
  return (
    <Stage label="65 Шаблон · Разбор данных">
      <Meta num="65" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ-ШАБЛОН</div>
          <div className="pv-grid-prompt">
            {PROMPT.map(([label, text]) => (
              <div key={label} className="pv-grid-prompt-row">
                <div className="pv-grid-prompt-lbl">[{label}]</div>
                <div className="pv-grid-prompt-text">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.4 Шаблоны</div>
        <h2 className="title">Шаблон · Разбор данных</h2>
        <p className="cap">
          Не&nbsp;для самого анализа, а&nbsp;для первого знакомства с&nbsp;набором.
          Найти странности и&nbsp;проверить чистоту до&nbsp;того, как считать
          что-то серьёзное
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
