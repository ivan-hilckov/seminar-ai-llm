import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '53',
  type: 'C',
  title: 'Литобзор · плохой промт',
  subblock: '5.2 Плохой vs хороший',
};

const ANSWER_TEXT = `Лиственница (Larix) — род хвойных деревьев семейства
Сосновые. Распространена в России, Канаде, Скандинавии.
По лиственнице существует обширная научная литература.
Изучаются вопросы:

— ботаника и систематика
— лесоводство и хозяйственное использование
— устойчивость к климату
— болезни и вредители

Для подробного изучения рекомендуется обратиться к
специальным справочникам и научным журналам.`;

/**
 * Слайд 73 · Литобзор · плохой промт
 * C-слайд. Слева — два моно-блока: краткий промт и общий ответ.
 * Разница «плохого» от «хорошего» показывается через размер и плотность текста,
 * не через цветовую подсветку.
 */
export default function Slide53() {
  return (
    <Stage label="53 Литобзор · плохой промт">
      <Meta num="53" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ</div>
          <pre className="pv-pre lg">найди статьи про лиственницу</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">ОТВЕТ</div>
          <pre className="pv-pre small">{ANSWER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.2 Плохой и&nbsp;хороший</div>
        <h2 className="title">Литобзор · плохой промт</h2>
        <p className="cap">
          Модель не&nbsp;знает: какая лиственница, какой регион, какой период,
          какие журналы, какой формат. Отвечает «в&nbsp;среднем» — то&nbsp;есть никак
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
