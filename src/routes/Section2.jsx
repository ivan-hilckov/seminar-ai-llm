import { Link, useNavigate } from 'react-router-dom';
import { slides, partOf, parts } from '../slides/section-2/index.js';
import './Section1.css'; // переиспользуем стили карты и карточек

const TYPE_LABEL = {
  A: 'раздел',
  B: 'тезис',
  C: 'визуал',
  D: 'сравнение',
  E: 'момент',
};

const PART_ORDER = ['IV', 'V'];

export default function Section2() {
  const byPart = { IV: [], V: [] };
  for (const s of slides) byPart[partOf(s)].push(s);

  return (
    <div className="map-page">
      <Header />

      {PART_ORDER.map((key) => {
        const list = byPart[key];
        if (!list.length) return null;
        return <Part key={key} info={parts[key]} slides={list} marker={key} />;
      })}

      <Footer />
    </div>
  );
}

function Header() {
  const total = slides.length;
  return (
    <header className="map-header">
      <div className="map-header__left">
        <div className="map-eyebrow">
          Секция 2 · {total} {plural(total, 'слайд', 'слайда', 'слайдов')}
        </div>
        <h1 className="map-title">Методика работы с языковыми моделями</h1>
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

function Part({ info, slides: list, marker }) {
  const pad = (n) => String(n).padStart(2, '0');
  const cls = ['part', info.inactive ? 'part--inactive' : ''].filter(Boolean).join(' ');
  return (
    <section className={cls}>
      <div className="part-head">
        <div className="part-head__title">
          <span className="part-marker">{marker}</span>
          <span className="part-name">{info.title}</span>
        </div>
        <div className="part-head__stats">
          {pad(info.range[0])} — {pad(info.range[1])} · {list.length}{' '}
          {plural(list.length, 'слайд', 'слайда', 'слайдов')}
        </div>
      </div>
      <div className="card-grid">
        {list.map((s) => (
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
