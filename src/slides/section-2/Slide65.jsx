import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '65',
  type: 'C',
  title: 'Итерация 1 · косметика',
  subblock: '5.3 Итерация на редактуре',
};

const BEFORE_TEXT = `Лесопатологический мониторинг показал, что очаги
короеда-типографа в обследованных насаждениях ели
расширились на 17% по сравнению с предыдущим сезоном.
Поражены преимущественно перестойные деревья старше
80 лет на южных склонах.`;

const AFTER_TEXT = `Результаты комплексного лесопатологического
мониторинга со всей очевидностью продемонстрировали
значительное расширение очагов поражения
короедом-типографом. Данное явление носит выраженный
характер и заслуживает пристального внимания
специалистов.`;

/**
 * Слайд 80 · Итерация 1 — «улучши абзац»
 * C-слайд. Слева — короткий промт, под ним два моно-блока «БЫЛО / СТАЛО».
 * Никаких цветовых маркеров — разница только в плотности и конкретике.
 */
export default function Slide65() {
  return (
    <Stage label="65 Итерация 1 — улучши абзац">
      <Meta num="65" type="C" />

      <div className="pv-stack tight">
        <div className="pv-card">
          <div className="pv-card-label">ЗАПРОС НА УЛУЧШЕНИЕ</div>
          <pre className="pv-pre lg">улучши абзац</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">БЫЛО</div>
          <pre className="pv-pre small">{BEFORE_TEXT}</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">СТАЛО</div>
          <pre className="pv-pre small">{AFTER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.3 Итерация</div>
        <h2 className="title">Итерация 1 — «улучши&nbsp;абзац»</h2>
        <p className="cap">
          Стало пышнее, но&nbsp;исчезли цифры, возраст, склоны. Модель
          не&nbsp;знает, что улучшать, и&nbsp;улучшает форму
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
