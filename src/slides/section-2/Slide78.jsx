import { CFrame } from './pv-kit.jsx';

export const meta = {
  id: '78',
  type: 'C',
  title: 'Claude — артефакты и визуализация',
  subblock: '5.4 Инструменты вживую',
};

const DATA = [
  ['2020', '12'],
  ['2021', '18'],
  ['2022', '25'],
  ['2023', '31'],
  ['2024', '40'],
];

const paneCap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 15,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  marginBottom: 16,
};

/**
 * Слайд 78 · V-25 Claude — артефакты и визуализация (главный демо-слайд блока)
 * Сплит: слева таблица учётных данных, справа артефакт-график динамики.
 */
export default function Slide78() {
  return (
    <CFrame
      num="78"
      label="Claude — артефакты и визуализация"
      eyebrow="5.4 Инструменты · Claude"
      title="Таблица данных → график рядом с чатом"
      meaning="Результат собирается рядом с диалогом, его можно править и скачать"
    >
      <div style={{ display: 'flex', gap: 24, width: '100%', maxWidth: 1040 }}>
        {/* чат: таблица */}
        <div style={{ background: '#fff', border: '1px solid var(--rule)', borderRadius: 14, padding: '24px 28px' }}>
          <div style={paneCap}>чат · данные</div>
          <table className="pv-table">
            <thead><tr><th>год</th><th>тыс. га</th></tr></thead>
            <tbody>
              {DATA.map(([y, v]) => (
                <tr key={y}><td>{y}</td><td>{v}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* артефакт: график */}
        <div style={{ flex: 1, background: '#fff', border: '1px solid var(--rule)', borderRadius: 14, padding: '24px 28px' }}>
          <div style={paneCap}>артефакт · график</div>
          <svg width="100%" viewBox="0 0 360 230" fill="none">
            <line x1="20" y1="210" x2="350" y2="210" stroke="var(--rule)" strokeWidth="1.5" />
            <line x1="20" y1="10" x2="20" y2="210" stroke="var(--rule)" strokeWidth="1.5" />
            <polyline
              points="20,200 100,161 180,116 260,78 340,20"
              stroke="var(--ink)"
              strokeWidth="3"
              fill="none"
            />
            {[[20, 200], [100, 161], [180, 116], [260, 78], [340, 20]].map(([x, y]) => (
              <circle key={x} cx={x} cy={y} r="4.5" fill="var(--ink)" />
            ))}
          </svg>
          <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, color: 'var(--mute)', marginTop: 8 }}>
            динамика площади очагов по&nbsp;годам
          </div>
        </div>
      </div>
    </CFrame>
  );
}
