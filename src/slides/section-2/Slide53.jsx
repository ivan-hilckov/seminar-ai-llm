import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide53.css';

export const meta = {
  id: '53',
  type: 'D',
  title: 'Что у кого есть',
  subblock: '4.4 Свод по моделям',
};

/**
 * Слайд 53 · Что у кого есть
 * D-таблица 4 модели × 8 фич — итог-резюме Части IV. Галочка / прочерк,
 * для доступа и цены — короткий текст. Новой информации нет: всё уже было
 * в портретах 49–52, здесь зал видит всё рядом.
 */

const MODELS = ['Perplexity', 'Claude', 'ChatGPT', 'DeepSeek'];

const y = (note) => ({ mark: 'y', note });
const n = () => ({ mark: 'n' });
const t = (text) => ({ text });

const ROWS = [
  { f: 'Поиск в интернете', cells: [y('основное'), y(), y(), y()] },
  { f: 'Ссылки на источники', cells: [y('лучшие'), y('при поиске'), y('при поиске'), y('при поиске')] },
  { f: 'Работа с документами', cells: [y(), y(), y(), y('до 50 МБ')] },
  { f: 'Память между чатами', cells: [y(), y(), y(), n()] },
  { f: 'Проекты / папки', cells: [y('Spaces'), y(), y(), n()] },
  { f: 'Артефакты / Canvas', cells: [n(), y(), y(), n()] },
  { f: 'Доступ из России', cells: [t('без VPN'), t('VPN'), t('VPN'), t('без VPN')] },
  { f: 'Цена входа', cells: [t('free / $20'), t('free / $20¹'), t('free / $20¹'), t('бесплатно')] },
];

function Cell({ data }) {
  if (data.text) return <span className="s53-txt">{data.text}</span>;
  if (data.mark === 'n') return <span className="s53-dash">—</span>;
  return (
    <span className="s53-yes">
      <span className="s53-check">✓</span>
      {data.note && <span className="s53-note">{data.note}</span>}
    </span>
  );
}

export default function Slide53() {
  return (
    <Stage label="53 Что у кого есть">
      <Meta num="53" type="D" />

      <div className="s53-header">
        <div className="sub">4.4 Свод по моделям</div>
        <h2 className="title">Что у&nbsp;кого есть</h2>
      </div>

      <div className="s53-table">
        <div className="s53-row s53-row--head">
          <div className="s53-cell s53-cell--feat" />
          {MODELS.map((m) => (
            <div className="s53-cell s53-cell--model" key={m}>{m}</div>
          ))}
        </div>

        {ROWS.map((row) => (
          <div className="s53-row" key={row.f}>
            <div className="s53-cell s53-cell--feat">{row.f}</div>
            {row.cells.map((c, i) => (
              <div className="s53-cell" key={MODELS[i]}>
                <Cell data={c} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="s53-footnote">¹ — оплата зарубежной картой</div>
      <div className="s53-caption">Нет лучшей на&nbsp;всё. Под&nbsp;задачу — своя.</div>

      <Foot />
    </Stage>
  );
}
