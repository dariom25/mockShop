import "./App.css";
import Shop from "../Shop/Shop";
import { Navbar } from "../Navbar/Navbar";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    if (productInformation) {
      const updatedProducts = productInformation.map((item) => {
        return { ...item, quantity: 0 };
      });
      setCart(updatedProducts);
    }
  }, [productInformation]); //check if sth changes when pages are switched

  const updateCart = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        return item.id === id
          ? { ...item, quantity: amount }
          : item;
      });
      return updatedCart;
    });
  };

  return (
    <div>
      <Navbar />
      <Shop
        productInformation={productInformation}
        error={error}
        loading={loading}
        updateCart={updateCart}
      />
    </div>
  );
}

export default App;
