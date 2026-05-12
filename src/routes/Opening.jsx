import { Link, useNavigate } from 'react-router-dom';
import { openingSlides } from '../slides/opening/index.js';
import './Section1.css'; // переиспользуем стили карты и карточек

const TYPE_LABEL = {
  A: 'раздел',
  B: 'тезис',
  C: 'визуал',
  D: 'сравнение',
  E: 'момент',
};

export default function Opening() {
  return (
    <div className="map-page">
      <header className="map-header">
        <div className="map-header__left">
          <div className="map-eyebrow">Открытие · 5 слайдов · 15 минут</div>
          <h1 className="map-title">Знакомство и карта дня</h1>
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

      <section className="part">
        <div className="part-head">
          <div className="part-head__title">
            <span className="part-marker">·</span>
            <span className="part-name">Перед Секцией 1</span>
          </div>
          <div className="part-head__stats">01 — 05 · 5 слайдов · ≈ 15 мин</div>
        </div>
        <div className="card-grid">
          {openingSlides.map((s) => (
            <SlideCard key={s.id} slide={s} />
          ))}
        </div>
      </section>

      <footer className="map-footer">
        <span>AI &amp; LLM · ФБУ ВНИИЛМ · 13 мая 2026</span>
        <Link to="/">← на главную</Link>
      </footer>
    </div>
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
  ].join(' ');

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
