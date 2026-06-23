import { CFrame, Screen } from './pv-kit.jsx';

export const meta = {
  id: '76',
  type: 'C',
  title: 'ChatGPT — проекты и память',
  subblock: '5.4 Инструменты вживую',
};

const paneCap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 15,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  marginBottom: 14,
};
const item = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 22, color: 'var(--mute)', padding: '6px 0' };
const itemOn = { ...item, color: 'var(--ink)', fontWeight: 600 };
const note = { fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 21, color: 'var(--ink)', lineHeight: 1.4, padding: '5px 0' };

export default function Slide76() {
  return (
    <CFrame
      num="76"
      label="ChatGPT — проекты и память"
      eyebrow="5.4 Инструменты · ChatGPT"
      title="Проекты, память, свои инструкции"
      meaning="Рабочие темы — в проекты; заметки о вас подмешиваются в ответы, их видно и можно стереть"
    >
      <Screen>
        <div style={{ display: 'flex', gap: 36 }}>
          <div style={{ width: 300, borderRight: '1px solid var(--rule)', paddingRight: 32 }}>
            <div style={paneCap}>проекты</div>
            <div style={itemOn}>● Лесопатология</div>
            <div style={item}>Аннотации статей</div>
            <div style={item}>Отчёты по&nbsp;площадям</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={paneCap}>что модель помнит</div>
            <div style={note}>— научный сотрудник ВНИИЛМ</div>
            <div style={note}>— тема: короед-типограф, ельники</div>
            <div style={note}>— отвечать по&nbsp;делу, без&nbsp;воды</div>
          </div>
        </div>
      </Screen>
    </CFrame>
  );
}
