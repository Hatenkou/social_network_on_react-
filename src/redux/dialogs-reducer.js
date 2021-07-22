const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   dialogsData: [
      { id: 1, name: 'vitya1' },
      { id: 2, name: 'vitya2' },
      { id: 3, name: 'vitya3' },
      { id: 4, name: 'vitya4' },
      { id: 5, name: 'vitya5' },
      { id: 6, name: 'vitya6' },
   ],
   messagesData: [
      { id: 1, messages: 'sdfgsxghbwgd' },
      { id: 2, messages: 'sdfgsxghbwgd' },
      { id: 3, messages: 'sdfgsxghbwgd' },
      { id: 4, messages: 'sdfgsxghbwgd' },
      { id: 5, messages: 'sdfgsxghbwgd' },
   ],
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let body = action.newMessageBody;
         return {
            ...state,
            messagesData: [...state.messagesData, { id: 6, messages: body }],
         };
      default:
         return state;

   }

};


export const sendMessageCreator = (newMessageBody) => {
   return {
      type: SEND_MESSAGE,
      newMessageBody
   }
};


export default dialogsReducer;