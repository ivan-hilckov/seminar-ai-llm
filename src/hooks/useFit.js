import { useEffect, useRef } from 'react';

/**
 * Адаптивное масштабирование .slide под viewport.
 * Возвращает ref, который нужно повесить на <article class="slide">.
 *
 * @param {boolean} enabled — если false, ничего не делает (используется
 *   в режиме миниатюр, где скейл задаётся через CSS родителем).
 */
export function useFit(enabled = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;

    function fit() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // Учитываем сайдбар слева (240px) если он есть.
      const sidebarOffset = document.querySelector('.slide-sidebar') ? 240 : 0;
      const availW = vw - sidebarOffset;
      const targetW = Math.min(availW, 1280);
      const sx = targetW / 1920;
      const sy = vh / 1080;
      const s = Math.min(sx, sy);
      node.style.transform = `scale(${s})`;
    }

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [enabled]);

  return ref;
}
