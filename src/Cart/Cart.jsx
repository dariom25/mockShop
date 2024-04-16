import { TiShoppingCart } from "react-icons/ti";

const Cart = (numberOfItems=5, sum=68) => {
  return (
    <div className="cart-container">
      <TiShoppingCart />
      <p className="no-of-items">{numberOfItems}</p>
      <p className="sum">{sum}€</p>
    </div>
  );
};

export default Cart;
