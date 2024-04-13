import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/homescreen";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./pages/home/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
