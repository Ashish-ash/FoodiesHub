import React , {useEffect} from 'react'
import { Outlet , Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
export default function Adminscreen() {
    const userState = useSelector((state)=>state.loginUserReducer);
    const {currentUser} = userState;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!currentUser.isAdmin)
        {
            window.location.href = '/'
        }
    },[])
  return (
    <div style={{ textAlign : 'center'}}>
    <div className='row justify-content-center'>
        <div className='col-md-10'>
        <h2 style={{fontSize : '35px'}}>Admin Panel</h2>
        <ul className='adminfunctions'>
            <li><Link to={'/admin/itemlist'}>Items List</Link></li>
            <li><Link to={'/admin/additem'}>Add New Item</Link></li>
            <li><Link to={'/admin/orderlist'}>Orders List</Link></li>
        </ul>
        </div>
    </div>
    <Outlet/>
  </div>
  )
}
