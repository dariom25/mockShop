import "./Shop.css";
import { useEffect, useState } from "react";
import Product from "../Product/Product.jsx";

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

const Shop = () => {
  const [cart, setCart] = useState(null);

  const { productInformation, error, loading } = useProductInformation();

  useEffect(() => {
    if (productInformation) {
      const updatedProducts = productInformation.map((item) => {
        return { ...item, quantity: 0 };
      });
      setCart(updatedProducts)
    }
  }, []);

  const updateCart = (id, amount) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        return item.id === id ? { ...item, quantity: amount } : item;
      });
    });
  };

  if (error)
    return (
      <p className="error">
        <strong>A network error has occurred! Please again later.</strong>
      </p>
    );
  if (loading)
    return (
      <p className="loading">
        <strong>Loading...</strong>
      </p>
    );

  console.log(cart);

  const productList = productInformation.map((product) => {
    return (
      <Product
        title={product.title}
        image={product.image}
        price={product.price}
        key={product.id}
        description={product.description}
      />
    );
  });

  return <div className="product-list-container">{productList}</div>;
};

export default Shop;
