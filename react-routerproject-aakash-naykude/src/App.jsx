import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Componants/About";
import Cart from "./Componants/Cart";
import Contact from "./Componants/Contact";
import FAQ from "./Componants/FAQ";
import Footer from "./Componants/Footer";
import Home from "./Componants/Home";
import Kids from "./Componants/Kids";
import Mens from "./Componants/Mens";
import Navbar from "./Componants/Navbar";
import Womens from "./Componants/Womens";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
