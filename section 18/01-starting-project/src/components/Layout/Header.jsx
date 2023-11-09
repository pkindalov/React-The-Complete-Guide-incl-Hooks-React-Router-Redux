import Button from "../UI/Button.jsx";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo image" />
        <h1>ReactFood</h1>
      </div>
      <Button textOnly>Cart(0)</Button>
    </header>
  );
};

export default Header;
