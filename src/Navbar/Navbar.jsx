import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/shop">Shop</Link>
      <Link to="/homepage">Homepage</Link>
    </div>
  );
};

export default Navbar;