import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide48.css';

export const meta = {
  id: '48',
  type: 'D',
  title: 'Генерация текста — и генерация медиа',
  subblock: '4.2 Текст и медиа',
};

/**
 * Слайд 48 · Генерация текста — и генерация медиа
 * D-развилка-указатель. Левая колонка (текст) доминирует — наш фокус;
 * правая (медиа) приглушена серым и закрыта одной строкой. Цель — снять
 * путаницу «AI рисует» vs «AI пишет» и вернуться к тексту.
 */
export default function Slide48() {
  return (
    <Stage label="48 Текст и медиа">
      <Meta num="48" type="D" />

      <div className="s48-header">
        <div className="sub">4.2 Текст и медиа</div>
        <h2 className="title">Генерация текста — и&nbsp;генерация медиа</h2>
      </div>

      <div className="s48-cols">
        <div className="s48-col s48-col--focus">
          <div className="s48-label">Текст — наш фокус</div>
          <p className="s48-lead">
            Отвечает, пишет, разбирает, переводит, ищет.
            С&nbsp;этим работает исследователь.
          </p>
          <div className="s48-examples">ChatGPT · Claude · Perplexity · DeepSeek</div>
        </div>

        <div className="s48-col s48-col--media">
          <div className="s48-label">Медиа — не&nbsp;сегодня</div>
          <p className="s48-lead s48-lead--mute">
            Изображения, видео, музыка, озвучка — другой класс
            инструментов, другая логика.
          </p>
          <div className="s48-examples s48-examples--mute">Midjourney · Sora · Suno</div>
        </div>
      </div>

      <div className="s48-foot-note">Дальше говорим только про&nbsp;текст</div>

      <Foot />
    </Stage>
  );
}
