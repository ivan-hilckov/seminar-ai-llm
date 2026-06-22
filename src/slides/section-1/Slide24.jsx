import ESlide from './ESlide.jsx';

export default function Slide24() {
  return (
    <ESlide
      num="24"
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
