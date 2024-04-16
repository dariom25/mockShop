import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/shop">Shop</Link>
      <Link to="/homepage">Homepage</Link>
      <Cart />
    </div>
  );
};

export default Navbar;
