import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '40',
  type: 'B',
  title: 'Где данных мало — модель достраивает',
  subblock: '3.3 Точность и галлюцинации',
};

/**
 * Слайд 40 · Где данных мало — модель достраивает
 * Причина галлюцинаций перед примерами (41). Подводка-абзац + две карточки
 * с реальной лесной парой: широкий вопрос про жука → настоящий ответ; узкий
 * вопрос про номер ГОСТа → правдоподобная подделка. Карточки одинаковы по
 * виду — разница только в волнистой пометке (var(--accent)) под номером.
 * Никакого другого цвета, никаких иконок.
 */

const WAVY = {
  textDecorationLine: 'underline',
  textDecorationStyle: 'wavy',
  textDecorationColor: 'var(--accent)',
  textDecorationThickness: '1.5px',
  textUnderlineOffset: '7px',
  textDecorationSkipInk: 'none',
};

const LABEL = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 22,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  width: 210,
  textAlign: 'right',
  flex: '0 0 auto',
};
const CARD = {
  flex: '0 0 auto',
  width: 1100,
  boxSizing: 'border-box',
  border: '1.5px solid var(--rule)',
  borderRadius: 16,
  padding: '26px 36px',
  background: 'var(--bg)',
};
const Q = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: 24,
  lineHeight: 1.3,
  color: 'var(--mute)',
  margin: 0,
};
const A = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 500,
  fontSize: 32,
  lineHeight: 1.3,
  color: 'var(--ink)',
  margin: '12px 0 0 0',
};

function Row({ label, q, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
      <div style={LABEL}>{label}</div>
      <div style={CARD}>
        <p style={Q}>{q}</p>
        <p style={A}>{children}</p>
      </div>
    </div>
  );
}

export default function Slide40() {
  return (
    <Stage label="40 Где данных мало — модель достраивает">
      <Meta num="40" type="B" />

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
        Где данных мало — модель достраивает
      </h2>

      {/* Подводка */}
      <p
        style={{
          position: 'absolute',
          top: 252,
          left: 96,
          right: 96,
          maxWidth: 1440,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 400,
          fontSize: 28,
          lineHeight: 1.5,
          color: 'var(--ink)',
          margin: 0,
          textWrap: 'pretty',
        }}
      >
        Модель не&nbsp;оставляет пустые места. Где в&nbsp;обучении было много текстов —
        она воспроизводит факт. Где их&nbsp;почти не&nbsp;было — достраивает похожим на&nbsp;правду,
        тем&nbsp;же уверенным тоном.
      </p>

      {/* Две карточки: реальная лесная пара */}
      <div
        style={{
          position: 'absolute',
          top: 452,
          left: 96,
          right: 96,
          display: 'flex',
          flexDirection: 'column',
          gap: 40,
        }}
      >
        <Row label="много данных" q="Что такое короед-типограф?">
          Жук-вредитель хвойных, повреждает кору ели…
        </Row>
        <Row label="мало данных" q="Какой ГОСТ регулирует защиту ельников от короеда?">
          <span style={WAVY}>ГОСТ&nbsp;Р&nbsp;12345-2021</span> «Лесозащита…»
        </Row>
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
        Уверенный тон — не&nbsp;признак правоты.
      </p>

      <Foot />
    </Stage>
  );
}
