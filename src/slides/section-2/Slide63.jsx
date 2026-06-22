import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './part-v.css';

export const meta = {
  id: '63',
  type: 'C',
  title: 'Код · хороший промт',
  subblock: '5.2 Плохой vs хороший',
};

const PROMPT = [
  ['Роль',     'Ты Python-разработчик, помогаешь исследователю.'],
  ['Задача',   'Напиши скрипт, который читает CSV с данными ловушковых учётов и считает среднее количество жуков на ловушку по неделям.'],
  ['Контекст', 'Колонки: date (YYYY-MM-DD), trap_id, species, count. ~4000 строк, один сезон. Виды считать отдельно. Период — с 1 мая по 31 августа.'],
  ['Формат',   'Один файл .py. На выходе — таблица «неделя · вид · среднее количество», сохранённая в xlsx.'],
  ['Огранич.', 'Без сложных зависимостей. Только pandas и openpyxl. Пропуски обрабатывать как нули. Короткие комментарии к ключевым шагам.'],
];

const ANSWER_TEXT = `import pandas as pd

df = pd.read_csv('traps.csv', parse_dates=['date'])

# Фильтр сезона
mask = (df['date'] >= '2024-05-01') & (df['date'] <= '2024-08-31')
df = df.loc[mask].copy()

# Пропуски в count → 0
df['count'] = df['count'].fillna(0)

# Неделя как период
df['week'] = df['date'].dt.to_period('W-MON')

# Среднее по неделе и виду
result = (df.groupby(['week', 'species'])['count']
            .mean().round(2).reset_index()
            .rename(columns={'count': 'avg_per_trap'}))

result.to_excel('weekly_avg.xlsx', index=False)
print(f'Готово: {len(result)} строк')`;

/**
 * Слайд 78 · Код · хороший промт
 * C-слайд. Слева — структурированный промт с описанием колонок и периода,
 * под ним рабочий Python-скрипт.
 */
export default function Slide63() {
  return (
    <Stage label="63 Код · хороший промт">
      <Meta num="63" type="C" />

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
          <div className="pv-card-label">ОТВЕТ · PYTHON</div>
          <pre className="pv-pre tiny">{ANSWER_TEXT}</pre>
        </div>
      </div>

      <div className="pv-right">
        <div className="sub">5.2 Плохой и&nbsp;хороший</div>
        <h2 className="title">Код · хороший промт</h2>
        <p className="cap">
          Колонки указаны — модель не&nbsp;угадывает. Период задан — фильтр на&nbsp;месте.
          Пропуски описаны — не&nbsp;теряются. Скрипт можно запускать
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
