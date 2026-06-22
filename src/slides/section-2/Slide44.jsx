import { Fragment } from 'react';
import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide44.css';

export const meta = {
  id: '44',
  type: 'D',
  title: 'ChatGPT · Claude · Gemini · DeepSeek',
  subblock: '4.1 Сервисы LLM',
};

/**
 * Слайд 64 · Четыре больших сервиса
 * D-сравнение с 4 колонками. Структура каждой колонки одинакова: название
 * сервиса крупно сверху, под ним 3 строки «лейбл — значение» по общим осям
 * (Кто / Сильная сторона / Особенность). Без логотипов, без бренд-цветов.
 */

const AXES = [
  {
    label: 'Кто',
    values: [
      'OpenAI · ноябрь 2022',
      'Anthropic · 2023',
      'Google · 2023',
      'DeepSeek · Китай · 2024',
    ],
  },
  {
    label: 'Сильная сторона',
    values: [
      'широкий универсал, лучшая экосистема плагинов и кастомных GPT',
      'длинные тексты, аккуратная работа с документами, разметка',
      'интеграция с поиском Google, работа с большими файлами',
      'сильная математика и код, открытые веса',
    ],
  },
  {
    label: 'Особенность',
    values: [
      'массовое распространение, знаком большинству',
      'аккуратный тон, осторожен с фактами',
      'встроен в Google-сервисы (Docs, Gmail)',
      'дёшево или бесплатно, доступен без зарубежной карты',
    ],
  },
];

const SERVICES = ['ChatGPT', 'Claude', 'Gemini', 'DeepSeek'];

function Column({ index, title, position }) {
  return (
    <div className={`col ${position}`}>
      <div className="ctitle">{title}</div>
      <div className="s64-axes">
        {AXES.map((a) => (
          <div className="s64-axis" key={a.label}>
            <div className="s64-axis-label">{a.label}</div>
            <p className="s64-axis-text">{a.values[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Slide44() {
  return (
    <Stage label="44 Четыре больших сервиса">
      <Meta num="44" type="D" />

      <div className="s64-header">
        <div className="sub">4.1 Четыре сервиса</div>
        <h2 className="title">Четыре больших сервиса</h2>
        <p className="lead">Похожие возможности, разные сильные стороны</p>
      </div>

      <div className="s64-cols">
        {SERVICES.map((name, i) => {
          const position =
            i === 0 ? 'first' : i === SERVICES.length - 1 ? 'last' : '';
          return (
            <Fragment key={name}>
              <Column index={i} title={name} position={position} />
              {i < SERVICES.length - 1 && <div className="vrule" />}
            </Fragment>
          );
        })}
      </div>

      <div className="s64-hrule" />

      <div className="s64-summary">
        <p>
          Один и&nbsp;тот&nbsp;же тип инструмента — разные акценты. Выбор зависит
          от&nbsp;задачи и&nbsp;доступа.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
