import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '60',
  type: 'C',
  title: 'Объяснить',
  subblock: '5.1 Что решает сразу',
};

export default function Slide60() {
  return (
    <CFrame
      num="60"
      label="Объяснить"
      eyebrow="5.1 Что решает сразу"
      title="Объяснить"
      meaning="Понятие простыми словами, на нужном уровне"
    >
      <Screen>
        <You>Объясни простыми словами, что такое индекс листовой поверхности (LAI). Без&nbsp;формул.</You>
        <Ai>LAI — сколько листвы приходится на&nbsp;единицу площади земли. Чем плотнее полог, тем выше значение…</Ai>
      </Screen>
    </CFrame>
  );
}
