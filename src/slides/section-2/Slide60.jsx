import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '60',
  type: 'C',
  title: 'Письмо · плохой промт',
  subblock: '5.2 Плохой vs хороший',
};

const ANSWER_TEXT = `Уважаемый коллега!

Надеюсь, у Вас всё хорошо. Хотел бы обратиться к Вам
по одному рабочему вопросу. Уверен, что Ваш опыт и
знания будут очень полезны.

Буду признателен за обратную связь в удобное для Вас
время.

С уважением,
[Ваше имя]`;

/**
 * Слайд 75 · Письмо коллеге · плохой промт
 * C-слайд. Слева — короткий промт, под ним шаблонно-вежливый ответ.
 */
export default function Slide60() {
  return (
    <Stage label="60 Письмо · плохой промт">
      <Meta num="60" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ</div>
          <pre className="pv-pre lg">напиши письмо коллеге</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">ОТВЕТ</div>
          <pre className="pv-pre small">{ANSWER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.2 Плохой и&nbsp;хороший</div>
        <h2 className="title">Письмо коллеге · плохой промт</h2>
        <p className="cap">
          Звучит вежливо, но&nbsp;не&nbsp;содержит ни&nbsp;одного фрагмента сути. Такое
          письмо коллега удалит, не&nbsp;дочитав
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
