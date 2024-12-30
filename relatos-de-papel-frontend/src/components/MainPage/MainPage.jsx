import { useState, useEffect } from "react";
import BookList from "../BookList/BookList";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import booksData from "../../data/books.json";
import "./MainPage.css";
const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const handleSearch = (term) => {
    setSearch(term);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-page">
      <Header onSearch={handleSearch} />
      <div className="content-container">
        <BookList books={filteredBooks} />
        <Cart />
      </div>
    </div>
  );
};

export default MainPage;
