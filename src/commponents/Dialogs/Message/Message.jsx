import React from 'react'
import './Message.css'


const Message = (props) => {
      return (
            <div className='messages-content'>
                  <div className='messages' ><p>{props.message}</p></div>
            </div>
      )
};
export default Message;