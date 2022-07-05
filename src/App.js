import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Gallery from "./Pages/Gallery/Gallery";
import Shop from "./Pages/Shop/Shop";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
