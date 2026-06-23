import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '59',
  type: 'C',
  title: 'Формализовать',
  subblock: '5.1 Что решает сразу',
};

export default function Slide59() {
  return (
    <CFrame
      num="59"
      label="Формализовать"
      eyebrow="5.1 Что решает сразу"
      title="Формализовать"
      meaning="Черновые заметки → официальная формулировка"
    >
      <Screen>
        <You>Сделай из&nbsp;полевых заметок формулировку для&nbsp;акта обследования: «ель сохнет, кора отходит, под&nbsp;корой ходы, много сухих».</You>
        <Ai>При обследовании выявлено усыхание ели: отслоение коры, наличие подкоровых ходов, высокая доля сухостойных деревьев.</Ai>
      </Screen>
    </CFrame>
  );
}
