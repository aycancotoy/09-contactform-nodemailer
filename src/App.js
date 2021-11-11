import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Products from "./components/pages/Products/Products";
import SignUp from "./components/pages/SignUp/SignUp";
import Footer from "./components/pages/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Eskiden switch yazardı ES7 ile routes oldu. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact-us" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
