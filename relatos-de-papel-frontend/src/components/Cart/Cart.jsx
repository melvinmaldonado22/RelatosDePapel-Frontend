import { useCart } from "../../utilities/CartContext";
import "./Cart.css";
const Cart = () => {
  const { cart, removeFromCart } = useCart();
  console.log(cart);
  return (
    <div className="cart">
      <h3>Carrito</h3>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
