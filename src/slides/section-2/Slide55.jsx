import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '55',
  type: 'B',
  title: 'Что модель решает сразу',
  subblock: '5.1 Что решает сразу',
};

/**
 * Слайд 55 · V-02 Завязка
 * B-тезис: половину рутины с текстом модель закрывает без настройки.
 * Под тезисом — шесть глаголов мелким, через middot.
 */
export default function Slide55() {
  return (
    <Stage label="55 Что модель решает сразу">
      <Meta num="55" type="B" />
      <div className="pvb">
        <h1 className="pvb-title">
          Половину рутинной работы с&nbsp;текстом
          модель закрывает сразу — без&nbsp;настройки
        </h1>
        <div className="pvb-verbs">
          перевести · сократить · переформулировать · формализовать · объяснить · извлечь
        </div>
      </div>
      <Foot />
    </Stage>
  );
}
