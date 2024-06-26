import { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
  title,
  price,
  image,
  id,
  updateCart,
  quantity,
}) => {
  const [amount, setAmount] = useState(quantity);

  const handleUpdateCart = () => {
    updateCart(id, amount);
  };

  return (
    <div className="product-container">
      <Link to={`/shop/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{price} €</p>
      </Link>
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
            onChange={(event) => setAmount(parseInt(event.target.value))}
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
