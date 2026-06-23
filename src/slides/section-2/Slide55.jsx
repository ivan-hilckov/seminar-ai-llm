import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '55',
  type: 'C',
  title: 'Полный пример по формуле',
  subblock: '5.1 Формула промта',
};

const PROMPT = [
  ['Роль',         'Ты редактор научного журнала по лесному хозяйству.'],
  ['Задача',       'Сократи аннотацию статьи до 150 слов.'],
  ['Контекст',     'Аудитория — практикующие лесоводы. Сохрани термины\n«лесопатологический мониторинг», «приживаемость».'],
  ['Формат',       'Один абзац. Без маркеров.'],
  ['Ограничения',  'Не упрощай специальные термины. Не добавляй информации, которой нет в исходном тексте.'],
];

/**
 * Слайд 72 · Полный пример по формуле
 * C-слайд. Слева — один моно-блок с промтом, размеченный лейблами
 * [Роль], [Задача], [Контекст], [Формат], [Ограничения]. Справа — комментарий.
 *
 * Используем CSS Grid для надёжного выравнивания лейблов и текста.
 */
export default function Slide55() {
  return (
    <Stage label="55 Промт по формуле">
      <Meta num="55" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ</div>
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
        <div className="sub">5.1 Формула промта</div>
        <h2 className="title">Промт по формуле</h2>
        <p className="cap">
          Это не шаблон, который надо повторять буквально. Это набор слотов,
          которые имеет смысл заполнить, когда задача сложнее одного предложения
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
