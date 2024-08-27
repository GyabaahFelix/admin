<<<<<<< HEAD
import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

=======
import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/profilepic.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

>>>>>>> c242d57 (admin and backend)
export default Navbar