import { useState } from "react";
import "./Product.css";

const Product = ({
  title,
  price,
  description,
  image,
  id,
  updateCart,
}) => {
  const [amount, setAmount] = useState(0);

  const handleUpdateCart = () => {
    updateCart(id, amount);
  };

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
            value={amount}
            min="1"
            className="quantity"
            type="number"
            name="quantity"
            id="quantity"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button onClick={handleUpdateCart} className="add-button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
