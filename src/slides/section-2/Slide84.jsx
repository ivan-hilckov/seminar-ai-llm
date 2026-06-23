import { BSlide } from './pv-kit.jsx';

export const meta = {
  id: '84',
  type: 'B',
  title: 'Когда разброс полезен',
  subblock: '5.5 Галлюцинации и разброс',
};

export default function Slide84() {
  return (
    <BSlide num="84" label="Когда разброс полезен" title="Разброс — друг идей и враг фактов">
      <div className="pvb-cols">
        <div className="pvb-col">
          <div className="pvb-col-head">нужен разброс</div>
          <ul>
            <li>заголовки</li>
            <li>формулировки</li>
            <li>гипотезы</li>
            <li>варианты, штурм</li>
          </ul>
        </div>
        <div className="pvb-col">
          <div className="pvb-col-head">нужен ноль</div>
          <ul>
            <li>цифры</li>
            <li>нормативка</li>
            <li>цитаты</li>
            <li>термины</li>
          </ul>
        </div>
      </div>
      <p style={{ marginTop: 48, fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 26, color: 'var(--mute)' }}>
        на практике в&nbsp;Секции&nbsp;3 отрабатываем это на&nbsp;своих, лесных задачах
      </p>
    </BSlide>
  );
}
