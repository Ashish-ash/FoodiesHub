import React ,{useEffect} from "react";
import Navbar from "./components/Navbar";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap';
import {Route , Routes , Link , Switch} from 'react-router-dom';
import Homescreen from "./pages/Homescreen";
import Cartscreen from "./pages/Cartscreen";
import Loginscreen from "./pages/Loginscreen";
import Registerscreen from "./pages/Registerscreen";
import Orderscreen from "./pages/Orderscreen";
import Adminscreen from "./pages/Adminscreen";
import Orderlist from "./pages/Orderlist";
import Itemlist from "./pages/Itemlist";
import Additem from "./pages/Additem";
import Edititem from "./pages/Edititem";
const App = () =>{
    return (
    <>
        <Navbar/>
        <Routes>
        <Route path="/" element = {<Homescreen/>}/>
        <Route path="/cart" element = {<Cartscreen/>}/>
        <Route path="/register" element = {<Registerscreen/>}/>
        <Route path="/login" element = {<Loginscreen/>}/>
        <Route path="/orders" element = {<Orderscreen/>}/>
        <Route path="/admin" element = {<Adminscreen/>}>
            <Route path = '/admin' element = {<Itemlist/>}/>
            <Route path = '/admin/orderlist' element = {<Orderlist/>}/>
            <Route path = '/admin/additem' element = {<Additem/>}/>
            <Route path = '/admin/itemlist' element = {<Itemlist/>}/>
            <Route path = '/admin/edititem/:itemid' element = {<Edititem/>}/>
        </Route>
        </Routes>
    </>
    )
}
export default App;