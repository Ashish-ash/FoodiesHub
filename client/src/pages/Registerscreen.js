import React, {useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { registerUser } from '../actions/userAction';
export default function Registerscreen() {
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [cpassword,setcpassword] = useState('');
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('currentUser'))
    {
      window.location.href ='/';
    }
  },[])
  function register(e){
      e.preventDefault();
      if(password!==cpassword)
      {
          alert('Passwords not matched');
      }
      else{
          const user = {
              name,
              email,
              password
          }
          dispatch(registerUser(user))
      }
  }
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-white rounded'>
            <h2 className='text-center m-2' style={{fontSize : '35px'}}>Register</h2>
                <form onSubmit={register}>
                    <input type='text' required placeholder='name' value={name} onChange= {(e)=>setname(e.target.value)} className='form-control'/>
                    <input type='text' required placeholder='email' value={email} onChange= {(e)=>setemail(e.target.value)} className='form-control'/>
                    <input type='text' required placeholder='password' value={password} onChange= {(e)=>setpassword(e.target.value)} className='form-control'/>
                    <input type='text' required placeholder='confirm password' value={cpassword} onChange= {(e)=>setcpassword(e.target.value)} className='form-control'/>
                    <button className='btn mt-3 mb-3'>Register</button>
                </form>
                <a href='/login' style={{color : 'black',textDecoration:'none'}}>Click here to Login</a>
            </div>
        </div>
    </div>
  )
}
