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
  const roman = id <= '29' ? 'I' : id <= '39' ? 'II' : id <= '53' ? 'III' : '·';
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
  const part =
    id <= '29' ? 'Часть I' : id <= '39' ? 'Часть II' : id <= '53' ? 'Часть III' : 'Закрытие';
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
