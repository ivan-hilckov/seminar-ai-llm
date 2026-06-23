import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '33',
  type: 'C',
  title: 'Контекстное окно',
  subblock: '2.3 Контекст и память',
};

const HI = '#F0EEE8';
const PALE = '#F4F3EF';
const INK = '#1A1A1A';
const MUTE = '#6B6B68';
const MUTE_2 = '#9A9893';
const RULE = '#D9D7CF';
const RULE_SOFT = '#ECEAE3';

const B_X = 140;
const B_W = 820;
const BH = 64;

function Bubble({ y, label, role, faded }) {
  const user = role === 'user';
  const fill = user ? (faded ? PALE : HI) : 'none';
  const stroke = user ? RULE_SOFT : faded ? RULE_SOFT : RULE;
  const tag = user ? 'вы' : 'модель';
  return (
    <g>
      <rect x={B_X} y={y} width={B_W} height={BH} rx={16} fill={fill} stroke={stroke} strokeWidth={1.2} />
      <text x={B_X + 26} y={y + BH / 2 + 9} fontFamily="IBM Plex Sans, sans-serif" fontSize="27" fill={faded ? MUTE_2 : INK}>
        {label}
      </text>
      <text
        x={B_X + B_W - 26}
        y={y + BH / 2 + 8}
        textAnchor="end"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="20"
        letterSpacing="0.06em"
        fill={MUTE_2}
      >
        {tag}
      </text>
    </g>
  );
}

const FRAME_X = 110;
const FRAME_W = 880;
const FRAME_TOP = 248;
const FRAME_H = 324;

/**
 * Слайд 31 · Контекстное окно
 * C-шаблон. Тот же диалог, что на слайде 30, одной лентой (читается снизу
 * вверх). Рамка = контекстное окно: внутри свежие реплики, а две самые
 * старые — бледные над рамкой: выпали, модель их не видит.
 */
export default function Slide33() {
  return (
    <Stage label="33 Контекстное окно">
      <Meta num="33" type="C" />

      <div className="visual">
        <svg
          viewBox="0 0 1094 640"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 1094, height: 640, display: 'block' }}
          aria-label="Лента диалога: две старые реплики выше рамки окна, бледные — выпали. В рамке — свежие реплики."
        >
          {/* Выпавшее из окна — выше рамки, бледное */}
          <text x={B_X} y={32} fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={MUTE}>
            ↑ выпало из окна — модель это уже не видит
          </text>
          <Bubble y={52} label="Составь план эксперимента" role="user" faded />
          <Bubble y={128} label="Конечно. Какая тема?" role="assistant" faded />

          {/* Легенда — прижата к верхней границе рамки */}
          <text x={FRAME_X} y={FRAME_TOP - 16} fontFamily="IBM Plex Mono, monospace" fontSize="25" fill={INK} letterSpacing="0.02em">
            Контекстное окно ≈ 128 000 токенов
          </text>

          {/* Рамка-окно */}
          <rect x={FRAME_X} y={FRAME_TOP} width={FRAME_W} height={FRAME_H} rx={10} fill="none" stroke={INK} strokeWidth={2.6} />

          {/* Влезло в окно — свежие реплики */}
          <Bubble y={266} label="Влияние засухи на хвойные" role="user" />
          <Bubble y={342} label="Уточним методику измерения?" role="assistant" />
          <Bubble y={418} label="Какие методы предложишь?" role="user" />
          <Bubble y={494} label="Предлагаю три метода…" role="assistant" />

          <text x={FRAME_X + FRAME_W / 2} y={FRAME_TOP + FRAME_H + 42} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="24" fill={MUTE}>
            ↑ беседа читается снизу вверх
          </text>
        </svg>
      </div>

      <div className="right">
        <div className="sub">Контекст и память</div>
        <h2 className="title">Контекстное окно</h2>
        <p className="cap">
          Контекстное окно — сколько текста модель читает за один раз.
          <br />
          <br />
          Большое, но конечное: ~128 000 токенов ≈ 200 страниц.
          <br />
          <br />
          Что не поместилось — выпадает: старое начало беседы модель уже не
          видит.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
