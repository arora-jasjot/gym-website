import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from "./Pages/Gallery/Gallery";
import Shop from "./Pages/Shop/Shop";
import ProductPage from "./Pages/Shop/ProductPage/ProductPage";
import Join from "./Pages/Join/Join";
import Cart from "./Pages/Cart/Cart";
import Account from "./Pages/Account/Account";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="join" element={<Join />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
