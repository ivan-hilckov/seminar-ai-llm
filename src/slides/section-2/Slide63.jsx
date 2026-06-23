import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '63',
  type: 'C',
  title: 'Черновик',
  subblock: '5.1 Что решает сразу',
};

export default function Slide63() {
  return (
    <CFrame
      num="63"
      label="Черновик"
      eyebrow="5.1 Что решает сразу"
      title="Черновик"
      meaning="Заготовка письма, записки, аннотации"
      footNote="Это черновик, а не финал — первый ответ всегда правят"
    >
      <Screen>
        <You>Черновик служебной записки: обосновать выезд на&nbsp;обследование очага короеда. 120&nbsp;слов, деловой тон.</You>
        <Ai>Руководителю лаборатории. Прошу согласовать выезд для&nbsp;обследования очага короеда-типографа в&nbsp;кв.&nbsp;14…</Ai>
      </Screen>
    </CFrame>
  );
}
