import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide21.css';

export const meta = {
  id: '21',
  type: 'D',
  title: 'У думающих моделей выше галлюцинации',
  subblock: '1.5 Думающие модели',
};

/**
 * Слайд 30 · У думающих моделей выше галлюцинации
 * D-шаблон с акцентом на крупные числа. Две равноправные колонки:
 * DeepSeek R1 (14.3%) vs DeepSeek V3 (3.9%). Контраст создаётся
 * самим размером цифры, без подсветки красным и без --accent.
 * Источник — Vectara HHEM Leaderboard, под summary мелким моно.
 */

export default function Slide21() {
  return (
    <Stage label="21 У думающих моделей выше галлюцинации">
      <Meta num="21" type="D" />

      <div className="s30-header">
        <div className="sub">1.5 Думающие модели</div>
        <h2 className="title">У&nbsp;думающих моделей выше галлюцинации</h2>
      </div>

      <div className="s30-cols">
        <div className="col">
          <div className="ctitle">DeepSeek R1</div>
          <div className="ccode">думающая модель</div>
          <div className="cnumber">14.3%</div>
          <div className="cnumlabel">галлюцинаций</div>
        </div>
        <div className="vrule" />
        <div className="col">
          <div className="ctitle">DeepSeek V3</div>
          <div className="ccode">обычная модель</div>
          <div className="cnumber">3.9%</div>
          <div className="cnumlabel">галлюцинаций</div>
        </div>
      </div>

      <div className="s30-hrule" />

      <div className="s30-summary">
        <p>Чем длиннее рассуждение — больше места для&nbsp;ошибок</p>
        <p className="s30-source">Vectara HHEM Leaderboard, summarisation</p>
      </div>

      <Foot />
    </Stage>
  );
}
