import "./App.css";
import { Routes, Route } from "react-router-dom";
import Recipes from "./components/API/Recipes/Recipes";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
