import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import Details from '../pages/Details';
import List from '../pages/List';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:code" element={<Details />} />
      <Route path="/list" element={<List />} />
    </Routes>
  );
}
