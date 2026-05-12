import { useFit } from '../hooks/useFit.js';
import { useIsThumbnail } from './ThumbnailContext.jsx';

/**
 * <Stage label="07 Заголовок" className="s01">
 *   ...содержимое слайда...
 * </Stage>
 *
 * Доп. className комбинируется с базовым `.slide`.
 *
 * Внутри ThumbnailProvider (value=true) Stage рендерит только .slide
 * без обёртки .stage и без useFit — родитель управляет размером
 * через CSS-transform.
 */
export default function Stage({ label, className = '', children }) {
  const isThumb = useIsThumbnail();
  const ref = useFit(!isThumb);
  const cls = `slide ${className}`.trim();

  if (isThumb) {
    return (
      <article ref={ref} className={cls} data-screen-label={label}>
        {children}
      </article>
    );
  }

  return (
    <div className="stage">
      <article ref={ref} className={cls} data-screen-label={label}>
        {children}
      </article>
    </div>
  );
}
