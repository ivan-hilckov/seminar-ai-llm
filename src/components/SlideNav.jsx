import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allSlides } from '../slides/registry.js';
import './SlideNav.css';

/**
 * Плавающий бар внизу слайда. Показывается на /slide/:id.
 * Левая стрелка → предыдущий, правая → следующий.
 * N → открыть заметки (если есть), Cmd/Ctrl+M / Esc → назад на карту секции.
 */
export default function SlideNav({ currentId }) {
  const navigate = useNavigate();
  const idx = allSlides.findIndex((s) => s.id === currentId);
  const entry = idx >= 0 ? allSlides[idx] : null;
  const prev = idx > 0 ? allSlides[idx - 1] : null;
  const next = idx >= 0 && idx < allSlides.length - 1 ? allSlides[idx + 1] : null;
  const total = allSlides.length;
  const hasNotes = !!entry?.hasNotes;

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
      } else if ((e.key === 'n' || e.key === 'N' || e.key === 'т' || e.key === 'Т') && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (hasNotes) {
          e.preventDefault();
          navigate(`/notes/${currentId}`);
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, prev, next, mapHref, hasNotes, currentId]);

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

      {hasNotes && (
        <Link
          to={`/notes/${currentId}`}
          className="slide-nav__icon"
          title="Заметки к слайду (N)"
          aria-label="Заметки к слайду"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3.5 2h6L13 5.5v8a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-11A.5.5 0 0 1 3.5 2z" />
            <path d="M9.5 2v3.5H13" />
            <path d="M5.5 8.5h5" />
            <path d="M5.5 11h3.5" />
          </svg>
        </Link>
      )}

      <Link to={mapHref} className="slide-nav__icon" title={mapLabel} aria-label={mapLabel}>
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
