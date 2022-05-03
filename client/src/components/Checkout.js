import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderAction';
export default function Checkout({SubTotal}) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer)
  function tokenHandler(token) {
    dispatch(placeOrder(token , SubTotal));
  }
  return (
    <div>
        <StripeCheckout
        amount={SubTotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey = 'pk_test_51KebMjSIjG2OPNA7aVJP4iDAGJCJWjMzE3aajTuMWElsnazNyePaursYgT4ToCf0VHopVMoStlYp3OTZaPUiWhjQ00JqJJKyBI'
        currency = 'INR'
        >
            <button className='btn'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}
