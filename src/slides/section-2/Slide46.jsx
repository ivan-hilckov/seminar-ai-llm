import ASlide from '../section-1/ASlide.jsx';

export const meta = {
  id: '46',
  type: 'A',
  title: 'Карта инструментов',
  subblock: '4.0 Заставка',
};

/**
 * Слайд 63 · Часть IV — Карта инструментов
 * Section divider Части IV. Стандартный A: римская цифра IV, заголовок
 * справа внизу, подпись под ним, мета слева внизу.
 */
export default function Slide46() {
  return (
    <ASlide
      num="46"
      roman="IV"
      meta="Часть IV · слайды 46 — 50 · 5 слайдов"
      title="Карта инструментов"
      subtitle="Какие сервисы есть, чем они различаются, что выбрать под задачу"
    />
  );
}
