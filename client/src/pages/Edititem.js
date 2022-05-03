import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { getFood , updateItem } from '../actions/foodAction';
import { getFoodReducer } from '../reducers/getAllFoodsReducer';
export default function Edititem() {
    const params = useParams();
    const dispatch = useDispatch();
    const [name,setname] = useState('')
    const [small,setsmall] = useState('')
    const [medium,setmedium] = useState('')
    const [large,setlarge] = useState('')
    const [image,setimage] = useState('')
    const [category,setcategory] = useState('')
    const [description,setdescription] = useState('')
    const food = useSelector(state => state.getFoodReducer)
    useEffect(()=>{
      if(food)
      {
        if(food._id == params.itemid)
        {
          setname(food.name)
          setdescription(food.description)
          setcategory(food.category)
          setsmall(food.prices[0]['small'])
          setmedium(food.prices[0]['medium'])
          setlarge(food.prices[0]['large'])
          setimage(food.image)

        }
        else
        {
          dispatch(getFood(params.itemid))
        }
      }
      else
      {
        dispatch(getFood(params.itemid))
      }
    },[food , dispatch])
    function formhandler(event){
        event.preventDefault();
        const item = {
          name,image,description,category,_id : params.itemid,
          prices : {small,medium,large}
        }
        dispatch(updateItem(item))
      }
  return (
    <div>
        <h2>Edit Item</h2>
        <div className='text-left'>
        <div className='row justify-content-center'>
        <div className='col-md-10'>
          <form onSubmit={formhandler}>
            <input className='form-control' type='text' placeholder='Name' value={name} onChange = {(e)=>{setname(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Small Variant Price' value={small} onChange = {(e)=>{setsmall(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Medium Variant Price' value={medium} onChange = {(e)=>{setmedium(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Large Variant Price' value={large} onChange = {(e)=>{setlarge(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Category' value={category} onChange = {(e)=>{setcategory(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Image url' value={image} onChange = {(e)=>{setimage(e.target.value)}}/>
            <input className='form-control' type='text' placeholder='Description' value={description} onChange = {(e)=>{setdescription(e.target.value)}}/>
            <button className='btn mt-3'>Edit Item</button>
          </form>
        </div>
        </div>
        </div>
    </div>
  )
}
