import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.css";

const Navbar = ({numberOfItemsInCart}) => {
  return (
    <div>
      <div className="navbar-container">
        <h1>Mocks Schmock Shop</h1>
        <div className="link-container">
          <Link to="/homepage">Homepage</Link>
          <Link to="/shop">Shop</Link>
          <Cart numberOfItemsInCart={numberOfItemsInCart} />
        </div>
      </div>
    </div>
  );
};

export {Navbar};
