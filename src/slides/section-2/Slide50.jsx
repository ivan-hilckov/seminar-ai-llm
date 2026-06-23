import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide50.css';

export const meta = {
  id: '50',
  type: 'D',
  title: 'Облако vs локально',
  subblock: '4.4 Облако vs локально',
};

/**
 * Слайд 69 · Облако и локально
 * D-сравнение по образцу Slide43 (Секция 1). Тема продолжает разговор про
 * приватность из 44–45 и накладывает выбор инструмента из 64–67. Без иконок
 * облачка/компьютера, без названий локальных моделей (Llama, Mistral).
 */

const AXES = [
  {
    label: 'Где работает',
    left: 'на серверах компании (OpenAI, Anthropic, Google, DeepSeek)',
    right: 'на вашем компьютере (нужны: 16–64 GB RAM, GPU желательно)',
  },
  {
    label: 'Куда уходит запрос',
    left: 'на сервер компании, обрабатывается там',
    right: 'никуда, всё считается на устройстве',
  },
  {
    label: 'Что с данными',
    left: 'хранятся у провайдера, могут использоваться для улучшения сервиса (зависит от тарифа и настроек)',
    right: 'остаются у вас полностью',
  },
  {
    label: 'Мощность',
    left: 'любая, ограничена только тарифом',
    right: 'ограничена железом — обычно слабее облачных моделей',
  },
  {
    label: 'Подходит для',
    left: 'обычной работы с открытыми материалами, черновиков, поиска, переводов',
    right: 'работы с конфиденциальными данными, экспериментов, оффлайн-сценариев',
  },
  {
    label: 'Не подходит для',
    left: 'конфиденциальных данных без явного NDA / корпоративного тарифа',
    right: 'самых мощных задач — топ-моделей локально не запустить',
  },
];

function AxisColumn({ side }) {
  return (
    <div className="s69-axes">
      {AXES.map((a) => (
        <div key={a.label}>
          <div className="s69-axis-label">{a.label}</div>
          <p className="s69-axis-text">{a[side]}</p>
        </div>
      ))}
    </div>
  );
}

export default function Slide50() {
  return (
    <Stage label="50 Облако и локально">
      <Meta num="50" type="D" />

      <div className="s69-header">
        <div className="sub">4.4 Где живут данные</div>
        <h2 className="title">Облако и локально</h2>
        <p className="lead">Где живёт модель — там живут ваши запросы</p>
      </div>

      <div className="s69-cols">
        <div className="col">
          <div className="ctitle">Облако</div>
          <AxisColumn side="left" />
        </div>
        <div className="vrule" />
        <div className="col right-col">
          <div className="ctitle">Локально</div>
          <AxisColumn side="right" />
        </div>
      </div>

      <div className="s69-hrule" />

      <div className="s69-summary">
        <p>
          Для&nbsp;большинства задач исследователя — облако. Для&nbsp;конфиденциальных
          материалов — локально или специальный корпоративный тариф
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
