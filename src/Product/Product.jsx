import "./Product.css";

const Product = ({ title, price, description, image, id, quantity, addHandler }) => {
  return (
    <div className="product-container">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <div className="add-to-cart-container">
        <div className="quantity-container">
          <label htmlFor="quantity">Quantity:</label>
          <input
            value={quantity}
            min="1"
            className="quantity"
            type="number"
            name="quantity"
            id="quantity"
          />
        </div>
        <button onClick={addHandler} className="add-button">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
