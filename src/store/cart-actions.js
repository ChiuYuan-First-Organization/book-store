import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const reponse = await fetch(
        "https://react-movies-88d65-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!reponse.ok) {
        throw new Error("something went wrong!");
      }

      const data = await reponse.json();
      
      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData || []));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  console.log('sent cart:', cart);
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-movies-88d65-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: { "Contet-Type": "application/json" },
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
    };

    try {
      await sendRequest();
      
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
