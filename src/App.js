import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard"
import './App.css';

function App() {
  return (
    <BrowserRouter basename="Latte">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/LeaderBoard/:userType' element={<LeaderBoard/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
