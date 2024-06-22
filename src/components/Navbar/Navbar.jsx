




import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu, IoOpen } from "react-icons/io5";
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
// import { ReactComponent as Brand } from '../../assets/icons/logo.svg'
import './Navbar.css'
import { Logo,NavbarBg } from '../../constants';

import { SearchBox } from '../../container';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    
      <div className="container">
        <div className='navbar-bg'>
            <img src={NavbarBg} alt="navbarbg" className='navbarbg' />
            
            <img src={Logo} alt="Logo" className='logo' />
          
           
        </div>
        
        
      
      <div className='lowernav'>

    
        <div className='nav-elements'>
          {/* <div> */}
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/India">India</NavLink>
              </li>
              <li>
                <NavLink to="/aiml">AI</NavLink>
              </li>
              
            
              <li>
                <NavLink to="/World">World</NavLink>
              </li>
              {/* <li>
                <NavLink to="/bitcoin">BitCoin</NavLink>
              </li> */}
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/entertainment">Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/politics">Politics</NavLink>
              </li>
             
              
              
            </ul>
          {/* </div> */}
          
          {/* <div className='nav__searchbox'>
            
           <SearchBox/>
          </div> */}

          

          
        
        
        </div> 
        <div className='nav__searchbox'>
            
           <SearchBox/>
        </div>
        </div>
        

      </div>
    
  )
}

export default Navbar