import { CFrame, Runs, Run } from './pv-kit.jsx';

export const meta = {
  id: '70',
  type: 'C',
  title: 'Формат и критерии',
  subblock: '5.3 Промт',
};

export default function Slide70() {
  return (
    <CFrame
      num="70"
      label="Формат и критерии"
      eyebrow="5.3 Промт · часть 3"
      title="Формат и критерии"
      meaning="Объём, структура, что считать хорошим результатом"
    >
      <Runs>
        <Run cap="без рамки" dim>свободный ответ — как получится</Run>
        <Run cap="с рамкой">«150 слов, три пункта списком, без латыни» → ответ ровно по рамке</Run>
      </Runs>
    </CFrame>
  );
}
