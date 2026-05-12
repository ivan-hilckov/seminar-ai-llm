import { Link, useParams } from 'react-router-dom';
import { findSlide } from '../slides/registry.js';
import StubSlide from '../slides/section-1/StubSlide.jsx';
import SlideNav from '../components/SlideNav.jsx';
import SlideSidebar from '../components/SlideSidebar.jsx';

export default function Slide() {
  const { id } = useParams();
  const entry = findSlide(id);

  if (!entry) {
    return (
      <div className="prose-page">
        <div className="prose-wrap">
          <nav className="prose-nav">
            <Link to="/">← на главную</Link>
          </nav>
          <div className="prose">
            <h1>Слайд {id} не существует</h1>
            <p>Проверьте номер. Доступные id: 01–05 (открытие), 06–61 (Секция 1), 62–104 (Секция 2).</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SlideSidebar currentId={id} />
      {entry.component ? (
        <entry.component />
      ) : (
        <StubSlide
          id={entry.id}
          type={entry.type}
          title={entry.title}
          subblock={entry.subblock}
        />
      )}
      <SlideNav currentId={id} />
    </>
  );
}
