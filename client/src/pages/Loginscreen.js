import React , {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userAction';
export default function Loginscreen() {
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('currentUser'))
    {
      window.location.href ='/';
    }
  },[])
  function login(event){
    event.preventDefault();
    const user = {
      email,password
    }
    dispatch(loginUser(user));
  }
  return (
    <div>
    <div className='row justify-content-center mt-5 '>
        <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded'>
          <h2 className='text-center m-2' style={{fontSize : '35px'}}>Login</h2>
          <form onSubmit={login}>
            <input type='text' required placeholder='email' value={email} onChange= {(e)=>setemail(e.target.value)} className='form-control'/>
            <input type='text' required placeholder='password' value={password} onChange= {(e)=>setpassword(e.target.value)} className='form-control'/>
            <button className='btn mt-3 mb-3'>Login</button>
          </form>
          <a href='/register' style={{color : 'black' , textDecoration : 'none'}}>Click here to Register</a>
          </div>
          </div>
    </div>
  )
}
