import ASlide from '../section-1/ASlide.jsx';

export const meta = {
  id: '63',
  type: 'A',
  title: 'Карта инструментов',
  subblock: '4.0 Заставка',
};

/**
 * Слайд 63 · Часть IV — Карта инструментов
 * Section divider Части IV. Стандартный A: римская цифра IV, заголовок
 * справа внизу, подпись под ним, мета слева внизу.
 */
export default function Slide63() {
  return (
    <ASlide
      num="63"
      roman="IV"
      meta="Часть IV · слайды 63 — 69 · 7 слайдов · ≈ 20 мин"
      title="Карта инструментов"
      subtitle="Какие сервисы есть, чем они различаются, что выбрать под задачу"
    />
  );
}
