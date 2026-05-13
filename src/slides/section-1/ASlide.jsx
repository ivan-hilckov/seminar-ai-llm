import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './a-slides.css';

/**
 * Section divider (тип A). Композиция из Concept v1:
 *  — Огромная римская цифра italic accent слева вверху
 *  — Тонкая линия сверху
 *  — Мета (mono) слева внизу
 *  — Заголовок справа внизу
 *  — Опциональная подпись (subtitle) под заголовком, мельче, серая
 */
export default function ASlide({ num, roman, meta, title, subtitle }) {
  const cls = subtitle ? 'a-slide a-slide--has-subtitle' : 'a-slide';
  return (
    <Stage label={`${num} · A`} className={cls}>
      <Meta num={num} type="A" />
      <div className="a-slide__rule" />
      <div className="a-slide__roman">{roman}</div>
      <div className="a-slide__meta">{meta}</div>
      <h1 className="a-slide__title">{title}</h1>
      {subtitle && <p className="a-slide__subtitle">{subtitle}</p>}
      <Foot />
    </Stage>
  );
}
