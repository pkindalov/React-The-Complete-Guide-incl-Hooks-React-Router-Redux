import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartiItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    // My Version
    // <Modal onCancelCartModal={props.onCancelCartModal}>
    <Modal onClose={props.onClose}>
      {cartiItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        {/* My Version */}
        {/* <button onClick={props.onCancelCartModal} className={classes["button--alt"]}>Close</button> */}
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
