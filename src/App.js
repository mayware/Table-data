import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableHome from "./components/TableHome";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import Breadcrumbds from "./components/Breadcrumbs";
import ErrorPage from "./components/ErrorPage";

function App() {

  const [selectedRow, setSelectedRow] = useState(null);

  function selectRow(row) {
    setSelectedRow(row);
    console.log(selectedRow);
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Breadcrumbds />
          <Routes>
            <Route exact path="/" element={<TableHome selectRow={selectRow} />} />
            <Route exact path="/details" element={<BookDetails selectedRow={selectedRow} />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
