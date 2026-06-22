import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '32',
  type: 'B',
  title: 'Модель обучают один раз',
  subblock: '2.3 Обучение и заморозка',
};

/**
 * Слайд 41 · Модель обучают один раз
 * B-шаблон с anchor: заголовок сверху, крупный тезис в центре,
 * меньшая поясняющая фраза снизу. Без мета-тега подблока, без --accent
 * (он закреплён за keystone слайдом 32). Техническое обоснование
 * для закрывающего тезиса 42 «Ваши вопросы её не меняют».
 */
export default function Slide32() {
  return (
    <Stage label="32 Модель обучают один раз">
      <Meta num="32" type="B" />

      {/* Заголовок сверху */}
      <h2
        style={{
          position: 'absolute',
          top: 240,
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
        Модель обучают один раз
      </h2>

      {/* Тезис — визуальный центр */}
      <p
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 96,
          right: 96,
          margin: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 56,
          lineHeight: 1.18,
          letterSpacing: '-0.008em',
          color: 'var(--ink)',
          textWrap: 'pretty',
          maxWidth: 1600,
        }}
      >
        Обучают провайдеры — месяцы и&nbsp;тысячи GPU.
        <br />
        Потом веса фиксируются
      </p>

      {/* Anchor снизу — отдельно от тезиса, мельче и бледнее */}
      <p
        style={{
          position: 'absolute',
          bottom: 220,
          left: 96,
          right: 96,
          margin: 0,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 400,
          fontSize: 28,
          lineHeight: 1.4,
          color: 'var(--mute)',
          letterSpacing: '-0.002em',
        }}
      >
        Обновление модели = новый релиз
      </p>

      <Foot />
    </Stage>
  );
}
