import { Link } from 'react-router-dom';
import { allSlides, chapters } from '../slides/registry.js';
import './Index.css';

export default function Index() {
  const readyChapters = chapters
    .map((ch) => ({ ...ch, ready: ch.slides.filter((s) => s.done) }))
    .filter((ch) => ch.ready.length > 0);

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
            <Link to="/map" className="home-card">
              <strong>Карта слайдов</strong>
              <span>{allSlides.length} слайдов · единый поток глав</span>
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
          {readyChapters.map((ch) => {
            const name = ch.marker === '·' ? ch.title : `${ch.label} · ${ch.title}`;
            return (
              <div key={ch.key} className="slide-group">
                <h3 className="slide-group-title">
                  {name} <span className="slide-group-count">{ch.ready.length}</span>
                </h3>
                <ul className="list">
                  {ch.ready.map((s) => (
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
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
