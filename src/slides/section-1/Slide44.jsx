import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '44',
  type: 'B',
  title: 'Модель чаще соглашается, чем возражает',
  subblock: '3.3 Точность и галлюцинации',
};

/**
 * Слайд 44 · Модель чаще соглашается, чем возражает
 * Две зеркальные карточки-запроса: посылки противоположны, ответ в обоих —
 * «Да». Модель идёт за формулировкой, а не за истиной. Единственный акцент —
 * слово «Да» на плашке (var(--highlight)), как реплики на 38. Без цвета,
 * галочек, иконок. Заготовка под живое демо. Мост к Секции 2.
 */

const YES = {
  background: 'var(--highlight)',
  borderRadius: 6,
  padding: '2px 10px',
  fontWeight: 600,
};

const CARD = {
  flex: 1,
  boxSizing: 'border-box',
  border: '1.5px solid var(--rule)',
  borderRadius: 16,
  padding: '32px 36px',
  background: 'var(--bg)',
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
};
const Q = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: 26,
  lineHeight: 1.35,
  color: 'var(--mute)',
  margin: 0,
  textWrap: 'pretty',
};
const A = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 500,
  fontSize: 32,
  lineHeight: 1.4,
  color: 'var(--ink)',
  margin: 0,
  textWrap: 'pretty',
};

function Card({ q, yesTail }) {
  return (
    <div style={CARD}>
      <p style={Q}>{q}</p>
      <p style={A}>
        <span style={YES}>Да</span>
        {yesTail}
      </p>
    </div>
  );
}

export default function Slide44() {
  return (
    <Stage label="44 Модель чаще соглашается, чем возражает">
      <Meta num="44" type="B" />

      <div
        style={{
          position: 'absolute',
          top: 96,
          left: 96,
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 20,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
        }}
      >
        3.3 Точность и галлюцинации
      </div>

      <h2
        style={{
          position: 'absolute',
          top: 152,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 48,
          lineHeight: 1.18,
          color: 'var(--ink)',
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        Модель чаще соглашается, чем возражает
      </h2>

      {/* Два зеркальных запроса */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 96,
          right: 96,
          display: 'flex',
          gap: 48,
          alignItems: 'stretch',
        }}
      >
        <Card
          q="Верно ли, что засуха усиливает вспышки короеда?"
          yesTail=", засуха действительно усиливает…"
        />
        <Card
          q="Верно ли, что засуха ослабляет вспышки короеда?"
          yesTail=", при засухе вспышки могут ослабевать…"
        />
      </div>

      <p
        style={{
          position: 'absolute',
          bottom: 96,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 400,
          fontSize: 26,
          lineHeight: 1.4,
          color: 'var(--mute)',
          margin: 0,
          letterSpacing: '-0.002em',
        }}
      >
        Моделью нельзя проверять собственную гипотезу — она&nbsp;подтвердит любую сторону.
      </p>

      <Foot />
    </Stage>
  );
}
