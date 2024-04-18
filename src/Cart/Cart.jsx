import { TiShoppingCart } from "react-icons/ti";
import "./Cart.css";

const Cart = ({numberOfItemsInCart=0}) => {
  return (
    <div className="cart-container">
      <TiShoppingCart />
      <p>{numberOfItemsInCart}</p>
    </div>
  );
};

export default Cart;
