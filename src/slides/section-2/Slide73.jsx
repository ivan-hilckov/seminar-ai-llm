import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '73',
  type: 'C',
  title: 'Perplexity — поиск с источниками',
  subblock: '5.4 Инструменты вживую',
};

const srcBox = {
  border: '1px solid var(--rule)',
  borderRadius: 8,
  padding: '10px 14px',
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 17,
  color: 'var(--mute)',
  display: 'flex',
  gap: 8,
};

export default function Slide73() {
  return (
    <CFrame
      num="73"
      label="Perplexity — поиск с источниками"
      eyebrow="5.4 Инструменты · Perplexity"
      title="Perplexity — ответ сразу со ссылками"
      meaning="Отвечает и тут же показывает, откуда взял"
    >
      <Screen bar="perplexity">
        <You>Площадь очагов короеда в&nbsp;России за&nbsp;2022–2024. Дай ссылки на&nbsp;источники.</You>
        <Ai>За&nbsp;2022–2024 площадь выросла с&nbsp;25 до&nbsp;40&nbsp;тыс.&nbsp;га.<sup>¹ ²</sup></Ai>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
          <div style={srcBox}><b style={{ color: 'var(--ink)' }}>¹</b> Рослесозащита</div>
          <div style={srcBox}><b style={{ color: 'var(--ink)' }}>²</b> Лесной журнал</div>
          <div style={srcBox}><b style={{ color: 'var(--ink)' }}>³</b> ВНИИЛМ</div>
        </div>
      </Screen>
    </CFrame>
  );
}
