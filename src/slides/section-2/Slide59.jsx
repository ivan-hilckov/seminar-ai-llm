import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '59',
  type: 'C',
  title: 'Итерация 2 · роль и критерии',
  subblock: '5.3 Итерация на редактуре',
};

const REQUEST_TEXT = `Ты рецензент научного журнала. Перепиши абзац строже:
сохрани все цифры и факты, убери лишние слова,
не теряй терминологию.`;

const RESULT_TEXT = `Лесопатологический мониторинг выявил расширение
очагов короеда-типографа на 17% в обследованных
еловых насаждениях. Поражены преимущественно
перестойные деревья старше 80 лет на южных склонах.`;

/**
 * Слайд 81 · Итерация 2 — роль рецензента + критерии
 * C-слайд. Слева — два моно-блока: запрос с ролью и критериями, под ним результат.
 */
export default function Slide59() {
  return (
    <Stage label="59 Итерация 2 — роль и критерии">
      <Meta num="59" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ЗАПРОС</div>
          <pre className="pv-pre">{REQUEST_TEXT}</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">РЕЗУЛЬТАТ</div>
          <pre className="pv-pre">{RESULT_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.3 Итерация</div>
        <h2 className="title">Итерация 2 — роль рецензента + критерии</h2>
        <p className="cap">
          Цифры на&nbsp;месте, фактура сохранена, лишнего меньше. Но&nbsp;видно&nbsp;ли мне,
          что именно изменилось? Нет — приходится сравнивать построчно
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
