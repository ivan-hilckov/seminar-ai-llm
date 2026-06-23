import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '80',
  type: 'C',
  title: 'DeepSeek — режим рассуждения',
  subblock: '5.4 Инструменты вживую',
};

const think = {
  border: '1px solid var(--rule)',
  borderRadius: 10,
  padding: '16px 20px',
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 19,
  lineHeight: 1.6,
  color: 'var(--mute)',
};
const thinkCap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 15,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  marginBottom: 10,
};

export default function Slide80() {
  return (
    <CFrame
      num="80"
      label="DeepSeek — режим рассуждения"
      eyebrow="5.4 Инструменты · DeepSeek"
      title="DeepSeek — бесплатно, режим рассуждения"
      meaning="Самый доступный вход; режим Think раскрывает шаги решения"
      footNote="данные хранятся в КНР — не для конфиденциальных материалов"
    >
      <Screen bar="deepseek · think">
        <You>Сколько деревьев выбрать, если заселено 18% из&nbsp;320?</You>
        <div style={think}>
          <div style={thinkCap}>думает…</div>
          18% от&nbsp;320 = 0,18 × 320<br />
          = 57,6 → округляем вверх
        </div>
        <Ai>К&nbsp;выборке — 58 деревьев.</Ai>
      </Screen>
    </CFrame>
  );
}
