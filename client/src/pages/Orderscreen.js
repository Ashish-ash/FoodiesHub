import React , {useState,useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {getUserOrders} from '../actions/orderAction'
export default function Orderscreen() {
    const dispatch = useDispatch();
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    useEffect(()=>{
        dispatch(getUserOrders())
    },[])
    const {orders} = orderstate;
  return (
    <div>
        <h2 style={{fontSize : '35px',textAlign : 'center'}}>My Orders</h2>
        <hr/>
        <div className='row justify-content-center'>
            {orders.map((order)=>{
                return <>
                    <div className='col-md-8 m-2 p-1' style={{backgroundColor : 'red', color : 'white'}}>
                        <div className='flex-container'>
                            <div className='text-left w-100 m-1'>
                            <h2 style={{fontSize : '25px'}}>Items</h2>
                            <hr/>
                                {order.orderItems.map(items =>{
                                    return <div>
                                        <p>{items.name} [{items.variant}] x {items.quantity} = {items.price}</p>
                                    </div>
                                })}
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{fontSize : '25px'}}>Address</h2>
                                <hr/>
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>
                            <div className='text-left w-100 m-1'>
                                <h2 style={{fontSize : '25px'}}>Order Info</h2>
                                <hr/>
                                <p>Order Amount : {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0,10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>
                            </div>
                        </div>
                    </div>
                </>
            })}
        </div>
    </div>
  )
}
