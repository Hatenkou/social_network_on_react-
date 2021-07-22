import React from 'react'
import './Message.css'


const Message = (props) => {
      return (
            <div className='messages-conteiner'>
                  <div>
                        <div className='messages' ><p>{props.message}</p></div>
                  </div>
            </div>
      )
};
export default Message;