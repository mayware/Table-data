import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableHome from "./components/TableHome";
import Navbar from "./components/Navbar";
import BookDetails from './components/BookDetails';
import SelectedBook from "./components/SelectedBook";
import Breadcrumbds from "./components/Breadcrumbs";
import ErrorPage from "./components/ErrorPage";

function App() {

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedId, setSelectedId] = useState('');

  function selectRow(row) {
    setSelectedRow(row);
  }
  function selectBook(book) {
    setSelectedBook(book);
  }
  function selectBookId(id) {
    setSelectedId(id);
  }
  function resetId() {
    setSelectedId('');
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Breadcrumbds selectedId={selectedId} />
          <Routes>
            <Route exact path="/" element={<TableHome selectRow={selectRow} resetId={resetId} />} />
            <Route exact path="/details/:id" element={<BookDetails selectedRow={selectedRow} selectBook={selectBook} selectBookId={selectBookId} />} />
            <Route exact path="/selected/:id" element={<SelectedBook selectedBook={selectedBook} selectBookId={selectBookId} />} />
            <Route exact path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
