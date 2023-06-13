import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableHome from "./components/TableHome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TableHome />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
