import ESlide from './ESlide.jsx';

/**
 * Слайд 42 · Ваши вопросы её не меняют
 * Чистый E-momentum: одна фраза в центре, чёрный --ink, без мета-лейбла,
 * без caption, без anchor. Без --accent (он закреплён за keystone слайдом 32).
 * Третий итоговый тезис Части II — закрывает её целиком.
 */
export default function Slide42() {
  return (
    <ESlide
      num="42"
      variant="momentum"
      phrase="Ваши вопросы её не меняют"
    />
  );
}
