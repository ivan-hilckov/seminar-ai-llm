import ESlide from './ESlide.jsx';

/**
 * Слайд 38 · 128 000 токенов ≈ книга среднего объёма
 * E-число с верхним мета-лейблом «Окно контекста». Центрированная
 * стек-композиция: метка → число → caption. Чёрный текст, без `--accent`
 * (он закреплён за keystone слайдом 32).
 */
export default function Slide38() {
  return (
    <ESlide
      num="38"
      variant="number"
      metaLabel="Окно контекста"
      number={'128 000'}
      caption="токенов — книга среднего объёма"
    />
  );
}
