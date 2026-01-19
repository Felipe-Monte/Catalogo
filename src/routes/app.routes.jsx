import { Route, Routes } from 'react-router-dom';
import { CartProvider } from '../CartContext';
import Details from '../pages/Details';
import { Home } from '../pages/Home';
import List from '../pages/List';

export function AppRoutes() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:code" element={<Details />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </CartProvider>
  );
}
