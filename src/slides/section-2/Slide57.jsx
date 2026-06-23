import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '57',
  type: 'C',
  title: 'Сократить',
  subblock: '5.1 Что решает сразу',
};

export default function Slide57() {
  return (
    <CFrame
      num="57"
      label="Сократить"
      eyebrow="5.1 Что решает сразу"
      title="Сократить"
      meaning="Длинный текст → несколько тезисов"
    >
      <Screen>
        <You>Сократи до&nbsp;5 тезисов, сохрани все цифры: [абзац методики учёта повреждений]</You>
        <Ai>
          1. Учёт на&nbsp;48 пробных площадях.<br />
          2. Повреждено 31% древостоя.<br />
          3. Средний прирост очага — 12% в&nbsp;год.<br />
          …
        </Ai>
      </Screen>
    </CFrame>
  );
}
