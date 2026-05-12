import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide10.css';

export const meta = {
  id: '10',
  type: 'D',
  title: 'Т9 vs LLM',
  subblock: '1.1 Т9 на Nokia',
};

export default function Slide10() {
  return (
    <Stage label="10 Т9 vs LLM">
      <Meta num="10" type="D" />

      <div className="s10-header">
        <div className="sub">1.1 Т9 на Nokia</div>
        <h2 className="title">Т9 vs LLM</h2>
      </div>

      <div className="s10-cols">
        <div className="col">
          <div className="ctitle">Т9</div>
          <div className="csub">Словарь</div>
          <p className="cdesc">
            Машина выбирала слово из заранее зашитого набора. 20–50 тысяч слов на язык. Каждое слово либо есть, либо его нет.
          </p>
        </div>
        <div className="vrule" />
        <div className="col right-col">
          <div className="ctitle">LLM</div>
          <div className="csub">Генерация</div>
          <p className="cdesc">
            Модель собирает каждое слово с нуля, опираясь на статистику текстов. Готового набора нет — любое слово может оказаться следующим.
          </p>
        </div>
      </div>

      <div className="s10-hrule" />

      <div className="s10-summary">
        <p>Оба работают на статистике. Разница — в объёме данных.</p>
      </div>

      <Foot />
    </Stage>
  );
}
