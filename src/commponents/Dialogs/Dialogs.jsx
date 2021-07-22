import React from 'react'
import Dialog from './Dialog/Dialog';
import './Dialogs.css'
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';



const Dialogs = (props) => {

   let state = props.dialogsPage;

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);

   };

   let dialogsElements =
      state.dialogsData.map((d) => <Dialog name={d.name} key={d.id} id={d.id} />);

   let massagesElements =
      state.messagesData.map((m) => <Message message={m.messages} key={m.id} />);



   if (!props.isAuth) return <Redirect to={"/login"} />;

   return (
      <div className='dialogs-glass'>
         <div className='messages-content'>
            <div>{massagesElements}</div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
         </div>
         <div className='dialogs-dashboard'>
            {dialogsElements}
         </div>


      </div>
   )
};

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} >
         <div className='box-form'>
            <Field
               component="textarea"
               name="newMessageBody"
               placeholder="Enter yor message" />
         </div>
         <div><button>Send</button></div>
      </form>
   )
};
const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;