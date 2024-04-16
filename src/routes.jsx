import App from "./App/App";
import ErrorPage from "./ErrorPage/ErrorPage";
import Navbar from "./Navbar/Navbar"

const routes = [
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
  },
  {
    path: "",
  },
];

export default routes;
