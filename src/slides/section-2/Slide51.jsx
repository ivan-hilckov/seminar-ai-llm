import ASlide from '../section-1/ASlide.jsx';

export const meta = {
  id: '51',
  type: 'A',
  title: 'Как формулировать запросы',
  subblock: '5.0 Заставка',
};

/**
 * Слайд 70 · Часть V — Как формулировать запросы
 * Section divider Части V. Стандартный A: римская цифра V, заголовок и
 * подпись справа внизу, мета слева внизу.
 */
export default function Slide51() {
  return (
    <ASlide
      num="51"
      roman="V"
      meta="Часть V · слайды 51 — 70 · 20 слайдов"
      title="Как формулировать запросы"
      subtitle="Перед началом, формула, плохой / хороший, итерация, четыре шаблона"
    />
  );
}
