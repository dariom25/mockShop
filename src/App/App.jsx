import Homepage from "../Homepage/Homepage.jsx";
import { Link } from "react-router-dom";
import Shop from "../Shop/Shop.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Link to="homepage">To Homepage</Link>
      <Link to="shop">To Shop</Link>
    </>
  );
}

export default App;
