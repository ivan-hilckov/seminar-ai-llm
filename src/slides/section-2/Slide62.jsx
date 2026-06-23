import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '62',
  type: 'C',
  title: 'Проверить',
  subblock: '5.1 Что решает сразу',
};

export default function Slide62() {
  return (
    <CFrame
      num="62"
      label="Проверить"
      eyebrow="5.1 Что решает сразу"
      title="Проверить"
      meaning="Орфография, стиль, лишний канцелярит"
    >
      <Screen>
        <You>Проверь абзац на&nbsp;орфографию и&nbsp;лишний канцелярит, предложи короче. Покажи, что поменял: [абзац]</You>
        <Ai>
          <span className="strike">в&nbsp;целях осуществления учёта</span> → «для&nbsp;учёта»<br />
          <span className="strike">было принято решение провести</span> → «провели»<br />
          <span className="mut">…ещё 3&nbsp;правки</span>
        </Ai>
      </Screen>
    </CFrame>
  );
}
