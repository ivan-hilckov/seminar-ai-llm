import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '56',
  type: 'C',
  title: 'Перевести',
  subblock: '5.1 Что решает сразу',
};

export default function Slide56() {
  return (
    <CFrame
      num="56"
      label="Перевести"
      eyebrow="5.1 Что решает сразу"
      title="Перевести"
      meaning="Текст на другой язык с сохранением терминов"
    >
      <Screen>
        <You>Переведи для аннотации, сохрани термины: «Очаги короеда-типографа в&nbsp;ельниках за&nbsp;2020–2024 расширились…»</You>
        <Ai>Outbreaks of the spruce bark beetle (Ips&nbsp;typographus) in spruce stands expanded over 2020–2024…</Ai>
      </Screen>
    </CFrame>
  );
}
