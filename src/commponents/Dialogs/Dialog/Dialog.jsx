import React from 'react'
import { NavLink } from "react-router-dom";
import './Dialog.css'


const Dialog = (props) => {
   let path = '/dialogs/' + props.id;
   return (
      <div className='dialogs'>
         <div className='dialogsItems'>
            <div>
               <NavLink to={path} >{props.name}</NavLink>
            </div>
         </div>

      </div>
   )
};
export default Dialog;