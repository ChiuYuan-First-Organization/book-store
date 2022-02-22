import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import styles from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const total = useSelector((state) =>
    state.cart.items.map((i) => i.quantity).reduce((a, b) => a + b, 0)
  );

  const toggleHandler = () => {
    dispatch(cartActions.cartToggle());
  };

  return (
    <button className={styles.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
