import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '04',
  type: 'C',
  title: 'Как работал Т9',
  subblock: '1.1 Т9 на Nokia',
};

export default function Slide04() {
  return (
    <Stage label="04 Как работал Т9">
      <Meta num="04" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 260"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Схема работы Т9: клавиши, словарь, экран"
        >
          {/* Block 1: КЛАВИШИ */}
          <g>
            <rect x="0.5" y="0.5" width="279" height="259" rx="8" ry="8" fill="none" stroke="#D9D7CF" strokeWidth="1" />
            <text x="24" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="0.1em" fill="#6B6B68">КЛАВИШИ</text>
            <text
              x="140"
              y="168"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="500"
              fontSize="48"
              textAnchor="middle"
              letterSpacing="0.06em"
              style={{ fontFeatureSettings: '"tnum" 1, "lnum" 1' }}
              fill="#1A1A1A"
            >
              7 4 4 3 3 6
            </text>
          </g>

          <g stroke="#1A1A1A" fill="#1A1A1A">
            <line x1="286" y1="130" x2="334" y2="130" strokeWidth="1" />
            <polygon points="334,126 334,134 340,130" stroke="none" />
          </g>

          {/* Block 2: СЛОВАРЬ */}
          <g>
            <rect x="340.5" y="0.5" width="399" height="259" rx="8" ry="8" fill="none" stroke="#D9D7CF" strokeWidth="1" />
            <text x="364" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="0.1em" fill="#6B6B68">СЛОВАРЬ</text>

            <text x="364" y="111" fontFamily="IBM Plex Sans, sans-serif" fontWeight="500" fontSize="24" fill="#1A1A1A">прибор</text>
            <text x="716" y="111" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="0.06em" textAnchor="end" fill="#6B6B68">редкое</text>

            <rect x="352" y="135" width="376" height="40" rx="4" ry="4" fill="#F0EEE8" />
            <text x="364" y="163" fontFamily="IBM Plex Sans, sans-serif" fontWeight="500" fontSize="24" fill="#1A1A1A">привет</text>
            <text x="716" y="163" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="0.06em" textAnchor="end" fill="#6B6B68">частое</text>

            <text x="364" y="215" fontFamily="IBM Plex Sans, sans-serif" fontWeight="500" fontSize="24" fill="#1A1A1A">пример</text>
            <text x="716" y="215" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="0.06em" textAnchor="end" fill="#6B6B68">редкое</text>
          </g>

          <g stroke="#1A1A1A" fill="#1A1A1A">
            <line x1="746" y1="130" x2="794" y2="130" strokeWidth="1" />
            <polygon points="794,126 794,134 800,130" stroke="none" />
          </g>

          {/* Block 3: НА ЭКРАНЕ */}
          <g>
            <rect x="800.5" y="0.5" width="279" height="259" rx="8" ry="8" fill="none" stroke="#D9D7CF" strokeWidth="1" />
            <text x="824" y="46" fontFamily="IBM Plex Mono, monospace" fontSize="14" letterSpacing="0.1em" fill="#6B6B68">НА ЭКРАНЕ</text>
            <text x="940" y="168" fontFamily="IBM Plex Sans, sans-serif" fontWeight="500" fontSize="48" textAnchor="middle" fill="#1A1A1A">привет</text>
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.1 Т9 на Nokia</div>
        <h2 className="title">Как работал Т9</h2>
        <p className="cap">Несколько слов на одну комбинацию. Самое частое выигрывает.</p>
      </div>

      <Foot />
    </Stage>
  );
}
