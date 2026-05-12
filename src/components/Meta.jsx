export default function Meta({ num, type }) {
  return (
    <div className="meta">
      <span className="num">{num}</span>
      <span className="type">{type}</span>
    </div>
  );
}
