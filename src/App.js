import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/cart-actions";
import { Fragment, useEffect } from "react";

import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";

let isInitial = true;

const App = () => {
  const notification = useSelector((state) => state.cart.notification);
  const cart = useSelector((state) => state.cart.items);
  const cartChanged = useSelector((state) => state.cart.changed);
  const show = useSelector((state) => state.cart.cartIsShown);

  const dispatch = useDispatch();

  console.log("app rendering");

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cartChanged) {
      console.log("sending");
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cartChanged, cart]);

  return (
    <Fragment>
      {notification && <Notification notification={notification} />}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};

export default App;
