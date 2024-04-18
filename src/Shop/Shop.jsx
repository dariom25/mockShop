import "./Shop.css";
import Product from "../Product/Product.jsx";



const Shop = ({productInformation, error, loading}) => {

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

  const productList = productInformation.map((product) => {
    return (
      <Product
        title={product.title}
        image={product.image}
        price={product.price}
        key={product.id}
        id={product.id}
        description={product.description}
        updateCart={updateCart}
      />
    );
  });

  return (
    <div className="product-list-container">
      {productList}
    </div>
  );
};

export default Shop;
