import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import { Easymode } from "./page/Easy";
import { NormalMode } from "./page/Normal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Easy" element={<Easymode />} />
        <Route path="/Normal" element={<NormalMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
