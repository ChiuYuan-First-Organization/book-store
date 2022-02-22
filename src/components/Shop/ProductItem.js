import styles from "./ProductItem.module.css";
import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  const { title, price, description } = props.item;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.addItem({ title, price, quantity: 1 }));
  };
  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
