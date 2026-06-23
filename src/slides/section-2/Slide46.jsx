import ASlide from '../section-1/ASlide.jsx';

export const meta = {
  id: '46',
  type: 'A',
  title: 'Какие бывают модели',
  subblock: '4.0 Заставка',
};

/**
 * Слайд 46 · Часть IV — Какие бывают модели
 * Section divider Части IV. Стандартный A: римская цифра IV, заголовок
 * справа внизу, подпись под ним, мета слева внизу.
 */
export default function Slide46() {
  return (
    <ASlide
      num="46"
      roman="IV"
      meta="Часть IV · слайды 46 — 53 · 8 слайдов"
      title="Какие бывают модели"
      subtitle="Сегодня в работе — четыре. Чем каждая сильна и что доступно из России"
    />
  );
}
