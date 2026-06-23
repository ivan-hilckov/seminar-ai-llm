import { CFrame, Runs, Run } from './pv-kit.jsx';

export const meta = {
  id: '68',
  type: 'C',
  title: 'Роль',
  subblock: '5.3 Промт',
};

export default function Slide68() {
  return (
    <CFrame
      num="68"
      label="Роль"
      eyebrow="5.3 Промт · часть 1"
      title="Роль"
      meaning="Кем модель должна быть — задаёт словарь и фокус"
    >
      <Runs>
        <Run cap="без роли" dim>«Что делать при сухостое в&nbsp;ельнике?» → общий ответ</Run>
        <Run cap="с ролью «лесопатолог»">«Ты — лесопатолог. Что делать…» → профильный ответ</Run>
      </Runs>
    </CFrame>
  );
}
