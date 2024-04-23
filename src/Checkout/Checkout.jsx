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

  const selectedItems = cart.reduce((acc, product) => {
    if (product.quantity > 0) {
      acc.push(
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
    return acc;
  }, []);

  if (selectedItems.length === 0) return <h2>No items in Cart. </h2>;

  return (
    <div className="checkout-container">
      <div className="selected-items-container">{selectedItems}</div>
      <div>
        <div className="cost-information">
          <p>Number of Items: {numberOfItemsInCart()}</p>
          <p>Costs: {sumOfCart()} €</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
