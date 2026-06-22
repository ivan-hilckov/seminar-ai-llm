import ESlide from './ESlide.jsx';

export default function Slide22() {
  return (
    <ESlide
      num="22"
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
