import { Link, Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <h1>Mocks Schmock Shop</h1>
        <div className="link-container">
          <Link to="/shop">Shop</Link>
          <Link to="/homepage">Homepage</Link>
          <Cart />
        </div>
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
