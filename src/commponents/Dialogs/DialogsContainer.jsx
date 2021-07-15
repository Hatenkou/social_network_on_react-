import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
};
let mapDispatshToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body));
      },
      sendMessage: (newMessageBody) => {
         dispatch(sendMessageCreator(newMessageBody));
      },
   }
};

export default compose(
   connect(mapStateToProps, mapDispatshToProps),
   withAuthRedirect,
)(Dialogs);


/*контейненрна компоненкт яка передая через контекст
стор и диспатч в призинтационую компоненту
const DialogsContainer = (props) => {

   return (
      <StoreContext.Consumer>{
         (store) => {
            let onSendMessageClick = () => {
               store.dispatch(sendMessageCreator());
            };
            let onNewMessageChange = (body) => {
               store.dispatch(updateNewMessageBodyCreator(body));
            };
            return < Dialogs
               updateNewMessageBody={onNewMessageChange}
               sendMessage={onSendMessageClick}
               dialogsPage={store.getState().dialogsPage} />
         }}

      </StoreContext.Consumer>

   )
};
*/

