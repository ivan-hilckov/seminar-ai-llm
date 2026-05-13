import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '34',
  type: 'B',
  title: 'Откуда модель знает, что «врач» и «доктор» близки?',
  subblock: '2.1 Векторы смыслов',
};

/**
 * Слайд 34 · Откуда модель знает, что «врач» и «доктор» — почти одно?
 * Минимальный B-шаблон: только заголовок-вопрос и центральный тезис.
 * Без мета-тега подблока, без anchor, без --accent.
 */
export default function Slide34() {
  return (
    <Stage label="34 Откуда модель знает, что «врач» и «доктор» — почти одно?">
      <Meta num="34" type="B" />

      {/* Центральный блок: заголовок-вопрос + тезис */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h2
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 400,
            fontSize: 40,
            lineHeight: 1.2,
            color: 'var(--mute)',
            margin: '0 0 56px 0',
            letterSpacing: '-0.005em',
            maxWidth: 1700,
            textWrap: 'pretty',
          }}
        >
          Откуда модель знает, что „врач“ и „доктор“ — почти одно?
        </h2>

        <p
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 500,
            fontSize: 80,
            lineHeight: 1.12,
            color: 'var(--ink)',
            margin: 0,
            letterSpacing: '-0.012em',
            maxWidth: 1700,
            textWrap: 'pretty',
          }}
        >
          Слова встречаются в одних и тех же контекстах
          <br />
          — значит близки
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
