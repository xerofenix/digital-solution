import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer"
import Services from "./components/Services";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <div className="main-container"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/pp" element={<PrivacyPolicy />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
