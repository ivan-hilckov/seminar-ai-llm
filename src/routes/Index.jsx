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
              <span>{openingSlides.length} слайдов · 15 мин · титул + цели</span>
            </Link>
            <Link to="/section/1" className="home-card">
              <strong>Секция 1 — Карта слайдов</strong>
              <span>{section1Slides.length} слайдов · 90 мин · история и устройство LLM</span>
            </Link>
            <Link to="/section/2" className="home-card">
              <strong>Секция 2 — Карта слайдов</strong>
              <span>{section2Slides.length} слайдов · 90 мин · методика работы с LLM</span>
            </Link>
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

        <section>
          <h2>Контекст и материалы</h2>
          <ul className="list">
            <li>
              <a href="/stuff/md/Программа_семинара_AI_LLM_v3_1.md" target="_blank" rel="noreferrer">
                Программа семинара (v3.1)
              </a>
            </li>
            <li>
              <a href="/stuff/md/Brief_for_Claude_Design.md" target="_blank" rel="noreferrer">
                Бриф для Claude Design
              </a>
            </li>
            <li>
              <a href="/stuff/" target="_blank" rel="noreferrer">
                Папка stuff/ — все референсы
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
