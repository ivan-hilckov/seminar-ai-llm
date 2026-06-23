import { CFrame, Screen, You, Ai } from './pv-kit.jsx';

export const meta = {
  id: '75',
  type: 'C',
  title: 'ChatGPT — генерация изображения',
  subblock: '5.4 Инструменты вживую',
};

const placeholder = {
  border: '1.5px dashed var(--rule)',
  borderRadius: 12,
  padding: '28px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 18,
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 20,
  color: 'var(--mute)',
};

export default function Slide75() {
  return (
    <CFrame
      num="75"
      label="ChatGPT — генерация изображения"
      eyebrow="5.4 Инструменты · ChatGPT"
      title="Генерация изображения по описанию"
      meaning="Описываешь словами — получаешь изображение; так же делается видео"
      footNote="для строгих научных схем подписи проверять"
    >
      <Screen bar="chatgpt">
        <You>Нарисуй схему жизненного цикла короеда с&nbsp;подписями: яйцо → личинка → куколка → жук.</You>
        <Ai>
          <div style={placeholder}>
            <span>яйцо</span><span>→</span><span>личинка</span><span>→</span><span>куколка</span><span>→</span><span>жук</span>
          </div>
        </Ai>
      </Screen>
    </CFrame>
  );
}
