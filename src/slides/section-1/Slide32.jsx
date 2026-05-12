import ESlide from './ESlide.jsx';

export default function Slide32() {
  return (
    <ESlide
      num="32"
      variant="momentum"
      phrase={
        <>
          Это не интеллект.
          <br />
          Это статистика.
        </>
      }
      partLabel="Часть I"
      accent
    />
  );
}
