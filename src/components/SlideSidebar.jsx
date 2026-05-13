import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { allSlides } from '../slides/registry.js';
import { ThumbnailProvider } from './ThumbnailContext.jsx';
import StubSlide from '../slides/section-1/StubSlide.jsx';
import './SlideSidebar.css';

/**
 * Левый сайдбар с миниатюрами всех слайдов проекта (открытие + Секция 1).
 * Виден только на странице слайда. На печати скрывается.
 */
export default function SlideSidebar({ currentId }) {
  const listRef = useRef(null);

  // Автоскролл к текущему слайду при изменении.
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-slide-id="${currentId}"]`);
    if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [currentId]);

  return (
    <aside className="slide-sidebar">
      <div className="slide-sidebar__head">
        <Link to="/" className="slide-sidebar__home" title="На главную" aria-label="На главную">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 7 L8 2 L14 7 V13.5 H2 Z" />
            <path d="M6.25 13.5 V9.5 H9.75 V13.5" />
          </svg>
        </Link>
        <span className="slide-sidebar__count">{allSlides.length}</span>
      </div>

      <div className="slide-sidebar__list" ref={listRef}>
        {allSlides.map((s, i) => (
          <ThumbnailRow
            key={s.id}
            slide={s}
            index={i + 1}
            active={s.id === currentId}
          />
        ))}
      </div>
    </aside>
  );
}

function ThumbnailRow({ slide, index, active }) {
  const SlideComponent = slide.component;
  const cls = [
    'thumb-row',
    active ? 'is-active' : '',
    slide.done ? 'is-done' : 'is-draft',
    slide.keystone ? 'is-keystone' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link to={`/slide/${slide.id}`} className={cls} data-slide-id={slide.id}>
      <div className="thumb-row__index">{index}</div>
      <div className="thumb-row__frame">
        <div className="thumb-row__scale">
          <ThumbnailProvider value={true}>
            {SlideComponent ? (
              <SlideComponent />
            ) : (
              <StubSlide
                id={slide.id}
                type={slide.type}
                title={slide.title}
                subblock={slide.subblock}
              />
            )}
          </ThumbnailProvider>
        </div>
      </div>
    </Link>
  );
}
