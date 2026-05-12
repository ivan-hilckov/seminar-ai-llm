import { Route, Routes } from 'react-router-dom';

import Index from './routes/Index.jsx';
import Opening from './routes/Opening.jsx';
import Section1 from './routes/Section1.jsx';
import Slide from './routes/Slide.jsx';
import Notes from './routes/Notes.jsx';
import NotFound from './routes/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/opening" element={<Opening />} />
      <Route path="/section/1" element={<Section1 />} />
      <Route path="/slide/:id" element={<Slide />} />
      <Route path="/notes/:id" element={<Notes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
