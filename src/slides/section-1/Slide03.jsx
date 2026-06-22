import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '03',
  type: 'C',
  title: 'С этого всё началось',
  subblock: '1.1 Т9 на Nokia',
};

export default function Slide03() {
  return (
    <Stage label="03 Т9 на Nokia">
      <Meta num="03" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 400 820"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: 760, width: 'auto' }}
          aria-label="Кнопочный телефон с экраном Т9"
        >
          <rect x="20" y="20" width="360" height="780" rx="46" ry="46" fill="none" stroke="#1A1A1A" strokeWidth="2" />
          <line x1="170" y1="54" x2="230" y2="54" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" />
          <rect x="60" y="90" width="280" height="240" rx="4" ry="4" fill="#1A1A1A" />

          <g fontFamily="IBM Plex Mono, monospace" fill="#FAFAF7">
            <text x="74" y="114" fontSize="11" letterSpacing="0.12em" opacity="0.7">T9 · RU</text>
            <text x="326" y="114" fontSize="11" letterSpacing="0.12em" textAnchor="end" opacity="0.7">ABC</text>
            <line x1="74" y1="126" x2="326" y2="126" stroke="#FAFAF7" strokeWidth="0.5" opacity="0.25" />
          </g>

          <g fontFamily="IBM Plex Sans, sans-serif" fill="#FAFAF7">
            <text x="200" y="172" fontSize="30" fontWeight="500" textAnchor="middle" letterSpacing="0.01em">привет</text>
            <rect x="278" y="151" width="2" height="26" fill="#FAFAF7" />
          </g>

          <g fontFamily="IBM Plex Sans, sans-serif" fill="#FAFAF7">
            <line x1="74" y1="194" x2="326" y2="194" stroke="#FAFAF7" strokeWidth="0.5" opacity="0.25" />
            <text x="86" y="220" fontSize="16" opacity="0.55">прибор</text>
            <rect x="78" y="230" width="244" height="28" rx="2" fill="none" stroke="#FAFAF7" strokeWidth="1" />
            <text x="86" y="250" fontSize="16" fontWeight="500">привет</text>
            <text x="314" y="250" fontSize="11" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.1em" textAnchor="end" opacity="0.7">2/3</text>
            <text x="86" y="282" fontSize="16" opacity="0.55">пример</text>
          </g>

          <g stroke="#1A1A1A" strokeWidth="1.2" fill="none">
            <line x1="86" y1="354" x2="120" y2="354" />
            <line x1="280" y1="354" x2="314" y2="354" />
          </g>

          <rect x="160" y="368" width="80" height="34" rx="17" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
          <text x="200" y="390" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="0.18em" textAnchor="middle" fill="#1A1A1A">OK</text>

          <g fontFamily="IBM Plex Sans, sans-serif" fill="#1A1A1A" stroke="#1A1A1A">
            {[
              { x: 66, y: 430, big: '1', small: '.,?!', smallLs: '0.12em' },
              { x: 160, y: 430, big: '2', small: 'ABC' },
              { x: 254, y: 430, big: '3', small: 'DEF' },
              { x: 66, y: 510, big: '4', small: 'GHI' },
              { x: 160, y: 510, big: '5', small: 'JKL' },
              { x: 254, y: 510, big: '6', small: 'MNO' },
              { x: 66, y: 590, big: '7', small: 'PQRS', smallLs: '0.16em' },
              { x: 160, y: 590, big: '8', small: 'TUV' },
              { x: 254, y: 590, big: '9', small: 'WXYZ', smallLs: '0.16em' },
            ].map((k) => (
              <g key={`${k.x}-${k.y}`}>
                <rect x={k.x} y={k.y} width="80" height="60" rx="10" fill="none" strokeWidth="1.2" />
                <text x={k.x + 40} y={k.y + 30} fontSize="20" fontWeight="500" textAnchor="middle" stroke="none">
                  {k.big}
                </text>
                <text
                  x={k.x + 40}
                  y={k.y + 48}
                  fontSize={k.big === '1' ? 8.5 : 9}
                  fontFamily="IBM Plex Mono, monospace"
                  letterSpacing={k.smallLs || '0.18em'}
                  textAnchor="middle"
                  stroke="none"
                  fill="#6B6B68"
                >
                  {k.small}
                </text>
              </g>
            ))}

            {/* Row 4: * 0 # */}
            <rect x="66" y="670" width="80" height="60" rx="10" fill="none" strokeWidth="1.2" />
            <text x="106" y="708" fontSize="22" fontWeight="500" textAnchor="middle" stroke="none">*</text>
            <rect x="160" y="670" width="80" height="60" rx="10" fill="none" strokeWidth="1.2" />
            <text x="200" y="704" fontSize="20" fontWeight="500" textAnchor="middle" stroke="none">0</text>
            <text x="200" y="722" fontSize="9" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.18em" textAnchor="middle" stroke="none" fill="#6B6B68">+</text>
            <rect x="254" y="670" width="80" height="60" rx="10" fill="none" strokeWidth="1.2" />
            <text x="294" y="706" fontSize="20" fontWeight="500" textAnchor="middle" stroke="none">#</text>
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.1 Т9 на Nokia</div>
        <h2 className="title">С этого всё началось</h2>
        <p className="cap">Конец 1990-х — начало 2000-х. Был у каждого.</p>
      </div>

      <Foot />
    </Stage>
  );
}
