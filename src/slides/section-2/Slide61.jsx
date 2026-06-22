import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '61',
  type: 'C',
  title: 'Итерация 3 · правки маркерами',
  subblock: '5.3 Итерация на редактуре',
};

const REQUEST_TEXT = `То же самое, но покажи правки маркерами:
[~было~] [+стало+] [-удалено-].
Один отступ — один блок правки.`;

const RESULT_TEXT = `[~Лесопатологический мониторинг показал, что~]
[+Лесопатологический мониторинг выявил+] расширение
очагов короеда-типографа [-в обследованных насаждениях
ели-] на 17% в обследованных еловых насаждениях.

Поражены преимущественно перестойные деревья старше
80 лет на южных склонах. — сохранено без правок`;

/**
 * Слайд 82 · Итерация 3 — покажи правки маркерами
 * C-слайд. Маркеры [~было~] [+стало+] [-удалено-] остаются обычным моно-текстом,
 * никакой цветовой подсветки — это часть текстовой конвенции, а не визуальной.
 */
export default function Slide61() {
  return (
    <Stage label="61 Итерация 3 — правки маркерами">
      <Meta num="61" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ЗАПРОС</div>
          <pre className="pv-pre">{REQUEST_TEXT}</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">РЕЗУЛЬТАТ</div>
          <pre className="pv-pre small">{RESULT_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.3 Итерация</div>
        <h2 className="title">Итерация 3 — покажи правки маркерами</h2>
        <p className="cap">
          Видно каждое решение модели. Можно принять, отклонить, попросить
          переделать конкретно эту правку. Это рабочая редактура, а&nbsp;не&nbsp;угадывание
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
