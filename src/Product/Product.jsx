import "./Product.css";

const Product = ({title, price, description, image, id}) => {
  return (
    <div className="product-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
