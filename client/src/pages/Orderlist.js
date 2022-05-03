import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deliverOrder, getAllOrders } from '../actions/orderAction';
export default function Orderlist() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.getAllOrdersReducer);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch])
  return (
    <div style={{ textAlign: 'center' }}>
      <div className='row justify-content-center'>
        <div className='col-md-10'>
          <table className='table table-striped table-bordered'>
            <thead className='table-dark'>
              <tr>
                <th>Order Id</th>
                <th>Email</th>
                <th>User Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.orders.map((order) => {
                return <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (<h1>Delivered</h1>) : (<button className='btn' onClick={() => dispatch(deliverOrder(order._id))}>Deliver</button>)}
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
