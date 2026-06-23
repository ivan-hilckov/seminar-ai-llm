import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '35',
  type: 'D',
  title: 'Тот же вопрос — разный ответ',
  subblock: '2.4 Как рождается ответ',
};

// Различающиеся слова — лёгкая заливка (волнистое подчёркивание зарезервировано под ошибки)
function Hi({ children }) {
  return (
    <span style={{ background: 'var(--highlight)', borderRadius: 4, padding: '1px 6px' }}>{children}</span>
  );
}

const runBox = {
  flex: 1,
  border: '1.5px solid var(--line)',
  borderRadius: 16,
  padding: '28px 30px',
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: 28,
  lineHeight: 1.5,
  color: 'var(--ink)',
  background: 'var(--bg)',
};

const runLabel = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 24,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  margin: '0 0 16px 0',
};

/**
 * Слайд 33 · Тот же вопрос — разный ответ
 * D-шаблон. Один запрос → два прогона. Смысл один, формулировки разные;
 * различия — лёгкой заливкой. Недетерминизм → вопрос воспроизводимости.
 * Температуру/случайность здесь не называем (рычаг Секции 2).
 */
export default function Slide35() {
  return (
    <Stage label="35 Тот же вопрос — разный ответ">
      <Meta num="35" type="D" />

      <div style={{ position: 'absolute', top: 92, left: 96 }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 18, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mute)', marginBottom: 14 }}>
          Как рождается ответ
        </div>
        <h2 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 50, lineHeight: 1.1, color: 'var(--ink)', margin: 0, letterSpacing: '-0.01em' }}>
          Тот же вопрос — разный ответ
        </h2>
      </div>

      {/* Один и тот же вопрос */}
      <div style={{ position: 'absolute', top: 244, left: 0, width: 1920, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28 }}>
        <div
          style={{
            border: '1.5px solid var(--ink)',
            borderRadius: 16,
            padding: '22px 34px',
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: 30,
            color: 'var(--ink)',
            background: 'var(--bg)',
          }}
        >
          Чем засуха опасна для ельника?
        </div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 24, color: 'var(--mute)' }}>
          один и тот же вопрос
        </div>
      </div>

      {/* Дерево: стояк от вопроса → перекладина → две стрелки вниз в прогоны */}
      <div style={{ position: 'absolute', top: 326, left: 96, width: 1728, height: 104 }}>
        <svg viewBox="0 0 1728 104" style={{ width: 1728, height: 104, display: 'block' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <line x1="864" y1="0" x2="864" y2="40" stroke="#1A1A1A" strokeWidth="1.8" />
          <line x1="444" y1="40" x2="1284" y2="40" stroke="#1A1A1A" strokeWidth="1.8" />
          <line x1="444" y1="40" x2="444" y2="84" stroke="#1A1A1A" strokeWidth="1.8" />
          <polygon points="444,94 435,80 453,80" fill="#1A1A1A" />
          <line x1="1284" y1="40" x2="1284" y2="84" stroke="#1A1A1A" strokeWidth="1.8" />
          <polygon points="1284,94 1275,80 1293,80" fill="#1A1A1A" />
        </svg>
      </div>

      {/* Два прогона */}
      <div style={{ position: 'absolute', top: 440, left: 160, right: 160, display: 'flex', gap: 80 }}>
        <div style={{ flex: 1 }}>
          <div style={runLabel}>Прогон 1</div>
          <div style={runBox}>
            Засуха <Hi>ослабляет</Hi> ели: <Hi>падает</Hi> прирост, <Hi>растёт риск усыхания</Hi> и вспышек короеда.
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={runLabel}>Прогон 2</div>
          <div style={runBox}>
            <Hi>В засушливый период</Hi> ели <Hi>теряют влагу</Hi> — прирост <Hi>снижается</Hi>, <Hi>выше уязвимость</Hi> к&nbsp;короеду.
          </div>
        </div>
      </div>

      {/* Итог + подпись */}
      <div style={{ position: 'absolute', top: 770, left: 96, right: 96, textAlign: 'center' }}>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 26, color: 'var(--mute)', letterSpacing: '0.04em' }}>
          оба верны · формулировки разные
        </div>
        <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 26, lineHeight: 1.4, color: 'var(--ink)', margin: '26px auto 0', maxWidth: 1480, textWrap: 'balance' }}>
          Выбор из вероятных — значит ответ каждый раз немного другой. Оба верны,
          но не идентичны. Сослаться на «модель сказала» как на фиксированный факт
          нельзя — это вопрос воспроизводимости.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
