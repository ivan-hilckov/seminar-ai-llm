import { CFrame, Runs, Run } from './pv-kit.jsx';

export const meta = {
  id: '82',
  type: 'C',
  title: 'Соглашательство вживую',
  subblock: '5.5 Галлюцинации и разброс',
};

const yes = { fontWeight: 700, color: 'var(--ink)' };

export default function Slide82() {
  return (
    <CFrame
      num="82"
      label="Соглашательство вживую"
      eyebrow="5.5 Галлюцинации и разброс"
      title="Спроси наоборот — согласится снова"
      meaning="Свою гипотезу нельзя проверять её же подтверждением"
    >
      <Runs>
        <Run cap="чат А">
          Засуха <b>УСИЛИВАЕТ</b> вспышки короеда?<br />→ <span style={yes}>Да</span>, потому что…
        </Run>
        <Run cap="чат Б">
          Засуха <b>ОСЛАБЛЯЕТ</b> вспышки короеда?<br />→ <span style={yes}>Да</span>, потому что…
        </Run>
      </Runs>
    </CFrame>
  );
}
