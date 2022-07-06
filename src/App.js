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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
