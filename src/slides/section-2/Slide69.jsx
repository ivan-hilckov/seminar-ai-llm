import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '69',
  type: 'C',
  title: 'Шаблон · Редактура',
  subblock: '5.4 Четыре шаблона',
};

const PROMPT = [
  ['Роль',     'Ты редактор научного текста.'],
  ['Задача',   'Отредактируй абзац ниже.'],
  ['Контекст', 'Это {фрагмент статьи / введение / методика / обсуждение}. Целевая длина — {N} слов. Аудитория — {практики / академическая}.'],
  ['Формат',   'Покажи правки маркерами: [~было~] [+стало+] [-удалено-]. Один отступ — один блок правки.'],
  ['Огранич.', 'Сохрани все цифры, термины и ссылки. Не добавляй фактов, которых нет в оригинале.'],
];

/**
 * Слайд 84 · Шаблон · Редактура
 * C-слайд. Слева — готовый промт-шаблон с пустыми слотами в {фигурных скобках},
 * под ним отдельный блок «ТЕКСТ» для вставки фрагмента.
 */
export default function Slide69() {
  return (
    <Stage label="69 Шаблон · Редактура">
      <Meta num="69" type="C" />

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

        <div className="pv-card">
          <div className="pv-card-label">ТЕКСТ</div>
          <pre className="pv-pre" style={{ color: 'var(--mute)' }}>{'{вставьте абзац}'}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.4 Шаблоны</div>
        <h2 className="title">Шаблон · Редактура</h2>
        <p className="cap">
          Рабочая версия из&nbsp;того, что мы разобрали в&nbsp;итерации. Подставьте свой
          текст в&nbsp;фигурные скобки — и&nbsp;в&nbsp;дело
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
