import { Link, useParams } from 'react-router-dom';
import MarkdownView from '../components/MarkdownView.jsx';
import { sectionOf } from '../slides/registry.js';

/**
 * Все .md-заметки (открытие + Секция 1) импортируются как сырой текст
 * на этапе сборки — никаких рантайм-fetch.
 */
const noteModules = import.meta.glob(
  ['../notes/section-1/*.md', '../notes/opening/*.md'],
  { query: '?raw', import: 'default', eager: true },
);

function findNote(id) {
  const key = Object.keys(noteModules).find((k) => k.endsWith(`/slide-${id}.md`));
  return key ? noteModules[key] : null;
}

export default function Notes() {
  const { id } = useParams();
  const source = findNote(id);
  const section = sectionOf(id);
  const backTo = section === 'opening' ? '/opening' : '/section/1';
  const backLabel = section === 'opening' ? 'Открытие' : 'Секция 1';

  return (
    <div className="prose-page">
      <div className="prose-wrap">
        <nav className="prose-nav">
          <Link to={backTo}>← {backLabel}</Link>
          <Link to={`/slide/${id}`} className="prose-nav__back-to-slide">
            к&nbsp;слайду {id} →
          </Link>
        </nav>

        {source ? (
          <MarkdownView source={source} />
        ) : (
          <div className="prose">
            <h1>Notes для слайда {id} не найдены</h1>
            <p>
              Файл <code>src/notes/.../slide-{id}.md</code> ещё не создан.
              Скопируйте <code>_template.md</code> рядом и переименуйте.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
