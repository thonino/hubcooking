import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import Pictures from "./components/Pictures/Pictures";
import Recipes from "./components/Recipes/Recipes";
import Profils from "./components/Profils/Profils";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/profils" element={<Profils />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
