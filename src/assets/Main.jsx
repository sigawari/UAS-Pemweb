import Login from "./Login";
import App from "./App";

const Main = () => {
  const isLoggedIn = localStorage.getItem("auth");
  return isLoggedIn ? <App /> : <Login />;
};

export default Main;
