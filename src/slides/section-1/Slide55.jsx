import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide55.css';

export const meta = {
  id: '55',
  type: 'C',
  title: 'Что мы прошли',
  subblock: 'Закрытие',
};

/**
 * Слайд 55 · Что мы прошли
 * Структурный итог Секции 1 — карта пройденного на одном экране.
 * Три блока вертикально (Часть I/II/III), под каждым список тем
 * с нейтральными маркерами-кружками --mute. Без иконок, без галочек,
 * без --accent. Главный тезис — равноправный пункт списка, не выделен.
 * Рифмуется с картой дня (слайд 02): там — обзор будущего, здесь —
 * обзор пройденного.
 */

const PARTS = [
  {
    title: 'Часть I · Откуда взялись современные модели',
    items: [
      'Т9 на Nokia',
      'Автозаполнение',
      'От Transformer до GPT-3',
      'ChatGPT 2022',
      '«Думающие» модели',
      'Главный тезис: это не интеллект, это статистика',
    ],
  },
  {
    title: 'Часть II · Что происходит при ответе',
    items: ['Векторы смыслов', 'Контекст и память', 'Обучение и заморозка'],
  },
  {
    title: 'Часть III · Важные особенности',
    items: [
      'Данные и приватность',
      'Память и контекст в работе',
      'Доступ к интернету',
      'Точность и галлюцинации',
      'Границы применения',
    ],
  },
];

export default function Slide55() {
  return (
    <Stage label="55 Что мы прошли">
      <Meta num="55" type="C" />

      <div className="s55-header">
        <h2 className="title">Что мы прошли</h2>
        <p className="sub">Секция 1 · История и устройство языковых моделей</p>
      </div>

      <div className="s55-map">
        {PARTS.map((part) => (
          <div key={part.title}>
            <h3 className="s55-block__title">{part.title}</h3>
            <ul className="s55-list">
              {part.items.map((it) => (
                <li key={it} className="s55-item">
                  <span className="s55-dot" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Foot />
    </Stage>
  );
}
