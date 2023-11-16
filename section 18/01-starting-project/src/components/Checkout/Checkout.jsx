import Modal from "../UI/Modal.jsx";
import { useContext } from "react";
import CartContext from "../../store/CartContext.jsx";
import { currencyFormatter } from "../../util/formatting.js";
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";
import UserProgressContext from "../../store/UserProgressContext.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCxt = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0,
  );

  function handleClose() {
    userProgressCxt.hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();

    //validations here

    //extracting values form inputs
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // ex.. { email: "test@example.com" }

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  return (
    <Modal open={userProgressCxt.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit} action="#">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
