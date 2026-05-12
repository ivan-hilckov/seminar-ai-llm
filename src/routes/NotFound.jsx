import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="prose-page">
      <div className="prose-wrap">
        <nav className="prose-nav">
          <Link to="/">← на главную</Link>
        </nav>
        <div className="prose">
          <h1>Страница не найдена</h1>
          <p>Проверьте URL или вернитесь на главную.</p>
        </div>
      </div>
    </div>
  );
}
