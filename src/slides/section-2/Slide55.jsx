import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '55',
  type: 'C',
  title: 'Код · плохой промт',
  subblock: '5.2 Плохой vs хороший',
};

const ANSWER_TEXT = `import pandas as pd

# Загрузка данных
df = pd.read_csv('data.csv')

# Базовая обработка
df = df.dropna()
df = df.drop_duplicates()

# Сохранение
df.to_csv('processed.csv', index=False)

print(f'Обработано строк: {len(df)}')`;

/**
 * Слайд 77 · Код · плохой промт
 * C-слайд. Слева — короткий промт, под ним абстрактный Python-скрипт.
 * Никакой подсветки синтаксиса — это часть визуальной идиомы Части V.
 */
export default function Slide55() {
  return (
    <Stage label="55 Код · плохой промт">
      <Meta num="55" type="C" />

      <div className="pv-stack">
        <div className="pv-card">
          <div className="pv-card-label">ПРОМТ</div>
          <pre className="pv-pre lg">напиши скрипт для обработки данных</pre>
        </div>

        <div className="pv-card">
          <div className="pv-card-label">ОТВЕТ · PYTHON</div>
          <pre className="pv-pre small">{ANSWER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.2 Плохой и&nbsp;хороший</div>
        <h2 className="title">Код · плохой промт</h2>
        <p className="cap">
          Модель выбрала Python и&nbsp;CSV наугад. Не&nbsp;знает: какие данные,
          какие колонки, что делать с&nbsp;пропусками. Скрипт абстрактный — на&nbsp;вашей
          задаче работать не&nbsp;будет
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
