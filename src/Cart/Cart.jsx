import { TiShoppingCart } from "react-icons/ti";
import "./Cart.css";

const Cart = ({numberOfItemsInCart}) => {
  return (
    <div className="cart-container">
      <TiShoppingCart />
      <p>{numberOfItemsInCart()}</p>
    </div>
  );
};

export default Cart;
