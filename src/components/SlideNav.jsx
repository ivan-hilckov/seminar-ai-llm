import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allSlides } from '../slides/registry.js';
import './SlideNav.css';

/**
 * Плавающий бар внизу слайда. Показывается на /slide/:id.
 * Левая стрелка → предыдущий, правая → следующий.
 * Cmd/Ctrl+M → назад на карту секции.
 */
export default function SlideNav({ currentId }) {
  const navigate = useNavigate();
  const idx = allSlides.findIndex((s) => s.id === currentId);
  const prev = idx > 0 ? allSlides[idx - 1] : null;
  const next = idx >= 0 && idx < allSlides.length - 1 ? allSlides[idx + 1] : null;
  const total = allSlides.length;

  // Куда возвращаться по «Назад на карту».
  const numericId = Number(currentId);
  let mapHref = '/opening';
  let mapLabel = 'Карта открытия';
  if (numericId >= 62) {
    mapHref = '/section/2';
    mapLabel = 'Карта Секции 2';
  } else if (numericId >= 6) {
    mapHref = '/section/1';
    mapLabel = 'Карта Секции 1';
  }

  useEffect(() => {
    function onKey(e) {
      if (e.target.matches('input, textarea, [contenteditable]')) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (next) {
          e.preventDefault();
          navigate(`/slide/${next.id}`);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (prev) {
          e.preventDefault();
          navigate(`/slide/${prev.id}`);
        }
      } else if (e.key === 'Escape') {
        navigate(mapHref);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, prev, next, mapHref]);

  return (
    <div className="slide-nav">
      <button
        type="button"
        className="slide-nav__btn"
        onClick={() => prev && navigate(`/slide/${prev.id}`)}
        disabled={!prev}
        aria-label="Предыдущий слайд"
      >
        ‹
      </button>

      <div className="slide-nav__counter">
        <span className="slide-nav__current">{idx >= 0 ? idx + 1 : '—'}</span>
        <span className="slide-nav__sep">/</span>
        <span className="slide-nav__total">{total}</span>
      </div>

      <button
        type="button"
        className="slide-nav__btn"
        onClick={() => next && navigate(`/slide/${next.id}`)}
        disabled={!next}
        aria-label="Следующий слайд"
      >
        ›
      </button>

      <div className="slide-nav__divider" />

      <Link to={mapHref} className="slide-nav__map" title={mapLabel} aria-label={mapLabel}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="5" height="5" rx="0.5" />
          <rect x="9" y="2" width="5" height="5" rx="0.5" />
          <rect x="2" y="9" width="5" height="5" rx="0.5" />
          <rect x="9" y="9" width="5" height="5" rx="0.5" />
        </svg>
      </Link>
    </div>
  );
}
