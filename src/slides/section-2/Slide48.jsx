import ASlide from '../section-1/ASlide.jsx';

export const meta = {
  id: '48',
  type: 'A',
  title: 'Как формулировать запросы',
  subblock: '5.0 Заставка',
};

/**
 * Слайд 70 · Часть V — Как формулировать запросы
 * Section divider Части V. Стандартный A: римская цифра V, заголовок и
 * подпись справа внизу, мета слева внизу.
 */
export default function Slide48() {
  return (
    <ASlide
      num="48"
      roman="V"
      meta="Часть V · слайды 70 — 87 · 18 слайдов · ≈ 50 мин"
      title="Как формулировать запросы"
      subtitle="Формула, плохой / хороший, итерация, четыре шаблона"
    />
  );
}
