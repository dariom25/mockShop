import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Link to="shop">
        <img src="assets\mocksTitlePicture.webp" alt="random image" />
      </Link>
    </div>
  );
};

export default Homepage;
