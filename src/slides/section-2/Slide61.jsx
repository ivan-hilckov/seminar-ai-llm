import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '61',
  type: 'C',
  title: 'Извлечь',
  subblock: '5.1 Что решает сразу',
};

export default function Slide61() {
  return (
    <CFrame
      num="61"
      label="Извлечь"
      eyebrow="5.1 Что решает сразу"
      title="Извлечь"
      meaning="Вытащить из текста список или таблицу"
    >
      <Screen>
        <You>Вытащи в&nbsp;таблицу: вид · порода · признак. Только то, что есть в&nbsp;тексте: [сплошной абзац]</You>
        <Ai>
          <table className="pv-table">
            <thead>
              <tr><th>вид</th><th>порода</th><th>признак</th></tr>
            </thead>
            <tbody>
              <tr><td>короед-типограф</td><td>ель</td><td>ходы под корой</td></tr>
              <tr><td>еловый усач</td><td>ель</td><td>буровая мука</td></tr>
            </tbody>
          </table>
        </Ai>
      </Screen>
    </CFrame>
  );
}
