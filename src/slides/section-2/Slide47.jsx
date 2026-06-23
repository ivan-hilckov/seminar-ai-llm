import Stage from '../../components/Stage.jsx';
import Meta from '../../components/Meta.jsx';
import Foot from '../../components/Foot.jsx';
import './Slide47.css';

export const meta = {
  id: '47',
  type: 'C',
  title: 'Моделей десятки — у каждой свой профиль',
  subblock: '4.1 Карта моделей',
};

/**
 * Слайд 47 · Моделей десятки — у каждой свой профиль
 * C-визуал: россыпь названий, сгруппированная по назначению в 6 зон.
 * Зона «Текст и диалог» крупнее и подсвечена — наш фокус; остальные мельче.
 * Смысл — не запомнить имена, а увидеть, что инструментов много и они
 * специализированы под тип задачи.
 */

const FOCUS = {
  title: 'Текст и диалог',
  names: ['ChatGPT', 'Claude', 'Gemini', 'DeepSeek', 'Llama', 'Mistral', 'YaGPT', 'GigaChat'],
};

const ZONES = [
  { title: 'Поиск с источниками', names: ['Perplexity', 'You.com'] },
  { title: 'Код', names: ['Claude Code', 'Codex', 'Copilot', 'Cursor'] },
  { title: 'Изображения', names: ['Midjourney', 'DALL·E', 'FLUX', 'Stable Diffusion'] },
  { title: 'Видео', names: ['Sora', 'Runway', 'Kling', 'Veo'] },
  { title: 'Звук и музыка', names: ['Suno', 'Udio', 'ElevenLabs'] },
];

export default function Slide47() {
  return (
    <Stage label="47 Моделей десятки">
      <Meta num="47" type="C" />

      <div className="s47-header">
        <div className="sub">4.1 Карта моделей</div>
        <h2 className="title">Моделей десятки — у&nbsp;каждой свой профиль</h2>
      </div>

      <div className="s47-board">
        <div className="s47-focus">
          <div className="s47-zone-title">{FOCUS.title}</div>
          <div className="s47-focus-names">
            {FOCUS.names.map((n) => (
              <span key={n} className="s47-name">{n}</span>
            ))}
          </div>
        </div>

        <div className="s47-grid">
          {ZONES.map((z) => (
            <div key={z.title} className="s47-zone">
              <div className="s47-zone-title">{z.title}</div>
              <div className="s47-zone-names">
                {z.names.map((n) => (
                  <span key={n} className="s47-name s47-name--sm">{n}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="s47-foot-note">Дальше — только четыре, с&nbsp;которыми будем работать</div>

      <Foot />
    </Stage>
  );
}
