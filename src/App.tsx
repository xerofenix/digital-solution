import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<ErrorPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
