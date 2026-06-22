import { Navigate, Route, Routes } from 'react-router-dom';

import Index from './routes/Index.jsx';
import Map from './routes/Map.jsx';
import Slide from './routes/Slide.jsx';
import Notes from './routes/Notes.jsx';
import Print from './routes/Print.jsx';
import NotFound from './routes/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/map" element={<Map />} />
      {/* Секции упразднены — единый поток глав на /map. Старые ссылки редиректим. */}
      <Route path="/opening" element={<Navigate to="/map" replace />} />
      <Route path="/section/:n" element={<Navigate to="/map" replace />} />
      <Route path="/slide/:id" element={<Slide />} />
      <Route path="/notes/:id" element={<Notes />} />
      <Route path="/print" element={<Print />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
