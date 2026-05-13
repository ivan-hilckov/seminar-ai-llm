import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '56',
  type: 'B',
  title: 'Главные тезисы',
  subblock: 'Закрытие',
};

/**
 * Слайд 56 · Главные тезисы
 * Финальный смысловой итог Секции 1: пять равноправных тезисов,
 * по одному на каждую крупную смысловую линию. Без нумерации,
 * без маркеров, без иерархии. Первый тезис (повтор keystone 32)
 * не выделяется — здесь все пять работают как равные опоры.
 * Без --accent, без иконок, без подзаголовка.
 */

const THESIS = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 500,
  fontSize: 36,
  lineHeight: 1.25,
  color: 'var(--ink)',
  letterSpacing: '-0.005em',
  margin: 0,
  textWrap: 'pretty',
  maxWidth: 1700,
};

const GAP = 56;

export default function Slide56() {
  return (
    <Stage label="56 Главные тезисы">
      <Meta num="56" type="B" />

      {/* Заголовок */}
      <h2
        style={{
          position: 'absolute',
          top: 144,
          left: 96,
          right: 96,
          margin: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 36,
          lineHeight: 1.18,
          letterSpacing: '-0.005em',
          color: 'var(--ink)',
        }}
      >
        Главные тезисы
      </h2>

      {/* Пять тезисов · оптически по центру */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 96,
          right: 96,
        }}
      >
        <p style={THESIS}>Это не&nbsp;интеллект — статистика</p>
        <p style={{ ...THESIS, marginTop: GAP }}>
          Без контекста модель не&nbsp;видит вашу задачу
        </p>
        <p style={{ ...THESIS, marginTop: GAP }}>
          Каждый ответ модель собирает заново
        </p>
        <p style={{ ...THESIS, marginTop: GAP }}>
          Проверяй факты, цифры, ссылки
        </p>
        <p style={{ ...THESIS, marginTop: GAP }}>
          AI&nbsp;берёт на&nbsp;себя задачи, не&nbsp;роль
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
