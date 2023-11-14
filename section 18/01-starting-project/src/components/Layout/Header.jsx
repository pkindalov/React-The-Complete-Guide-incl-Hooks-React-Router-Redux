import Button from "../UI/Button.jsx";
import logo from "../../assets/logo.jpg";
import CartContext from "../../store/CartContext.jsx";
import { useContext } from "react";
import UserProgressContext from "../../store/UserProgressContext.jsx";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo image" />
        <h1>ReactFood</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>
        Cart({totalCartItems})
      </Button>
    </header>
  );
};

export default Header;
