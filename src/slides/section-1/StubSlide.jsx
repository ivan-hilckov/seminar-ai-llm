import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './stub-slide.css';

/**
 * Заглушка для слайдов, которые ещё не реализованы.
 * Рендерит type-appropriate скелет на базе данных из реестра
 * (title, subblock). Стилистически — приглушённо: dashed-боксы,
 * серый текст — чтобы было видно «это черновик».
 */
export default function StubSlide({ id, type, title, subblock }) {
  const num = id;
  return (
    <Stage label={`${num} · ${type} · черновик`} className="stub-slide">
      <Meta num={num} type={type} />
      <div className="stub-slide__badge">черновик</div>

      {type === 'A' && <A id={num} title={title} />}
      {type === 'B' && <B subblock={subblock} title={title} />}
      {type === 'C' && <C subblock={subblock} title={title} />}
      {type === 'D' && <D subblock={subblock} title={title} />}
      {type === 'E' && <E id={num} title={title} subblock={subblock} />}

      <Foot />
    </Stage>
  );
}

function A({ id, title }) {
  const { roman } = getPartInfo(id);
  return (
    <>
      <div className="stub-a__roman">{roman}</div>
      <h1 className="stub-a__title">{title}</h1>
    </>
  );
}

function B({ subblock, title }) {
  return (
    <>
      <div className="stub-b__sub">{subblock}</div>
      <p className="stub-b__thesis">{title}</p>
    </>
  );
}

function C({ subblock, title }) {
  return (
    <div className="stub-c__layout">
      <div className="stub-c__visual">ВИЗУАЛ &mdash; в разработке</div>
      <div className="stub-c__text">
        <div className="stub-c__sub">{subblock}</div>
        <h1 className="stub-c__title">{title}</h1>
        <p className="stub-c__cap">Подпись будет добавлена при финализации слайда.</p>
      </div>
    </div>
  );
}

function D({ subblock, title }) {
  return (
    <>
      <div className="stub-d__head">
        <div className="stub-d__sub">{subblock}</div>
        <h1 className="stub-d__title">{title}</h1>
      </div>
      <div className="stub-d__cols">
        <div className="stub-d__col">
          <div className="stub-d__label">А</div>
          <div className="stub-d__placeholder stub-d__placeholder--full" />
          <div className="stub-d__placeholder stub-d__placeholder--mid" />
          <div className="stub-d__placeholder stub-d__placeholder--short" />
        </div>
        <div className="stub-d__divider" />
        <div className="stub-d__col">
          <div className="stub-d__label">Б</div>
          <div className="stub-d__placeholder stub-d__placeholder--full" />
          <div className="stub-d__placeholder stub-d__placeholder--mid" />
          <div className="stub-d__placeholder stub-d__placeholder--short" />
        </div>
      </div>
    </>
  );
}

function E({ id, title, subblock }) {
  const { label: part } = getPartInfo(id);
  return (
    <>
      <div className="stub-e__phrase">
        <p>{title}</p>
      </div>
      <div className="stub-e__micro">
        Слайд {id} · {part} · {subblock}
      </div>
    </>
  );
}

/**
 * По id слайда определяем римскую цифру части и её имя.
 * Сквозная нумерация всего семинара:
 *   01–05 — Открытие
 *   06–32 — Часть I  (Секция 1)
 *   33–42 — Часть II (Секция 1)
 *   43–56 — Часть III (Секция 1)
 *   57–61 — Закрытие Секции 1
 *   62    — Обложка Секции 2
 *   63–69 — Часть IV (Секция 2)
 *   70–87 — Часть V  (Секция 2)
 *   88–102 — Часть VI (Секция 2)
 *   103–104 — Закрытие Секции 2
 */
function getPartInfo(id) {
  const n = Number(id);
  if (n <= 5) return { roman: '·', label: 'Открытие' };
  if (n <= 32) return { roman: 'I', label: 'Часть I' };
  if (n <= 42) return { roman: 'II', label: 'Часть II' };
  if (n <= 56) return { roman: 'III', label: 'Часть III' };
  if (n <= 61) return { roman: '·', label: 'Закрытие' };
  if (n === 62) return { roman: '·', label: 'Секция 2' };
  if (n <= 69) return { roman: 'IV', label: 'Часть IV' };
  if (n <= 87) return { roman: 'V', label: 'Часть V' };
  if (n <= 102) return { roman: 'VI', label: 'Часть VI' };
  return { roman: '·', label: 'Закрытие' };
}
