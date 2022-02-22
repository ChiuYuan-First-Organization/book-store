import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Card from "../UI/Card";
import styles from "./Cart.module.css";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  let cartItem = items.map((item) => <CartItem key={item.title} item={item} />);

  if (cartItem.length === 0) {
    cartItem = null;
  }
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItem}</ul>
    </Card>
  );
};

export default Cart;
