import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableHome from "./components/TableHome";
import Navbar from "./components/Navbar";
import BookDetails from "./components/BookDetails";
import SelectedBook from "./components/SelectedBook";
import Breadcrumbds from "./components/Breadcrumbs";
import ErrorPage from "./components/ErrorPage";

function App() {

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  function selectRow(row) {
    setSelectedRow(row);
  }
  function selectBook(book) {
    setSelectedBook(book);
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Breadcrumbds />
          <Routes>
            <Route exact path="/" element={<TableHome selectRow={selectRow} />} />
            <Route exact path="/details" element={<BookDetails selectedRow={selectedRow} selectBook={selectBook} />} />
            <Route exact path="/selected" element={<SelectedBook selectedBook={selectedBook} />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
