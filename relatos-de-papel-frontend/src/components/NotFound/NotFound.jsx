import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="no-found">
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="home-link">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
