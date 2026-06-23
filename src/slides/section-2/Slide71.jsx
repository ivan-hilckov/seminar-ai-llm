import { CFrame, Runs, Run } from './pv-kit.jsx';

export const meta = {
  id: '71',
  type: 'C',
  title: 'Примеры (few-shot)',
  subblock: '5.3 Промт',
};

export default function Slide71() {
  return (
    <CFrame
      num="71"
      label="Примеры (few-shot)"
      eyebrow="5.3 Промт · часть 4"
      title="Примеры"
      meaning="Покажи образец — модель повторит структуру"
    >
      <Runs>
        <Run cap="словами" dim>«Опиши вредителя по пунктам» → форма каждый раз разная</Run>
        <Run cap="с образцом">«Вот карточка короеда [образец]. Сделай такую же для усача» → точная копия формы</Run>
      </Runs>
    </CFrame>
  );
}
