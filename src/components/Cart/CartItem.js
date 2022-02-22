import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const { title, price, quantity } = props.item;
  const total = price * quantity;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ title, price, quantity: 1 }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({ title }));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={addItemHandler}>+</button>
          <button onClick={removeItemHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
