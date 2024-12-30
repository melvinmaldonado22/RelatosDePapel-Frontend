import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/main"), 5000);
    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Bienvenido a nuestra librería</h1>
        <div className="logo">
          <a>📚 Mundo Literario</a>
        </div>
        <p>Descubre los mejores libros y ¡sumérgete en nuevas historias!</p>
        <div className="carousel">
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQywnK0x26YknH-rrEKYPptTHYXBcFpKFug&s" alt="Libro 1" />
          </div>
          <div className="carousel-item">
            <img src="https://marketplace.canva.com/EAFjNCKkDPI/1/0/1003w/canva-portada-de-libro-de-fantas%C3%ADa-dram%C3%A1tico-verde-Ct1fLal3ekY.jpg" alt="Libro 1" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yAKwQCSrY6ZDakwcYCyFlU_dKOS9gXjxKw&s" alt="Libro 1" />
          </div>
        </div>
      </div>
      <footer className="landing-footer">
        <p>&copy; 2024 Librería Online. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Landing;
