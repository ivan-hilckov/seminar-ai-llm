import { CFrame, Runs, Run } from './pv-kit.jsx';

export const meta = {
  id: '83',
  type: 'C',
  title: 'Температура — разброс ответа',
  subblock: '5.5 Галлюцинации и разброс',
};

export default function Slide83() {
  return (
    <CFrame
      num="83"
      label="Температура — разброс ответа"
      eyebrow="5.5 Галлюцинации и разброс"
      title="Один промт — разные ответы"
      meaning="Разбросом управляют формулировкой: «один точный ответ» сужает, «10 разных вариантов» расширяет"
      footNote="в веб-чате ползунка нет — управляют словами"
    >
      <Runs>
        <Run cap="прогон 1">5 названий буклета:<br />A · B · C · D · E</Run>
        <Run cap="прогон 2">5 названий буклета:<br />F · G · H · I · J&nbsp;&nbsp;<span style={{ color: 'var(--mute)' }}>(другие)</span></Run>
      </Runs>
    </CFrame>
  );
}
