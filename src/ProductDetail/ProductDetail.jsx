import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import "./ProductDetail.css";

const ProductDetail = () => {
  const [
    productInformation,
    error,
    loading,
    cart,
    sumOfCart,
    numberOfItemsInCart,
    updateCart,
  ] = useOutletContext();

  const { id } = useParams();

  const selectedItem = cart.find((item) => item.id === parseInt(id));

  const [amount, setAmount] = useState(selectedItem.quantity);

  const handleUpdateCart = () => {
    updateCart(parseInt(id), amount);
  };

  return (
    <div className="product-detail-layout-container">
      <div className="product-detail-container">
        <img src={selectedItem.image} alt={selectedItem.title} />
        <h3>{selectedItem.title}</h3>
        <p>{selectedItem.description}</p>
        <p>{selectedItem.price} €</p>
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
    </div>
  );
};

export default ProductDetail;
