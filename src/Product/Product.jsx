import "./Product.css";

const Product = (title, price, description, image, id) => {
  return (
    <div className="product-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Product;
