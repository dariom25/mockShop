import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Mocks Online-Schmock Shop</h1>
      <p>Here stands a text which describes why the shop is so special and why you should buy something</p>
      <img src="src/assets/mocksTitlePicture.webp" alt="random image" />
      <Link to="../shop">Go to the shop</Link>
    </div>
  );
};

export default Homepage;
