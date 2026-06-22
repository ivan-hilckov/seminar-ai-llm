import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '28',
  type: 'C',
  title: 'Не два числа, а сотни измерений',
  subblock: '2.1 Векторы смыслов',
};

const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const RULE = '#D9D7CF';

// Векторы намеренно правдоподобны: «банан» близок к «яблоку», «машина» — нет.
const vectors = [
  { word: 'яблоко', nums: ['0.12', '−0.44', '0.87', '0.05', '−0.21', '0.63'] },
  { word: 'банан', nums: ['0.09', '−0.40', '0.81', '0.11', '−0.18', '0.55'] },
  { word: 'машина', nums: ['−0.52', '0.30', '−0.07', '0.66', '0.40', '−0.12'] },
];

const LABEL_X = 70;
const CELL_X = 300;
const CELL_W = 104;
const CELL_H = 64;
const TOP = 150;
const RGAP = 170;

/**
 * Слайд 27 · Не два числа, а сотни измерений
 * C-шаблон: каждое слово — длинная строка чисел, обрывающаяся «…».
 * Снимает упрощение слайдов 25–26 (две оси) и вводит масштаб реальных
 * эмбеддингов. «банан» по числам близок к «яблоку», «машина» — далеко.
 */
export default function Slide28() {
  return (
    <Stage label="28 Не два числа, а сотни измерений">
      <Meta num="28" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 800"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 800, display: 'block' }}
          aria-label="Три слова, у каждого длинный список чисел, обрывающийся многоточием — у реальной модели сотни таких чисел"
        >
          {vectors.map((v, row) => {
            const y = TOP + RGAP * row;
            return (
              <g key={v.word}>
                <text
                  x={LABEL_X}
                  y={y + CELL_H / 2 + 10}
                  fontFamily="IBM Plex Sans, sans-serif"
                  fontSize="30"
                  fill={INK}
                >
                  {v.word}
                </text>
                {v.nums.map((n, i) => (
                  <g key={i}>
                    <rect
                      x={CELL_X + i * CELL_W}
                      y={y}
                      width={CELL_W - 8}
                      height={CELL_H}
                      fill="none"
                      stroke={RULE}
                      strokeWidth="1.2"
                    />
                    <text
                      x={CELL_X + i * CELL_W + (CELL_W - 8) / 2}
                      y={y + CELL_H / 2 + 8}
                      textAnchor="middle"
                      fontFamily="IBM Plex Mono, monospace"
                      fontSize="22"
                      fill={INK}
                    >
                      {n}
                    </text>
                  </g>
                ))}
                <text
                  x={CELL_X + vectors[0].nums.length * CELL_W + 6}
                  y={y + CELL_H / 2 + 12}
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="30"
                  fill={MUTE}
                >
                  …
                </text>
              </g>
            );
          })}

          {/* Аннотация масштаба */}
          <text
            x={LABEL_X}
            y={TOP + RGAP * vectors.length + 40}
            fontFamily="IBM Plex Mono, monospace"
            fontSize="20"
            fill={MUTE}
            letterSpacing="0.03em"
          >
            у настоящей модели — 300–1500 таких чисел на каждое слово
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Векторы смыслов</div>
        <h2 className="title">Не два числа, а сотни измерений</h2>
        <p className="cap">
          Две оси — только чтобы поместиться на экране. У настоящей модели для
          каждого слова сотни-тысячи чисел.
          <br />
          <br />
          Каждое ловит свой оттенок смысла. Назвать их по отдельности человек
          обычно не может — и не нужно.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
