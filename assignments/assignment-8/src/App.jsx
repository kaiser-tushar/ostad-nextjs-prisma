import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Income from "./pages/Income";
import Expense from "./pages/Expense";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Income />} />
        <Route path="/expenses" element={<Expense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
