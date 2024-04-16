import { TiShoppingCart } from "react-icons/ti";
import "./Cart.css";

const Cart = ({sum = 0 }) => {
  return (
    <div className="cart-container">
      <TiShoppingCart />
      <p>{sum} €</p>
    </div>
  );
};

export default Cart;
