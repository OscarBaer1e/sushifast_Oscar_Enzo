import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import MenuDetail from "./pages/MenuDetail";
import AnimatedBackground from "./components/AnimatedBackground";
import "./AnimatedBackground.css";
import Contact from "./pages/Contact";

function App() {
  return (
    
    <BrowserRouter>
    <AnimatedBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
