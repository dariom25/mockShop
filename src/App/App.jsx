import { Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
//import useProductInformation from "./useProductInformation";

const useProductInformation = async () => {
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

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;
  console.log(productInformation);

  return (
    <>
      <Link to="homepage">To Homepage</Link>
      <Link to="shop">To Shop</Link>
    </>
  );
}

export default App;
