import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide39.css';

export const meta = {
  id: '39',
  type: 'D',
  title: 'Где проверять обязательно',
  subblock: '3.4 Точность и галлюцинации',
};

/**
 * Слайд 52 · Где проверять обязательно
 * D-сравнение: развёртка анкора слайда 51 в практическую таблицу 4+4.
 * Левая колонка — категории, требующие проверки. Правая — где можно
 * работать без оглядки. Без иконок, без --accent, без цветовой
 * маркировки зон. Обе колонки одинаково спокойные.
 */

const LEFT = [
  { text: 'Цифры и статистика', ex: '15%, −20 °C, 1 200 га' },
  { text: 'Цитаты и ссылки', ex: 'Иванов, 2019, DOI' },
  { text: 'Нормативные документы', ex: 'ГОСТы, статьи закона, СНиПы' },
  { text: 'Имена, даты, факты', ex: 'год выхода работы, авторство метода' },
];

const RIGHT = [
  { text: 'Объяснения известных понятий', ex: 'что такое регрессия, фотосинтез' },
  { text: 'Переформулировки', ex: 'сократить, упростить, перевести' },
  { text: 'Структура черновика', ex: 'оглавление, разделы, тезисы' },
  { text: 'Поиск аналогий и идей', ex: 'подобрать сравнение, варианты' },
];

function ItemList({ items }) {
  return (
    <ul className="s52-items">
      {items.map((it) => (
        <li key={it.text} className="s52-item">
          {it.text}
          <span className="s52-item__ex">({it.ex})</span>
        </li>
      ))}
    </ul>
  );
}

export default function Slide39() {
  return (
    <Stage label="39 Где проверять обязательно">
      <Meta num="39" type="D" />

      <div className="s52-header">
        <h2 className="title">Где проверять обязательно</h2>
        <p className="sub">Развёрнутое правило для&nbsp;работы</p>
      </div>

      <div className="s52-cols">
        <div className="col">
          <div className="ctitle">Обязательно проверять</div>
          <ItemList items={LEFT} />
        </div>

        <div className="vrule" />

        <div className="col">
          <div className="ctitle">Можно доверять</div>
          <ItemList items={RIGHT} />
        </div>
      </div>

      <Foot />
    </Stage>
  );
}
