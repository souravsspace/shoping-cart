import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Navigation from "./Components/Navigation";
import { ShopingCartProvider } from "./Context/ShopingCartContext";
import { Footer } from "./Components/Footer";

const App: FC = () => {
  return (
    <ShopingCartProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </ShopingCartProvider>
  );
};
export default App;
