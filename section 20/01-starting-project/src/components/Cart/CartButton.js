import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = () => {
  const dispatch = useDispatch();
  const productsCount = useSelector((state) => state.cart.products.length);

  const toggleButtonHandler = () => dispatch(cartActions.toggleCart());

  return (
    <button onClick={toggleButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{productsCount}</span>
    </button>
  );
};

export default CartButton;
