/*import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
   _state: {
      profilePage: {
         postData: [
            { id: 1, message: 'hellow word', like: '14' },
            { id: 2, message: 'i love react', like: '18' },
            { id: 3, message: 'learn english', like: '111' },
            { id: 4, message: 'sdfgsxghbwgd', like: '13' },
            { id: 5, message: 'sdfgsxghbwgd', like: '18' },
            { id: 5, message: 'ssdgsxghbwgd', like: '14' },
            { id: 5, message: 'sdfgsxghbwgd', like: '18' },

         ],
         newPostText: 'What do you have in mind?',
      },
      dialogsPage: {
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
         newMessageBody: "",
      },
   },
   _callSubscriber() {
      console.log('state changed');
   },
   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   /*на майбутне
    _addPost() {
       let newPost = {
          id: 1,
          message: this._state.profilePage.newPostText,
          like: 0,
       };
       this._state.profilePage.postData.push(newPost);
       this._state.profilePage.newPostText = ' ';
       this._callSubscriber();
    },
       _updataNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

     },
dispatch(action) {
   this._state.profilePage = profileReducer(this._state.profilePage, action);
   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

   this._callSubscriber(this._state);
},

};




export default store;
window.store = store;* /