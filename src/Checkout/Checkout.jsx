import { useOutletContext } from "react-router-dom";
import "./Checkout.css";
import Product from "../Product/Product";

const Checkout = () => {
  const [
    productInformation,
    error,
    loading,
    cart,
    sumOfCart,
    numberOfItemsInCart,
    updateCart,
  ] = useOutletContext();

  const selectedItems = cart.map((product) => {
    if (product.quantity > 0) {
      return (
        <Product
          title={product.title}
          image={product.image}
          price={product.price}
          key={product.id}
          id={product.id}
          description={product.description}
          updateCart={updateCart}
          quantity={product.quantity}
        />
      );
    }
  });

  return (
    <div className="checkout-container">
      <div className="">
        <p>{sumOfCart()}</p>
        <p>{numberOfItemsInCart()}</p>
      </div>
      <div className="selected-items-container">{selectedItems}</div>
    </div>
  );
};

export default Checkout;
