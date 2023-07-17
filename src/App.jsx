// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/shopContext';
import Checkout from './pages/checkout/Checkout';
import { CssBaseline } from '@mui/material';


const App = () => {
  return (
    <>
    <CssBaseline />
    <ShopContextProvider>
      <Router>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

      </Router>
    </ShopContextProvider>
  </>
  );
};

export default App;
