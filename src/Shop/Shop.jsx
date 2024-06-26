import "./Shop.css";
import Product from "../Product/Product.jsx";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [
    productInformation,
    error,
    loading,
    cart,
    sumOfCart,
    numberOfItemsInCart,
    updateCart,
  ] = useOutletContext();

  if (error)
    return (
      <p className="error">
        <strong>A network error has occurred! Please try again later.</strong>
      </p>
    );
  if (loading)
    return (
      <p className="loading">
        <strong>Loading...</strong>
      </p>
    );

  const productList = cart.map((product) => {
    return (
      <Product
        title={product.title}
        image={product.image}
        price={product.price}
        key={product.id}
        id={product.id}
        updateCart={updateCart}
        quantity={product.quantity}
      />
    );
  });

  return <div className="product-list-container">{productList}</div>;
};

export default Shop;
