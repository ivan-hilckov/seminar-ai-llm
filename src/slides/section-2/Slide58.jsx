import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '58',
  type: 'C',
  title: 'Переформулировать',
  subblock: '5.1 Что решает сразу',
};

export default function Slide58() {
  return (
    <CFrame
      num="58"
      label="Переформулировать"
      eyebrow="5.1 Что решает сразу"
      title="Переформулировать"
      meaning="Тот же смысл — другой стиль и регистр"
    >
      <Screen>
        <You>Перепиши строго, в&nbsp;стиле раздела отчёта: «мы посмотрели делянки, там вроде жуком всё поедено, много сухих».</You>
        <Ai>Выявлено повреждение насаждения стволовыми вредителями; отмечена значительная доля усыхающих деревьев.</Ai>
      </Screen>
    </CFrame>
  );
}
