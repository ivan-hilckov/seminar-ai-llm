import { Fragment } from 'react';
import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide48.css';

export const meta = {
  id: '48',
  type: 'D',
  title: 'Бесплатное · платное · API',
  subblock: '4.3 Тарифы и API',
};

/**
 * Слайд 67 · Бесплатное, платное, API
 * D-сравнение с 3 колонками. Структура та же, что у Slide44, сокращена
 * до 3 колонок. Последняя ось у каждого тарифа звучит по-своему («что
 * недоступно» / «что даёт сверх» / «что нужно»), потому хранится в массиве
 * лейблов параллельно значениям.
 */

const TARIFFS = [
  {
    name: 'Бесплатное',
    rows: [
      ['Доступ', 'веб-интерфейс через браузер'],
      ['Модели', 'обычные, не самые свежие, с лимитами на запросы'],
      ['Память диалога', 'есть в рамках чата'],
      ['Когда подходит', 'познакомиться, разовые задачи, простой текст'],
      [
        'Что недоступно',
        'длинные документы целиком, частые запросы подряд, продвинутые модели',
      ],
    ],
  },
  {
    name: 'Платное · ≈ $20 / мес',
    rows: [
      ['Доступ', 'тот же веб-интерфейс + приоритет'],
      ['Модели', 'все актуальные, включая думающие, увеличенные лимиты'],
      [
        'Память диалога',
        'есть, плюс память между диалогами (у некоторых сервисов)',
      ],
      [
        'Когда подходит',
        'регулярная работа, длинные документы, многошаговые задачи',
      ],
      [
        'Что даёт сверх',
        'загрузка файлов, проекты, кастомные ассистенты, поиск в интернете',
      ],
    ],
  },
  {
    name: 'API',
    rows: [
      ['Доступ', 'программный, через код или внешние приложения'],
      ['Модели', 'все, оплата по количеству обработанного текста'],
      ['Память диалога', 'только то, что передаёшь в запросе'],
      [
        'Когда подходит',
        'автоматизация, интеграция, обработка тысяч документов',
      ],
      ['Что нужно', 'базовое программирование или готовое приложение'],
    ],
  },
];

function Column({ tariff, position }) {
  return (
    <div className={`col ${position}`}>
      <div className="ctitle">{tariff.name}</div>
      <div className="s67-axes">
        {tariff.rows.map(([label, value]) => (
          <div key={label}>
            <div className="s67-axis-label">{label}</div>
            <p className="s67-axis-text">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Slide48() {
  return (
    <Stage label="48 Бесплатное, платное, API">
      <Meta num="48" type="D" />

      <div className="s67-header">
        <div className="sub">4.3 Тарифы</div>
        <h2 className="title">Бесплатное, платное, API</h2>
        <p className="lead">Три уровня доступа к&nbsp;одним и&nbsp;тем&nbsp;же моделям</p>
      </div>

      <div className="s67-cols">
        {TARIFFS.map((t, i) => {
          const position =
            i === 0 ? 'first' : i === TARIFFS.length - 1 ? 'last' : '';
          return (
            <Fragment key={t.name}>
              <Column tariff={t} position={position} />
              {i < TARIFFS.length - 1 && <div className="vrule" />}
            </Fragment>
          );
        })}
      </div>

      <div className="s67-hrule" />

      <div className="s67-summary">
        <p>
          Платная подписка — самый частый вариант для&nbsp;рабочей нагрузки
          исследователя
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
