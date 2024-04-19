import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <img src="src/assets/mocksTitlePicture.webp" alt="random image" />
      <Link to="shop">
        <span className="link-shop">Go to the shop</span>
      </Link>
    </div>
  );
};

export default Homepage;
