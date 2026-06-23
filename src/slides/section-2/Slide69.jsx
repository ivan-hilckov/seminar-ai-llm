import { CFrame, Runs, Run } from './pv-kit.jsx';

export const meta = {
  id: '69',
  type: 'C',
  title: 'Задача и контекст',
  subblock: '5.3 Промт',
};

export default function Slide69() {
  return (
    <CFrame
      num="69"
      label="Задача и контекст"
      eyebrow="5.3 Промт · часть 2"
      title="Задача и контекст"
      meaning="Что сделать и на каких данных"
    >
      <Runs>
        <Run cap="без контекста" dim>«Расскажи про короеда» → энциклопедия вообще</Run>
        <Run cap="с контекстом">«Для буклета лесничим: чем опасен, как распознать» → по делу</Run>
      </Runs>
    </CFrame>
  );
}
