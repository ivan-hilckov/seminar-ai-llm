import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '36',
  type: 'B',
  title: 'Не знает фактов — знает статистику текстов',
  subblock: '3.4 Точность и галлюцинации',
};

/**
 * Слайд 49 · Не знает фактов — знает статистику текстов
 * B-шаблон без мета-метки подблока: заголовок сверху, крупный тезис
 * в оптическом центре, anchor снизу. Технический разворот keystone-
 * тезиса 32 в плоскость работы с фактами. Без --accent, без визуала,
 * без выделений отдельных слов.
 */
export default function Slide36() {
  return (
    <Stage label="36 Не знает фактов — знает статистику текстов">
      <Meta num="36" type="B" />

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
        Не знает фактов — знает статистику текстов
      </h2>

      {/* Тезис — оптический центр слайда */}
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
        Модель не&nbsp;хранит факты — она восстанавливает их&nbsp;по&nbsp;статистике текстов
      </p>

      {/* Anchor снизу — мельче и бледнее, с воздухом до нижнего края */}
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
        Пустоты в&nbsp;знании заполняются тем, что статистически похоже на&nbsp;правду
      </p>

      <Foot />
    </Stage>
  );
}
