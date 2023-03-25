import { Routes, Route } from 'react-router-dom';
import { FC } from 'react';

import Navbar from './routes/navbar/navbar.component'
import Home from './routes/home/home.component';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

export default App;