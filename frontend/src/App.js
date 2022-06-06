import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sass/main.css";

// Pages
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comp from "./pages/Comp";
import Tips from "./pages/Tips";
import League from "./pages/League";
import Settings from "./pages/Settings";

// Components
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/comp" element={<Comp />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/league" element={<League />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
