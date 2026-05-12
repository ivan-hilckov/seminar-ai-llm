import GoalsSlide from './GoalsSlide.jsx';

export default function Slide04() {
  return (
    <GoalsSlide
      label="04 Цели · Секция 2"
      eyebrow="Цели · Секция 2"
      title="К концу второй секции"
      goals={[
        'Какие инструменты сейчас доступны',
        'Как формулировать запросы и получать результат',
        'Сильные стороны и ограничения модели',
      ]}
    />
  );
}
