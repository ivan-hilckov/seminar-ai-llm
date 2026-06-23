import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '74',
  type: 'C',
  title: 'Perplexity — фокус и файлы',
  subblock: '5.4 Инструменты вживую',
};

const chip = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 18,
  border: '1px solid var(--rule)',
  borderRadius: 999,
  padding: '8px 18px',
  color: 'var(--mute)',
};
const chipOn = {
  ...chip,
  color: 'var(--ink)',
  background: 'var(--highlight)',
  borderColor: 'var(--ink)',
};

export default function Slide74() {
  return (
    <CFrame
      num="74"
      label="Perplexity — фокус и файлы"
      eyebrow="5.4 Инструменты · Perplexity"
      title="Режим фокуса и свои файлы"
      meaning="Можно сузить поиск до научных источников и спрашивать по своему документу"
    >
      <Screen bar="perplexity · фокус">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <span style={chipOn}>Academic</span>
          <span style={chip}>Web</span>
          <span style={chip}>Reddit</span>
          <span style={chip}>Finance</span>
        </div>
        <You>📎 статья.pdf — какие методы учёта вредителей использованы и какие выводы?</You>
        <Ai>В&nbsp;работе применён маршрутный учёт и&nbsp;закладка пробных площадей; вывод — рост повреждений в&nbsp;ослабленных насаждениях.</Ai>
      </Screen>
    </CFrame>
  );
}
