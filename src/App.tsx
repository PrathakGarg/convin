import { Routes, Route, Navigate } from 'react-router-dom';
import { FC } from 'react';

import Navbar from './routes/navbar/navbar.component'
import Bucket from './routes/bucket/bucket.component';
import History from './routes/history/history.component';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Navigate to={"bucket/"} />} />
      <Route path='history/' element={<History />} />
      <Route path='bucket/*' element={<Bucket />} />
    </Route>
  </Routes>
);

export default App;