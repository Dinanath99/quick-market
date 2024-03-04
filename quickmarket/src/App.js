import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
