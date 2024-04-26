import "./App.css";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Cart from "../Cart/Cart";


const useProductInformation = () => {
  const [productInformation, setProductInformation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => {
        setProductInformation(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { productInformation, error, loading };
};

function App() {
  const { productInformation, error, loading } = useProductInformation();

  const [cart, setCart] = useState([]);

  const sumOfCart = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity * item.price;
    });
    return Number(sum.toFixed(2));
  };

  const numberOfItemsInCart = () => {
    let noOfItems = 0;
    cart.forEach((item) => {
      noOfItems += item.quantity;
    });
    return noOfItems;
  };

  useEffect(() => {
    if (productInformation) {
      const updatedProducts = productInformation.map((item) => {
        return { ...item, quantity: 0 };
      });
      setCart(updatedProducts);
    }
  }, [productInformation]);

  const updateCart = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        return item.id === id ? { ...item, quantity: amount } : item;
      });
      return updatedCart;
    });
  };

  return (
    <header>
      <div className="navbar-container">
        <h1>Mocks Schmock Shop</h1>
        <ul className="link-container">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="checkout">
              <Cart numberOfItemsInCart={numberOfItemsInCart} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="outlet-container">
        <Outlet
          context={[
            productInformation,
            error,
            loading,
            cart,
            sumOfCart,
            numberOfItemsInCart,
            updateCart,
          ]}
        />
      </div>
    </header>
  );
}

export default App;
