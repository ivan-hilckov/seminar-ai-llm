import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './e-slides.css';

/**
 * Универсальный E-слайд. Три подтипа:
 *   variant="momentum" — фраза по центру
 *   variant="number"   — крупное число + расшифровка снизу
 *   variant="live"     — заглушка под живую демонстрацию
 *
 * Доп. флаги:
 *   accent — фраза в акцентном цвете (главный тезис, e.g. слайд 29)
 *
 * Пропсы:
 *   num         — "29" — номер на верхнем мете
 *   variant     — "momentum" | "number" | "live"
 *   phrase      — текст или ReactNode для momentum
 *   number      — текст для number
 *   caption     — пояснение под числом для number
 *   metaLabel   — мелкий мета-лейбл над числом (number variant); включает
 *                 центрированную «стек»-композицию: метка → число → caption
 *   liveLabel   — текст для live (default "Живая демонстрация")
 *   partLabel   — "Часть I" — для левого нижнего бэйджа
 *   accent      — boolean
 */
export default function ESlide({
  num,
  variant = 'momentum',
  phrase,
  number,
  caption,
  metaLabel,
  liveLabel = 'Живая демонстрация',
  partLabel,
  accent = false,
}) {
  const classes = [
    'e-slide',
    `e-${variantSlug(variant)}`,
    accent ? 'is-accent' : '',
    variant === 'number' && metaLabel ? 'e-num--stacked' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Stage label={`${num} · E-${variant}`} className={classes}>
      <Meta num={num} type="E" />

      {variant === 'momentum' && (
        <div className="e-mom__phrase">
          <p>{phrase}</p>
        </div>
      )}

      {variant === 'number' && (
        <>
          {metaLabel && <div className="e-num__meta">{metaLabel}</div>}
          <div className="e-num__number">{number}</div>
          {caption && <div className="e-num__caption">{caption}</div>}
        </>
      )}

      {variant === 'live' && <div className="e-live__label">{liveLabel}</div>}

      {partLabel && (
        <div className="e-slide__bl-meta">
          Слайд {num} · {partLabel}
        </div>
      )}

      <Foot />
    </Stage>
  );
}

function variantSlug(v) {
  if (v === 'momentum') return 'mom';
  if (v === 'number') return 'num';
  if (v === 'live') return 'live';
  return v;
}
