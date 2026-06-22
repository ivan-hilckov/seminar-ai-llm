import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '55',
  type: 'C',
  title: 'Письмо · хороший промт',
  subblock: '5.2 Плохой vs хороший',
};

const PROMPT = [
  ['Роль',     'Ты пишешь от моего имени — научный сотрудник, лесопатолог.'],
  ['Задача',   'Напиши письмо коллеге из Института леса СО РАН с просьбой поделиться данными мониторинга по короеду-типографу за 2023–2024 в Красноярском крае.'],
  ['Контекст', 'Мы знакомы лично, общались на конференции в апреле. Я готов поделиться нашими данными по Подмосковью в обмен. Срок — нужно для статьи к 1 июня.'],
  ['Формат',   'Деловое, но не сухое. Без «надеюсь, у Вас всё хорошо». 5–7 строк.'],
  ['Огранич.', 'Не использовать канцеляризмы. Не извиняться за беспокойство.'],
];

const ANSWER_TEXT = `Андрей, добрый день.

После нашего разговора в апреле я взялся за статью
по короеду-типографу — сравнение очагов в Подмосковье
и Красноярском крае. Если у Вас есть данные
мониторинга за 2023–2024, был бы признателен за
возможность ими воспользоваться.

В обмен готов поделиться нашими подмосковными
данными, включая результаты ловушковых учётов.
Срок у меня ориентировочно до 1 июня.

Спасибо,
Иван`;

/**
 * Слайд 76 · Письмо коллеге · хороший промт
 * C-слайд. Слева — структурированный промт по формуле, под ним конкретный
 * деловой ответ с обменом ценностью и упоминанием контекста.
 */
export default function Slide55() {
  return (
    <Stage label="55 Письмо · хороший промт">
      <Meta num="55" type="C" />

      <div className="pv-stack tight">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ</div>
          <div className="pv-grid-prompt compact">
            {PROMPT.map(([label, text]) => (
              <div key={label} className="pv-grid-prompt-row">
                <div className="pv-grid-prompt-lbl">[{label}]</div>
                <div className="pv-grid-prompt-text">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">ОТВЕТ</div>
          <pre className="pv-pre tiny">{ANSWER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.2 Плохой и&nbsp;хороший</div>
        <h2 className="title">Письмо коллеге · хороший промт</h2>
        <p className="cap">
          Точная роль, конкретная просьба, упомянутый контекст знакомства,
          обмен ценностью, срок. Письмо, на&nbsp;которое ответят
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
