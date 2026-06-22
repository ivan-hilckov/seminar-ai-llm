import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '70',
  type: 'C',
  title: 'Шаблон · Литобзор',
  subblock: '5.4 Четыре шаблона',
};

const PROMPT = [
  ['Роль',     'Ты научный консультант по {область — например, лесному хозяйству}.'],
  ['Задача',   'Дай короткий обзор исследований по теме: {ваша тема одним предложением}.'],
  ['Контекст', 'Период — {последние N лет}. Регион — {если применимо}. Журналы, которые стоит учесть: {список или «основные в области»}.'],
  ['Формат',   '5–8 пунктов. По каждому: тема, ключевой вывод, авторы (если знаешь — иначе «авторы не уверены»).'],
  ['Огранич.', 'Если не уверен в авторстве или дате — пиши «не уверен». Не выдумывай DOI и ссылки. В конце — 2–3 направления, которые имеет смысл искать дальше.'],
];

/**
 * Слайд 85 · Шаблон · Литобзор
 * C-слайд. Слева — готовый промт-шаблон со слотами {в фигурных скобках}.
 */
export default function Slide70() {
  return (
    <Stage label="70 Шаблон · Литобзор">
      <Meta num="70" type="C" />

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
        <h2 className="title">Шаблон · Литобзор</h2>
        <p className="cap">
          Никогда не&nbsp;использовать как готовый обзор. Только как карту —
          куда смотреть. Каждую ссылку и&nbsp;автора проверять самостоятельно
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
