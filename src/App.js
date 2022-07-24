import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter basename="Latte">
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
