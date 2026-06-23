import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '79',
  type: 'C',
  title: 'Claude — интерактив и скиллы',
  subblock: '5.4 Инструменты вживую',
};

const skill = {
  border: '1px solid var(--rule)',
  borderRadius: 10,
  padding: '18px 20px',
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 21,
  lineHeight: 1.5,
  color: 'var(--ink)',
};
const cap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 15,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  marginBottom: 12,
};

export default function Slide79() {
  return (
    <CFrame
      num="79"
      label="Claude — интерактив и скиллы"
      eyebrow="5.4 Инструменты · Claude"
      title="Скиллы и память проекта"
      meaning="Частую задачу описываешь один раз как скилл — дальше переиспользуешь"
    >
      <Screen>
        <div>
          <div style={cap}>скилл «карточка вредителя»</div>
          <div style={skill}>Оформляй ответ строго так:<br />Название · Порода · Признак · Меры</div>
        </div>
        <You>карточка вредителя для&nbsp;усача</You>
        <Ai>Большой еловый усач · ель · крупные ходы в&nbsp;древесине · выборка заселённых деревьев</Ai>
      </Screen>
    </CFrame>
  );
}
