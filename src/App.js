import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/homescreen";
import Navbar from "./pages/home/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
