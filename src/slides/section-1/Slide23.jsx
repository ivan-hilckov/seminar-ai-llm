import ESlide from './ESlide.jsx';

export default function Slide23() {
  return (
    <ESlide
      num="23"
      variant="momentum"
      phrase={
        <>
          Это не интеллект.
          <br />
          Это <span style={{ color: 'var(--accent)' }}>статистика</span>.
        </>
      }
    />
  );
}
