import "./Shop.css";
import { useEffect, useState } from "react";

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
  const { productInformation, error, loading } = useProductInformation();
  const { title, id, description, image, price } = productInformation;

  if (error) return <p className="error">A network error has occurred!</p>;
  if (loading) return <p className="loading">Loading...</p>;

  return <p>Here will be a shopping page in the future</p>;
};

export default Shop;
