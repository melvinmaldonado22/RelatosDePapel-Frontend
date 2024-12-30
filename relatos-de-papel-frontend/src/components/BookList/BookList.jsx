import { Link } from "react-router-dom";
import "./BookList.css";
import PropTypes from "prop-types";
const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.cover} alt={`Portada de ${book.title}`} className="book-cover" />
          <div className="book-info">
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Precio: ${book.price.toFixed(2)}</p>
            <Link to={`/book/${book.id}`} className="details-link">
              Ver detalles
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

BookList.propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        cover: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default BookList;
