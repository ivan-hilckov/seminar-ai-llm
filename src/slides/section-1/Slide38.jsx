import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide38.css';

export const meta = {
  id: '38',
  type: 'D',
  title: 'Как выглядит галлюцинация',
  subblock: '3.4 Точность и галлюцинации',
};

/**
 * Слайд 50 · Как выглядит галлюцинация
 * D-сравнение: два кейса в симметричных «окнах ChatGPT». Слева —
 * реальный Mata v. Avianca, справа — реконструированный лесохозяйственный
 * ГОСТ. Выдуманные реквизиты помечены тонкой волнистой линией --accent —
 * единственное использование акцентного цвета вне keystone-слайда 32.
 * Без мета-метки подблока (для смыслового единства с 49).
 */

function ChatWindow({ children, ariaLabel }) {
  return (
    <div className="s50-chat" role="figure" aria-label={ariaLabel}>
      <div className="s50-chat__bar">
        <span />
        <span />
        <span />
      </div>
      <div className="s50-chat__body">{children}</div>
    </div>
  );
}

function Fake({ children }) {
  return <span className="s50-fake">{children}</span>;
}

export default function Slide38() {
  return (
    <Stage label="38 Как выглядит галлюцинация">
      <Meta num="38" type="D" />

      <div className="s50-header">
        <h2 className="title">Как выглядит галлюцинация</h2>
        <p className="sub">Два случая — один реальный, один реконструированный</p>
      </div>

      <div className="s50-cols">
        {/* Левая колонка · Mata v. Avianca */}
        <div className="col">
          <div className="ctitle">Юридический кейс · Mata v. Avianca, 2023</div>

          <ChatWindow ariaLabel="Фрагмент ответа ChatGPT с выдуманным судебным прецедентом">
            <p className="bot">По вашему запросу нашёл релевантную судебную практику:</p>
            <p className="bot">
              1.{' '}
              <Fake>Varghese v. China Southern Airlines Co., Ltd.</Fake>,{' '}
              <Fake>925 F.3d 1339 (11th Cir. 2019)</Fake> — суд постановил,
              что положения Монреальской конвенции применяются к…
            </p>
          </ChatWindow>

          <p className="ccap">
            Юрист подал в&nbsp;суд документ с&nbsp;такими ссылками. Дела не&nbsp;существовали. Штраф&nbsp;$5,000.
          </p>
        </div>

        <div className="vrule" />

        {/* Правая колонка · Лесохозяйственный ГОСТ */}
        <div className="col right-col">
          <div className="ctitle">Лесное хозяйство · вымышленный ГОСТ</div>

          <ChatWindow ariaLabel="Диалог с моделью: вопрос про ГОСТ и выдуманный ответ">
            <p className="user">
              Какой ГОСТ регулирует защиту еловых насаждений от&nbsp;короеда-типографа?
            </p>
            <p className="bot">
              Защиту еловых насаждений от&nbsp;короеда-типографа регулирует{' '}
              <Fake>ГОСТ&nbsp;Р&nbsp;12345-2021</Fake>{' '}
              <Fake>«Лесозащита. Мероприятия по&nbsp;защите хвойных пород от&nbsp;стволовых вредителей»</Fake>.
            </p>
          </ChatWindow>

          <p className="ccap">
            Такого ГОСТа не&nbsp;существует. Структура, формулировка, шифр — собраны статистически.
          </p>
        </div>
      </div>

      <div className="s50-hrule" />
      <div className="s50-summary">
        <p>В&nbsp;обоих случаях ответ выглядит безупречно — и&nbsp;не&nbsp;имеет источника</p>
      </div>

      <Foot />
    </Stage>
  );
}
