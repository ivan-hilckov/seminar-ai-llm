import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThumbnailProvider } from '../components/ThumbnailContext.jsx';
import StubSlide from '../slides/section-1/StubSlide.jsx';
import { allSlides } from '../slides/registry.js';
import './Print.css';

/**
 * Страница для экспорта в PDF.
 * Рендерит все слайды один за другим без сайдбара, без навигации,
 * без useFit. На экране каждый слайд скейлится до ширины окна,
 * сохраняя пропорцию 16:9. При печати (Cmd/Ctrl+P → Save as PDF)
 * каждый слайд становится отдельной страницей 1920×1080 — за это
 * отвечают @page и @media print в slide.css.
 */
export default function Print() {
  useEffect(() => {
    const update = () => {
      const scale = window.innerWidth / 1920;
      document.documentElement.style.setProperty('--print-scale', String(scale));
    };
    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
      document.documentElement.style.removeProperty('--print-scale');
    };
  }, []);

  return (
    <ThumbnailProvider value={true}>
      <div className="print-page">
        <nav className="print-toolbar">
          <Link to="/">← на главную</Link>
          <span className="print-toolbar__hint">
            Все слайды · {allSlides.length} · Cmd/Ctrl+P → Save as PDF · Layout: Landscape · Margins: None
          </span>
        </nav>

        {allSlides.map((s) => {
          const Component = s.component;
          return (
            <div key={s.id} className="print-slot" data-slide-id={s.id}>
              {Component ? (
                <Component />
              ) : (
                <StubSlide
                  id={s.id}
                  type={s.type}
                  title={s.title}
                  subblock={s.subblock}
                />
              )}
            </div>
          );
        })}
      </div>
    </ThumbnailProvider>
  );
}
