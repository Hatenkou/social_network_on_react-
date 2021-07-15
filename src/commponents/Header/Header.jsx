import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'


const Header = (props) => {

   return (
      <div className='login'>
         <h2> {props.isAuth ? props.login
            : <NavLink to="/login" >Login</NavLink>
         }</h2>
      </div>

   );
}

export default Header;

