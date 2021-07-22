import React from 'react'
import { NavLink } from "react-router-dom";
import './Navbar.css'
import iconProfile from '../../assets/images/user_profile.png'
import iconComments from '../../assets/images/comments.png'
import iconNews from '../../assets/images/news.png'
import iconSettings from '../../assets/images/settings.png'
import iconUsers from '../../assets/images/users.png'
import iconMusic from '../../assets/images/music.png'

const Navbar = (props) => {
   return (
      <nav>

         <div className='link'>
            <img src={iconProfile} />
            <NavLink to="/profile" ><h2>Profile</h2></NavLink>
         </div>
         <div className='link'>
            <img src={iconComments} />
            <NavLink to="/dialogs"  ><h2>Messages</h2></NavLink>
         </div>
         <div className='link'>
            <img src={iconNews} />
            <NavLink to="/news"  ><h2>News</h2></NavLink>
         </div>
         <div className='link'>
            <img src={iconMusic} />
            <NavLink to="/music"  ><h2>Music</h2></NavLink>
         </div>
         <div className='link'>
            <img src={iconUsers} />
            <NavLink to="/users"><h2>Users</h2></NavLink>
         </div>
         <div className='link'>
            <img src={iconSettings} />
            <NavLink to="/setings" ><h2>Setings</h2></NavLink>
         </div>
      </nav>

   );
}
export default Navbar;