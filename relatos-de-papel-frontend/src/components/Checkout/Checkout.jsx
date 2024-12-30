import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Pedido realizado con éxito.");
    clearCart();
    navigate("/main");
  };

  return (
    <div className="checkout">
      <h2>Resumen de compra</h2>
      {cart.map((item) => (
        <p key={item.id}>{item.title} - ${item.price}</p>
      ))}
      <button onClick={handleCheckout}>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
