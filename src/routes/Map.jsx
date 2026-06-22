import { Link, useNavigate } from 'react-router-dom';
import { allSlides, chapters } from '../slides/registry.js';
import './Map.css';

const TYPE_LABEL = {
  A: 'раздел',
  B: 'тезис',
  C: 'визуал',
  D: 'сравнение',
  E: 'момент',
};

/**
 * Единая карта всего семинара: открытие + все главы (Части I–V) одним потоком,
 * без деления на секции.
 */
export default function Map() {
  return (
    <div className="map-page">
      <Header />

      {chapters.map((ch) => (
        <Part key={ch.key} chapter={ch} />
      ))}

      <Footer />
    </div>
  );
}

function Header() {
  const total = allSlides.length;
  return (
    <header className="map-header">
      <div className="map-header__left">
        <div className="map-eyebrow">
          Карта семинара · {total} {plural(total, 'слайд', 'слайда', 'слайдов')}
        </div>
        <h1 className="map-title">AI и LLM для исследователей</h1>
      </div>
      <div className="map-header__right">
        <div className="map-legend">
          {['A', 'B', 'C', 'D', 'E'].map((t) => (
            <span key={t} className="legend-item">
              <span className={`chip chip-${t}`}>{t}</span>
              <span className="legend-item__label">{TYPE_LABEL[t]}</span>
            </span>
          ))}
        </div>
        <div className="map-legend__note">5 типов шаблонов · цвет = тип слайда</div>
      </div>
    </header>
  );
}

function Part({ chapter }) {
  const pad = (n) => String(n).padStart(2, '0');
  const { marker, title, range, slides } = chapter;
  // Маркер (I…V / ·) уже несёт номер части — в названии оставляем только заголовок.
  const name = title;
  return (
    <section className="part">
      <div className="part-head">
        <div className="part-head__title">
          <span className="part-marker">{marker}</span>
          <span className="part-name">{name}</span>
        </div>
        <div className="part-head__stats">
          {pad(range[0])} — {pad(range[1])} · {slides.length}{' '}
          {plural(slides.length, 'слайд', 'слайда', 'слайдов')}
        </div>
      </div>
      <div className="card-grid">
        {slides.map((s) => (
          <SlideCard key={s.id} slide={s} />
        ))}
      </div>
    </section>
  );
}

function SlideCard({ slide }) {
  const navigate = useNavigate();
  const go = () => navigate(`/slide/${slide.id}`);
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go();
    }
  };

  const cls = [
    'card',
    `card-${slide.type}`,
    slide.done ? 'is-ready' : 'is-draft',
    slide.keystone ? 'is-keystone' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cls}
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={onKey}
      title={`${slide.id} · ${slide.title}`}
    >
      <div className="card-head">
        <span className="card-num">{slide.id}</span>
        <span className={`chip chip-${slide.type}`}>{slide.type}</span>
      </div>
      <div className="card-title">{slide.title}</div>
      {slide.hasNotes && (
        <Link
          to={`/notes/${slide.id}`}
          className="card-notes"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Заметки к слайду ${slide.id}`}
          title="Заметки ведущего"
        >
          ✎
        </Link>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="map-footer">
      <span>AI &amp; LLM · ФБУ ВНИИЛМ · 13 мая 2026</span>
      <Link to="/">← на главную</Link>
    </footer>
  );
}

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}
