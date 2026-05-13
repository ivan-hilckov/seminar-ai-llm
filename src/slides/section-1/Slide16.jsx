import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide16.css';

export const meta = {
  id: '16',
  type: 'D',
  title: '2018: GPT-1 · последовательно vs всё сразу',
  subblock: '1.3 От Transformer до GPT-3',
};

export default function Slide16() {
  return (
    <Stage label="16 2018: GPT-1 · последовательно vs всё сразу">
      <Meta num="16" type="D" />

      <div className="s16-header">
        <div className="sub">1.3 От Transformer до GPT-3</div>
        <h2 className="title">2018: GPT-1</h2>
        <p className="subtitle">последовательно vs всё сразу</p>
      </div>

      <div className="s16-cols">
        <div className="col">
          <div className="ctitle">RNN (до&nbsp;2017)</div>
          <ul className="clist">
            <li>Читает слово за&nbsp;словом</li>
            <li>Каждое следующее зависит от&nbsp;предыдущего</li>
            <li>Медленно, забывает начало длинной фразы</li>
          </ul>
        </div>
        <div className="vrule" />
        <div className="col right-col">
          <div className="ctitle">GPT-1 (2018)</div>
          <ul className="clist">
            <li>Видит весь текст сразу</li>
            <li>Учится на&nbsp;всех словах параллельно</li>
            <li>Быстрее и&nbsp;помнит дальние связи</li>
          </ul>
        </div>
      </div>

      <Foot />
    </Stage>
  );
}
