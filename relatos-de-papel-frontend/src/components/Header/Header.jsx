import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">📚 Mundo Literario</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cart">Carrito</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/login">Iniciar sesión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
