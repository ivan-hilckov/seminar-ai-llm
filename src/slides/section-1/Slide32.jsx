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
          Это <span style={{ color: 'var(--accent)' }}>статистика</span>.
        </>
      }
    />
  );
}
