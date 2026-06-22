import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '47',
  type: 'B',
  title: 'Кому что подходит',
  subblock: '4.3 Тарифы и API',
};

/**
 * Слайд 68 · Кому что подходит
 * B-слайд с трёхстрочной матрицей правил. Каждая строка — «роль → рекомендация»
 * с серой моно-стрелкой посередине. Это не таблица сравнения, а горизонтальное
 * правило-список под главным тезисом. Внизу — anchor над тонкой линией.
 */

const RULES = [
  {
    role: 'Познакомиться, разовая задача',
    pick: 'бесплатный веб-интерфейс любого из четырёх сервисов',
  },
  {
    role: 'Регулярная исследовательская работа',
    pick: 'один платный сервис (≈ $20 / мес), думающую модель — по требованию',
  },
  {
    role: 'Автоматизация, обработка большого массива',
    pick: 'API + скрипт или приложение',
  },
];

const ROLE_STYLE = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 400,
  fontSize: 28,
  lineHeight: 1.3,
  color: 'var(--ink)',
  margin: 0,
  letterSpacing: '-0.003em',
  textWrap: 'pretty',
};

const PICK_STYLE = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 500,
  fontSize: 28,
  lineHeight: 1.3,
  color: 'var(--ink)',
  margin: 0,
  letterSpacing: '-0.003em',
  textWrap: 'pretty',
};

const ARROW_STYLE = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontWeight: 400,
  fontSize: 28,
  lineHeight: 1.3,
  color: 'var(--mute)',
  margin: 0,
  textAlign: 'center',
};

export default function Slide47() {
  return (
    <Stage label="47 Кому что подходит">
      <Meta num="47" type="B" />

      {/* Мета-тег подблока */}
      <div
        style={{
          position: 'absolute',
          top: 96,
          left: 96,
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 20,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
        }}
      >
        4.3 Тарифы
      </div>

      {/* Заголовок */}
      <h2
        style={{
          position: 'absolute',
          top: 168,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 48,
          lineHeight: 1.18,
          color: 'var(--ink)',
          margin: 0,
          letterSpacing: '-0.01em',
        }}
      >
        Кому что подходит
      </h2>

      {/* Тезис */}
      <p
        style={{
          position: 'absolute',
          top: 320,
          left: 96,
          right: 96,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontWeight: 500,
          fontSize: 60,
          lineHeight: 1.18,
          color: 'var(--ink)',
          margin: 0,
          letterSpacing: '-0.012em',
          maxWidth: 1500,
          textWrap: 'pretty',
        }}
      >
        Для&nbsp;регулярной работы исследователя — один платный сервис.
      </p>

      {/* Три строки-правила */}
      <div
        style={{
          position: 'absolute',
          top: 580,
          left: 96,
          right: 96,
          display: 'flex',
          flexDirection: 'column',
          gap: 36,
        }}
      >
        {RULES.map((r) => (
          <div
            key={r.role}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 56px 1fr',
              alignItems: 'baseline',
              columnGap: 24,
            }}
          >
            <p style={ROLE_STYLE}>{r.role}</p>
            <p style={ARROW_STYLE}>→</p>
            <p style={PICK_STYLE}>{r.pick}</p>
          </div>
        ))}
      </div>

      {/* Тонкая линия + anchor */}
      <div
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          bottom: 116,
          height: 1,
          background: 'var(--rule)',
        }}
      />
      <p
        style={{
          position: 'absolute',
          left: 96,
          right: 96,
          bottom: 60,
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontStyle: 'italic',
          fontWeight: 400,
          fontSize: 22,
          lineHeight: 1.4,
          color: 'var(--mute)',
          margin: 0,
          letterSpacing: '-0.002em',
        }}
      >
        Несколько подписок параллельно почти никогда не&nbsp;нужны. Лучше один
        сервис, в&nbsp;котором научился работать
      </p>

      <Foot />
    </Stage>
  );
}
