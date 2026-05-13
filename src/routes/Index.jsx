import { Link } from 'react-router-dom';
import { allSlides } from '../slides/registry.js';
import { openingSlides } from '../slides/opening/index.js';
import { slides as section1Slides } from '../slides/section-1/index.js';
import { slides as section2Slides } from '../slides/section-2/index.js';
import './Index.css';

export default function Index() {
  const ready = allSlides.filter((s) => s.done);

  return (
    <div className="home-page">
      <div className="home-wrap">
        <header className="home-hero">
          <h1>Семинар «AI и LLM для исследователей»</h1>
          <p className="lead">
            ФБУ ВНИИЛМ · 13 мая 2026 · Иван Хильков · Андрей Гиценко
          </p>
        </header>

        <section>
          <h2>Навигация</h2>
          <div className="grid">
            <Link to="/opening" className="home-card">
              <strong>Открытие — Карта слайдов</strong>
              <span>{openingSlides.length} слайдов · титул + цели</span>
            </Link>
            <Link to="/section/1" className="home-card">
              <strong>Секция 1 — Карта слайдов</strong>
              <span>{section1Slides.length} слайдов · история и устройство LLM</span>
            </Link>
            <Link to="/section/2" className="home-card">
              <strong>Секция 2 — Карта слайдов</strong>
              <span>{section2Slides.length} слайдов · методика работы с LLM</span>
            </Link>
            <Link to="/print" className="home-card">
              <strong>Все слайды подряд → PDF</strong>
              <span>{allSlides.length} слайдов · Cmd/Ctrl+P · Landscape · Margins None</span>
            </Link>
            <a
              href="/seminar-ai-llm.pdf"
              target="_blank"
              rel="noreferrer"
              className="home-card home-card--wide"
            >
              <strong>Скачать PDF · готовый файл</strong>
              <span>seminar-ai-llm.pdf</span>
            </a>
          </div>
        </section>

        <section>
          <h2>Готовые слайды</h2>
          <ul className="list">
            {ready.map((s) => (
              <li key={s.id}>
                <Link to={`/slide/${s.id}`}>
                  {s.id} · {s.title}
                </Link>
                <span className="hint">
                  {s.type} · {s.subblock}
                </span>
                {s.hasNotes && (
                  <Link to={`/notes/${s.id}`} className="notes-link">
                    notes →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
