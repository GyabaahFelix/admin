<<<<<<< HEAD
import React from 'react'
import "./Admin.css"
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/Navbar/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'


const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

=======
import React from 'react'
import "./Admin.css"
import Sidebar from '../../Components/Navbar/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/Navbar/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'


const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

>>>>>>> c242d57 (admin and backend)
export default Admin