import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '65',
  type: 'D',
  title: 'Word · Excel · PowerPoint',
  subblock: '5.2 Результат в файл',
};

const ITEMS = [
  { name: 'Word', text: 'готовый текст → документ', icon: 'doc' },
  { name: 'Excel', text: 'таблица из чата → ячейки', icon: 'grid' },
  { name: 'PowerPoint', text: 'структура → слайды', icon: 'slide' },
];

function Icon({ kind }) {
  const stroke = 'var(--ink)';
  if (kind === 'grid') {
    return (
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <rect x="14" y="20" width="68" height="56" rx="4" stroke={stroke} strokeWidth="2.5" />
        <line x1="14" y1="38" x2="82" y2="38" stroke={stroke} strokeWidth="2" />
        <line x1="14" y1="57" x2="82" y2="57" stroke={stroke} strokeWidth="2" />
        <line x1="37" y1="20" x2="37" y2="76" stroke={stroke} strokeWidth="2" />
        <line x1="59" y1="20" x2="59" y2="76" stroke={stroke} strokeWidth="2" />
      </svg>
    );
  }
  if (kind === 'slide') {
    return (
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
        <rect x="14" y="22" width="68" height="48" rx="4" stroke={stroke} strokeWidth="2.5" />
        <line x1="26" y1="36" x2="58" y2="36" stroke={stroke} strokeWidth="2" />
        <line x1="26" y1="48" x2="70" y2="48" stroke={stroke} strokeWidth="2" />
        <line x1="40" y1="70" x2="40" y2="78" stroke={stroke} strokeWidth="2" />
        <line x1="56" y1="70" x2="56" y2="78" stroke={stroke} strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
      <path d="M28 14h28l16 16v52a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4Z" stroke={stroke} strokeWidth="2.5" />
      <path d="M56 14v16h16" stroke={stroke} strokeWidth="2.5" />
      <line x1="34" y1="46" x2="62" y2="46" stroke={stroke} strokeWidth="2" />
      <line x1="34" y1="58" x2="62" y2="58" stroke={stroke} strokeWidth="2" />
      <line x1="34" y1="70" x2="52" y2="70" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export default function Slide65() {
  return (
    <Stage label="65 Word · Excel · PowerPoint">
      <Meta num="65" type="D" />

      <div className="pvd-header">
        <div className="sub">5.2 Результат в файл</div>
        <h2 className="title">Результат — сразу в&nbsp;рабочий файл</h2>
      </div>

      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: 320,
          display: 'flex',
          justifyContent: 'center',
          gap: 80,
        }}
      >
        {ITEMS.map((it) => (
          <div
            key={it.name}
            style={{
              width: 440,
              border: '1px solid var(--rule)',
              borderRadius: 16,
              padding: '48px 36px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 28,
              textAlign: 'center',
            }}
          >
            <Icon kind={it.icon} />
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 36, color: 'var(--ink)' }}>
              {it.name}
            </div>
            <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 26, color: 'var(--text-secondary, #6B6B68)' }}>
              {it.text}
            </div>
          </div>
        ))}
      </div>

      <div className="pvd-footnote">
        Таблицу из&nbsp;чата можно вставить прямо в&nbsp;Excel; артефакт — скачать файлом
      </div>

      <Foot />
    </Stage>
  );
}
