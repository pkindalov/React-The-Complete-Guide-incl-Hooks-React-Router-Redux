import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
//My Version
// import Cart from "../Cart/Cart";

const Header = (props) => {
  //My Version
  // const [isCartModalActive, setCartModalActive] = useState(false);
  // const showCartModal = () => {
  //   setCartModalActive(true);
  // }

  // const cancelCartModal = () => {
  //   setCartModalActive(false);
  // }

  return (
    <Fragment>
      {/* My Version */}
      {/* {isCartModalActive && <Cart onCancelCartModal={cancelCartModal} />} */}
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* My Version */}
        {/* <HeaderCartButton onCartShow={showCartModal} /> */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
