import { CFrame, Screen, Ai } from './pv-kit.jsx';

export const meta = {
  id: '77',
  type: 'C',
  title: 'Claude — профиль и настройки',
  subblock: '5.4 Инструменты вживую',
};

const fieldCap = {
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 15,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: 'var(--mute)',
  marginBottom: 12,
};
const field = {
  border: '1px solid var(--rule)',
  borderRadius: 10,
  padding: '18px 20px',
  fontFamily: 'IBM Plex Sans, sans-serif',
  fontSize: 22,
  lineHeight: 1.4,
  color: 'var(--ink)',
};

export default function Slide77() {
  return (
    <CFrame
      num="77"
      label="Claude — профиль и настройки"
      eyebrow="5.4 Инструменты · Claude"
      title="Claude — настройка под себя"
      meaning="Один раз задаёшь, кто ты и как отвечать — дальше ответы подстроены"
    >
      <Screen>
        <div style={fieldCap}>информация о пользователе</div>
        <div style={field}>
          Научный сотрудник ВНИИЛМ, лесопатология.
          Отвечать по&nbsp;делу, без&nbsp;воды, термины не&nbsp;упрощать.
        </div>
        <Ai>Дальше ответы уже учитывают профиль — контекст повторять не&nbsp;нужно.</Ai>
      </Screen>
    </CFrame>
  );
}
