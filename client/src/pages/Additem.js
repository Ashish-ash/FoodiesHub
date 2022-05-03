import React , {useState} from 'react'
import { addItem } from '../actions/foodAction'
import { useDispatch,useSelector } from 'react-redux'
export default function Additem() {
  const [name,setname] = useState('')
  const [small,setsmall] = useState('')
  const [medium,setmedium] = useState('')
  const [large,setlarge] = useState('')
  const [image,setimage] = useState('')
  const [category,setcategory] = useState('')
  const [description,setdescription] = useState('')
  const dispatch = useDispatch()
  function formhandler(event){
    event.preventDefault();
    const item = {
      name,image,description,category,
      prices : {small,medium,large}
    }
    dispatch(addItem(item))
  }
  return (
    <div>
        <div className='text-left'>
        <div className='row justify-content-center'>
        <div className='col-md-10'>
          <h2>Add Item</h2>
          <form onSubmit={formhandler}>
            <input className='form-control' type='text' placeholder='Name' value={name} onChange = {(e)=>{setname(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Small Variant Price' value={small} onChange = {(e)=>{setsmall(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Medium Variant Price' value={medium} onChange = {(e)=>{setmedium(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Large Variant Price' value={large} onChange = {(e)=>{setlarge(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Category' value={category} onChange = {(e)=>{setcategory(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Image url' value={image} onChange = {(e)=>{setimage(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Description' value={description} onChange = {(e)=>{setdescription(e.target.value)}}/>
            <button className='btn mt-3'>Add Item</button>
          </form>
        </div>
        </div>
        </div>
    </div>
  )
}

