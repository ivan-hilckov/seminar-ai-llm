import { createContext, useContext } from 'react';

/**
 * Сигнал «слайд рендерится внутри миниатюры в сайдбаре».
 * Влияет на Stage (статический контейнер вместо .stage)
 * и useFit (отключает динамическое масштабирование).
 */
const ThumbnailContext = createContext(false);

export const ThumbnailProvider = ThumbnailContext.Provider;
export const useIsThumbnail = () => useContext(ThumbnailContext);
