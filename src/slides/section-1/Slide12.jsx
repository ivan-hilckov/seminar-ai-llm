import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '12',
  type: 'C',
  title: 'Автодополнение в поиске',
  subblock: '1.2 Автозаполнение',
};

/**
 * Слайд 12 · Автодополнение в поиске
 * Реконструкция поисковой строки с введённым «лесные пожар»
 * и выпадающим списком из 4 подсказок: чёрная типовая часть
 * + серый «достроенный хвост».
 */
export default function Slide12() {
  const suggestions = [
    { tail: 'ы в России 2025' },
    { tail: 'ы статистика' },
    { tail: 'ы причины' },
    { tail: 'ы Якутия' },
  ];
  const TYPED = 'лесные пожар';

  return (
    <Stage label="12 Автодополнение в поиске">
      <Meta num="12" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1080 520"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1080, height: 'auto' }}
          aria-label="Поисковая строка с введённым «лесные пожар» и выпадающими подсказками с серыми достроенными хвостами"
        >
          {/* ── Поисковая строка ───────────────────────────────── */}
          <g>
            <rect
              x="20"
              y="40"
              width="1040"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="#D9D7CF"
              strokeWidth="1"
            />

            {/* Нейтральный текстовый «логотип» Яндекса — без цвета и фирменного шрифта */}
            <text
              x="44"
              y="90"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="600"
              fontSize="28"
              fill="#1A1A1A"
            >
              Яндекс
            </text>

            {/* Разделитель между «логотипом» и инпутом */}
            <line x1="172" y1="58" x2="172" y2="102" stroke="#ECEAE3" strokeWidth="1" />

            {/* Введённый пользователем текст */}
            <text
              x="200"
              y="90"
              fontFamily="IBM Plex Sans, sans-serif"
              fontWeight="400"
              fontSize="28"
              fill="#1A1A1A"
            >
              лесные пожар
            </text>

            {/* Курсор после оборванного слова */}
            <rect x="376" y="62" width="2" height="36" fill="#1A1A1A" />

            {/* Круглая кнопка поиска с лупой */}
            <g transform="translate(1020, 80)">
              <circle cx="0" cy="0" r="26" fill="none" stroke="#D9D7CF" strokeWidth="1" />
              <circle cx="-3" cy="-3" r="8" fill="none" stroke="#6B6B68" strokeWidth="1.6" />
              <line
                x1="3"
                y1="3"
                x2="10"
                y2="10"
                stroke="#6B6B68"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* ── Выпадающий список подсказок ─────────────────────── */}
          <g>
            <rect
              x="20"
              y="148"
              width="1040"
              height="300"
              rx="24"
              ry="24"
              fill="none"
              stroke="#D9D7CF"
              strokeWidth="1"
            />

            {suggestions.map((s, i) => {
              const rowCenter = 185 + i * 74;
              const isLast = i === suggestions.length - 1;
              return (
                <g key={i}>
                  {/* Иконка лупы слева */}
                  <g transform={`translate(76, ${rowCenter})`}>
                    <circle cx="-3" cy="-3" r="7" fill="none" stroke="#9A9893" strokeWidth="1.4" />
                    <line
                      x1="2"
                      y1="2"
                      x2="8"
                      y2="8"
                      stroke="#9A9893"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </g>

                  {/* Текст подсказки: типовая часть чёрным, хвост серым */}
                  <text
                    x="120"
                    y={rowCenter + 9}
                    fontFamily="IBM Plex Sans, sans-serif"
                    fontWeight="400"
                    fontSize="26"
                    fill="#1A1A1A"
                  >
                    {TYPED}
                    <tspan fill="#6B6B68">{s.tail}</tspan>
                  </text>

                  {/* Разделитель между строками (кроме последней) */}
                  {!isLast && (
                    <line
                      x1="64"
                      y1={rowCenter + 37}
                      x2="1016"
                      y2={rowCenter + 37}
                      stroke="#ECEAE3"
                      strokeWidth="1"
                    />
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div className="right">
        <div className="sub">1.2 Автозаполнение</div>
        <h2 className="title" style={{ fontSize: 56, lineHeight: 1.1 }}>
          Автодополнение в&nbsp;поиске
        </h2>
        <p className="cap" style={{ fontSize: 32, lineHeight: 1.25, marginTop: 24 }}>
          Машина достраивает не&nbsp;только письма — и&nbsp;поисковые запросы
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
