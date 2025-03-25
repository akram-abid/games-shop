import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Cart from './components/Cart';
import Header from './components/Header';
  
const router = createBrowserRouter(routes);

function MainApp() {
  const [isCartOpen, setIsCartOpen] = useState(true);

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <StrictMode>
      <Header toggleCart={toggleCart} />
      <RouterProvider router={router} />
      {isCartOpen && <Cart toggleCart={toggleCart} />}
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<MainApp />);
