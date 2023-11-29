import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const products = useSelector((state) => state.cart.products);
  if (!products || products.length === 0) {
    return (
      <Fragment>
        {showCart && (
          <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <p>No products found</p>
          </Card>
        )}
      </Fragment>
    );
  }

  const id = products[0].id;
  const title = products[0].title;
  const price = products[0].price;
  const quantity = products.length;
  const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  return (
    <Fragment>
      {showCart && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem
              item={{
                id: id,
                title: title,
                quantity: quantity,
                total: totalPrice,
                price: price,
              }}
            />
          </ul>
        </Card>
      )}
    </Fragment>
  );
};

export default Cart;
