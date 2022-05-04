import axios from "axios"
export const placeOrder = (token , SubTotal) => async (dispatch,getState) => {
    dispatch({type : 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    try {
        localStorage.removeItem("cartItems");
        alert('Ordered Successfully')
        const response = await axios.post('/orders/placeorder' , {token , SubTotal ,currentUser , cartItems});
        dispatch({type : 'PLACE_ORDER_SUCCESS'})
        window.location.reload()
    } catch (error) {
        dispatch({type : 'PLACE_ORDER_FAILED'})
        console.log(error);
    }
}
export const getUserOrders = () => async (dispatch , getState) => {
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_USERS_ORDERS_REQUEST'});
    try {
      const response = await axios.post('https://foodieshubb.herokuapp.com/orders/getuserorders',{userid : currentUser._id})
      dispatch({ type: 'GET_USERS_ORDERS_SUCCESS', payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const getAllOrders = () => async (dispatch , getState) => {
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_ALL_ORDERS_REQUEST'});
    try {
      const response = await axios.get('https://foodieshubb.herokuapp.com/orders/getallorders')
      dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: response.data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const deliverOrder = (orderid) => async (dispatch , getState) => {
    try {
      const response = await axios.post('https://foodieshubb.herokuapp.com/orders/deliverorder',{orderid})
      alert("Order Delivered")
      const response1 = await axios.get('https://foodieshubb.herokuapp.com/orders/getallorders')
      dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: response1.data });
    } catch (error) {
      console.log(error.message); 
    }
  };