import GoalsSlide from './GoalsSlide.jsx';

export default function Slide03() {
  return (
    <GoalsSlide
      label="03 Цели · Секция 1"
      eyebrow="Цели · Секция 1"
      title="К концу первой секции"
      goals={[
        'Как появились современные языковые модели',
        'Что происходит при каждом ответе модели',
        'Что важно учитывать в работе с LLM',
      ]}
    />
  );
}
