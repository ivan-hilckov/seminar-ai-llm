import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';

export const meta = {
  id: '40',
  type: 'B',
  title: 'AI берёт на себя задачи, не роль',
  subblock: '3.5 Границы применения',
};

/**
 * Слайд 53 · AI берёт на себя задачи, не роль
 * B-шаблон с расширенным центральным блоком: заголовок сверху, три
 * равноценные строки в центре. Между строкой 2 и строкой 3 — увеличенный
 * отступ, чтобы Excel-фраза читалась как отдельный смысловой абзац.
 * Без мета-метки подблока (как 49–51), без --accent, без иллюстраций.
 */

const LINE = {
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontWeight: 500,
  fontSize: 36,
  lineHeight: 1.4,
  color: 'var(--ink)',
  letterSpacing: '-0.005em',
  margin: 0,
  textWrap: 'pretty',
  maxWidth: 1500,
};

export default function Slide40() {
  return (
    <Stage label="40 AI берёт на себя задачи, не роль">
      <Meta num="40" type="B" />

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
        AI берёт на&nbsp;себя задачи, не&nbsp;роль
      </h2>

      {/* Центральный блок · три строки, оптически по центру */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 96,
          right: 96,
        }}
      >
        <p style={LINE}>
          30&nbsp;лет назад программы для&nbsp;статистики вызывали те&nbsp;же&nbsp;вопросы.
        </p>
        <p style={{ ...LINE, marginTop: 16 }}>
          Они перераспределили задачи.
        </p>
        <p style={{ ...LINE, marginTop: 48 }}>
          Приход Excel не&nbsp;упразднил бухгалтерию — изменил работу.
        </p>
      </div>

      <Foot />
    </Stage>
  );
}
