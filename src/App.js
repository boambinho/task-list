import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { SobreNosotros } from "./Pages/SobreNosotros";
import Menu from "./Pages/Menu";
import ErrorPage from "./Pages/ErrorPage";
import Tareas from "./Pages/Tareas";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<SobreNosotros />} />
          <Route path="/task_list" element={<Tareas />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
