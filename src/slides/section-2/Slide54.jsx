import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '54',
  type: 'C',
  title: 'Формула промта',
  subblock: '5.1 Формула промта',
};

const COMPONENTS = [
  {
    num: '01',
    name: 'Роль',
    desc: 'кем модель должна выступать',
  },
  {
    num: '02',
    name: 'Задача',
    desc: 'что нужно сделать — один глагол',
  },
  {
    num: '03',
    name: 'Контекст',
    desc: 'кто аудитория, какие материалы, что важно',
  },
  {
    num: '04',
    name: 'Формат',
    desc: 'как должен выглядеть ответ',
  },
  {
    num: '05',
    name: 'Ограничения',
    desc: 'чего избегать, что обязательно учесть',
  },
];

/**
 * Слайд 71 · Формула промта
 * C-слайд. Слева — список из пяти компонентов формулы (номер + название + описание),
 * разделённый горизонтальными линиями. Справа — заголовок и комментарий.
 */
export default function Slide54() {
  return (
    <Stage label="54 Формула промта">
      <Meta num="54" type="C" />

      <div className="pv-formula">
        {COMPONENTS.map((c) => (
          <div key={c.num} className="pv-formula-row">
            <div className="pv-formula-num">{c.num}</div>
            <div>
              <h3 className="pv-formula-name">{c.name}</h3>
              <p className="pv-formula-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pv-right">
        <div className="sub">5.1 Формула промта</div>
        <h2 className="title">Формула промта</h2>
        <p className="cap">
          Не&nbsp;нужно использовать все&nbsp;пять в&nbsp;каждом запросе.
          Но&nbsp;чем сложнее задача — тем&nbsp;больше компонентов
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
