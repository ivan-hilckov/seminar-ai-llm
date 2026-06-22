import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '59',
  type: 'C',
  title: 'Литобзор · хороший промт',
  subblock: '5.2 Плохой vs хороший',
};

const PROMPT = [
  ['Роль',         'Ты научный консультант по лесному хозяйству.'],
  ['Задача',       'Составь короткий обзор исследований по приживаемости лиственницы сибирской в условиях вечной мерзлоты.'],
  ['Контекст',     'Период — последние 10 лет. Регион — Якутия и Магаданская область. Журналы «Лесоведение», «Сибирский лесной журнал», Forest Ecology.'],
  ['Формат',       '5–7 пунктов. По каждому: тема, ключевой вывод, авторы (если знаешь).'],
  ['Огранич.',     'Если не уверен в авторстве — пиши «авторы не уверены». Не выдумывай ссылки.'],
];

const ANSWER_TEXT = `1. Влияние климатических аномалий на приживаемость
   L. sibirica в Центральной Якутии. Снижение
   приживаемости на 18–24% при ранневесенних
   оттепелях. Авторы не уверены.

2. Сравнение методов посадки на участках с активным
   слоем мерзлоты до 1.2 м. Контейнерная посадка
   показала выигрыш +30% к открытой корневой системе.
   Авторы не уверены.

3. Микоризные ассоциации L. sibirica в северных
   популяциях... [и так далее, всего 5–7 пунктов]`;

/**
 * Слайд 74 · Литобзор · хороший промт
 * C-слайд. Слева — структурированный промт по формуле, под ним конкретный ответ.
 */
export default function Slide59() {
  return (
    <Stage label="59 Литобзор · хороший промт">
      <Meta num="59" type="C" />

      <div className="pv-stack tight">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ</div>
          <div className="pv-grid-prompt compact">
            {PROMPT.map(([label, text]) => (
              <div key={label} className="pv-grid-prompt-row">
                <div className="pv-grid-prompt-lbl">[{label}]</div>
                <div className="pv-grid-prompt-text">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">ОТВЕТ</div>
          <pre className="pv-pre tiny">{ANSWER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.2 Плохой и&nbsp;хороший</div>
        <h2 className="title">Литобзор · хороший промт</h2>
        <p className="cap">
          Контекст сузил задачу до&nbsp;решаемой. Ограничение «не&nbsp;выдумывай» снизило
          риск галлюцинации. Результат — основа для&nbsp;проверки, не&nbsp;финал
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
