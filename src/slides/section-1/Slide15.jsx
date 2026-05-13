import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '15',
  type: 'C',
  title: 'Attention: каждое слово учитывает контекст',
  subblock: '1.3 От Transformer до GPT-3',
};

/**
 * Слайд 15 · Attention: каждое слово учитывает контекст
 * Схематический scatter «пространство смыслов»: одно слово «лук»
 * расположено в двух разных кластерах (овощ / оружие).
 * Под графиком — два предложения-источника с выделенным словом.
 */
export default function Slide15() {
  // Кластер «овощ» — слева внизу.
  const veg = { x: 250, y: 420 };
  const vegNeighbors = [
    { x: 130, y: 388, label: 'морковь' },
    { x: 355, y: 372, label: 'чеснок' },
    { x: 160, y: 478, label: 'суп' },
    { x: 360, y: 458, label: 'грядка' },
  ];

  // Кластер «оружие» — справа сверху.
  const wpn = { x: 820, y: 140 };
  const wpnNeighbors = [
    { x: 712, y: 102, label: 'стрела' },
    { x: 920, y: 92, label: 'тетива' },
    { x: 718, y: 188, label: 'мишень' },
    { x: 930, y: 182, label: 'стреляй' },
  ];

  return (
    <Stage label="15 Attention: каждое слово учитывает контекст">
      <Meta num="15" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 720"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Двумерное пространство смыслов: слово «лук» расположено в двух разных кластерах — рядом со словами овощей и рядом со словами оружия"
        >
          <defs>
            <marker
              id="arrow15"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#9A9893" />
            </marker>
          </defs>

          {/* ─── Полупрозрачные кластеры (halo) ─────────────────── */}
          <ellipse cx="245" cy="420" rx="170" ry="80" fill="#F0EEE8" />
          <ellipse cx="820" cy="140" rx="170" ry="80" fill="#F0EEE8" />

          {/* ─── Оси координат ──────────────────────────────────── */}
          <g stroke="#D9D7CF" strokeWidth="1" fill="none">
            <line x1="60" y1="40" x2="60" y2="540" />
            <line x1="60" y1="540" x2="1040" y2="540" />
          </g>
          {/* Маленькие наконечники осей */}
          <g fill="#D9D7CF" stroke="none">
            <polygon points="56,40 64,40 60,30" />
            <polygon points="1040,536 1040,544 1050,540" />
          </g>

          {/* ─── Кластер «овощ» ─────────────────────────────────── */}
          {vegNeighbors.map((n) => (
            <g key={`veg-${n.label}`}>
              <circle cx={n.x} cy={n.y} r="3" fill="#9A9893" />
              <text
                x={n.x + 10}
                y={n.y + 6}
                fontFamily="IBM Plex Sans, sans-serif"
                fontWeight="400"
                fontSize="20"
                fill="#6B6B68"
              >
                {n.label}
              </text>
            </g>
          ))}
          {/* Центральная точка «лук» */}
          <circle cx={veg.x} cy={veg.y} r="9" fill="#1A1A1A" />
          <text
            x={veg.x}
            y={veg.y + 36}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
            fontSize="26"
            textAnchor="middle"
            fill="#1A1A1A"
          >
            лук
          </text>

          {/* ─── Кластер «оружие» ───────────────────────────────── */}
          {wpnNeighbors.map((n) => (
            <g key={`wpn-${n.label}`}>
              <circle cx={n.x} cy={n.y} r="3" fill="#9A9893" />
              <text
                x={n.x + 10}
                y={n.y + 6}
                fontFamily="IBM Plex Sans, sans-serif"
                fontWeight="400"
                fontSize="20"
                fill="#6B6B68"
              >
                {n.label}
              </text>
            </g>
          ))}
          {/* Центральная точка «лук» */}
          <circle cx={wpn.x} cy={wpn.y} r="9" fill="#1A1A1A" />
          <text
            x={wpn.x}
            y={wpn.y + 36}
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
            fontSize="26"
            textAnchor="middle"
            fill="#1A1A1A"
          >
            лук
          </text>

          {/* ─── Пунктир между двумя «лук» со стрелкой ──────────── */}
          <line
            x1={veg.x + 8}
            y1={veg.y - 6}
            x2={wpn.x - 8}
            y2={wpn.y + 6}
            stroke="#9A9893"
            strokeWidth="1.2"
            strokeDasharray="5 6"
            markerEnd="url(#arrow15)"
          />

          {/* ─── Два предложения-источника под графиком ─────────── */}
          {/* Кегль 28px Plex Sans. «лук» — bold + подчёркивание. */}
          <text
            x="60"
            y="608"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="28"
            fill="#1A1A1A"
          >
            положи&nbsp;
            <tspan fontWeight="700" textDecoration="underline">
              лук
            </tspan>
            &nbsp;в&nbsp;суп
          </text>

          <text
            x="60"
            y="664"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="400"
            fontSize="28"
            fill="#1A1A1A"
          >
            натяни&nbsp;
            <tspan fontWeight="700" textDecoration="underline">
              лук
            </tspan>
            &nbsp;и&nbsp;стреляй
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.3 От Transformer до GPT-3</div>
        <h2 className="title" style={{ fontSize: 56, lineHeight: 1.1 }}>
          Attention:
          <br />
          каждое слово учитывает контекст
        </h2>
        <p className="cap" style={{ fontSize: 32, lineHeight: 1.25, marginTop: 24 }}>
          Одно и&nbsp;то&nbsp;же слово — разные точки в&nbsp;пространстве смыслов
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
