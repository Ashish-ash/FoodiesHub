import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { addToCart } from '../actions/foodAction';
import { deleteFromCart } from '../actions/foodAction';
import Checkout from '../components/Checkout';
export default function Cartscreen() {
    const cartstate = useSelector((state)=>state.cartReducer)
    const dispatch = useDispatch();
    const cartItems = cartstate.cartItems;
    var SubTotal = cartItems.reduce((x,item)=>x+item.price,0);
  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h2 style={{fontSize : '40px'}}>My Cart</h2>
                {cartItems.map((item)=>{
                  return <div className='flex-container'>
                            <div className='text-start m-1 w-100'>
                              <h1>{item.name} [{item.variant}]</h1>
                              <h1>Price : {item.quantity} x {item.prices[0][item.variant]} = {item.price}</h1>
                              <h1 style={{display : 'inline'}}>Quantity : </h1>
                              <i className="fas fa-plus" onClick={()=>dispatch(addToCart(item,item.quantity +1,item.variant))}></i>
                              <b>{item.quantity}</b>
                              <i className="fas fa-minus" onClick={()=>dispatch(addToCart(item,item.quantity -1,item.variant))}></i>
                              <hr/>
                            </div>
                            <div className='m-10 w-100'><img src={item.image} alt='' style={{height : '90px', width: '90px',borderRadius : '45px'}}/></div>
                            <div className='m-1 w-100'> <i className="fas fa-trash mt-4" onClick={()=>dispatch(deleteFromCart(item))}></i></div>
                          </div>
                })}
            </div>
            <div className='col-md-4 text-end'>
              <h2 style={{fontSize : '45px'}}>SubTotal : {SubTotal} /-</h2>
              <Checkout SubTotal = {SubTotal}/>
            </div>
        </div>
    </div>
  )
}
