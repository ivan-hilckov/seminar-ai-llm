import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '62',
  type: 'C',
  title: 'Четыре рабочих шаблона',
  subblock: '5.4 Четыре шаблона',
};

const TEMPLATES = [
  {
    num: '01',
    name: 'Редактура',
    desc: 'Сократить, уточнить, причесать собственный текст',
  },
  {
    num: '02',
    name: 'Литобзор',
    desc: 'Быстрая карта-обзор темы, дальше — проверка вручную',
  },
  {
    num: '03',
    name: 'Разбор данных',
    desc: 'Описать набор данных, посчитать сводные, заметить странности',
  },
  {
    num: '04',
    name: 'Письма и рецензии',
    desc: 'Деловое письмо или рецензия с конкретной структурой',
  },
];

/**
 * Слайд 83 · Четыре рабочих шаблона
 * C-слайд (обзорный). Слева — сетка 2×2 с четырьмя карточками шаблонов,
 * разделённая тонкими линиями --rule. Справа — заголовок и комментарий.
 */
export default function Slide62() {
  return (
    <Stage label="62 Четыре рабочих шаблона">
      <Meta num="62" type="C" />

      <div className="pv-grid">
        {TEMPLATES.map((t) => (
          <div key={t.num} className="pv-grid-cell">
            <div className="pv-grid-num">{t.num}</div>
            <h3 className="pv-grid-name">{t.name}</h3>
            <p className="pv-grid-desc">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="pv-right">
        <div className="sub">5.4 Шаблоны</div>
        <h2 className="title">Четыре шаблона на&nbsp;каждый день</h2>
        <p className="cap">
          Дальше — каждый шаблон отдельно: готовый промт и&nbsp;пример вывода.
          Можно сохранить и&nbsp;использовать как есть
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
