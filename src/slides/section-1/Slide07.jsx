import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide07.css';

export const meta = {
  id: '07',
  type: 'D',
  title: 'Т9 · Smart Compose · LLM',
  subblock: '1.2 Автозаполнение',
};

export default function Slide07() {
  return (
    <Stage label="07 Т9 · Smart Compose · LLM">
      <Meta num="07" type="D" />

      <div className="s10-header">
        <div className="sub">1.2 Автозаполнение</div>
        <h2 className="title">Т9 · Smart Compose · LLM</h2>
      </div>

      <div className="s10-cols">
        <div className="col">
          <div className="ctitle">Т9</div>
          <div className="csub">Словарь</div>
          <p className="cdesc">
            Слово берётся из заранее зашитого набора: 20–50 тысяч слов на язык. Либо слово есть в словаре, либо его нет.
          </p>
        </div>
        <div className="vrule" />
        <div className="col">
          <div className="ctitle">Smart Compose</div>
          <div className="csub">Подсказка</div>
          <p className="cdesc">
            Достраивает начатую фразу по статистике миллионов писем. Угадывает продолжение — но в рамках типовых формулировок.
          </p>
        </div>
        <div className="vrule" />
        <div className="col">
          <div className="ctitle">LLM</div>
          <div className="csub">Генерация</div>
          <p className="cdesc">
            Собирает каждое слово с нуля по статистике текстов. Готового набора нет — следующим может оказаться любое слово.
          </p>
        </div>
      </div>

      <div className="s10-hrule" />

      <div className="s10-summary">
        <p>Все три угадывают продолжение. Разница — в объёме данных и свободе выбора слова.</p>
      </div>

      <Foot />
    </Stage>
  );
}
