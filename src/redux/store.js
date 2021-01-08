import profile_reducer from "./profile-reducer";
import dialogs_reducer from "./dialogs-reducer";
import sidebar_reducer from "./sidebar-reducer";

let store = {
  _state: {
    'profilePage': {
      'posts': [
        {'id': 1, 'message': "Hi, how are you", 'like': 1,},
        {'id': 2, 'message': "It`s mt first post", 'like': 23}
      ],
      'newPostText': 'it-commit'
    },
    'dialogsPage': {
      'dialogs': [
        {'id': 1, 'name': 'Dimych'},
        {'id': 2, 'name': 'Andrey'},
        {'id': 3, 'name': 'Sveta'},
        {'id': 4, 'name': 'Sasha'},
        {'id': 5, 'name': 'Viktor'},
        {'id': 6, 'name': 'Valera'}
      ],
      'messages': [
        {'id': 1, 'message': "Hi"},
        {'id': 2, 'message': "How are your react"},
        {'id': 3, 'message': "Yo"},
        {'id': 4, 'message': "Lol"}
      ],
      'newMessageBody': ''
    },
    'sidebar': {
      'friends': [
        {'id': 1, 'name': 'Dimych', 'career': 'React Developer'},
        {'id': 2, 'name': 'Sveta', 'career': 'SSM'},
        {'id': 3, 'name': 'Sasha', 'career': 'common-UX'},
        {'id': 4, 'name': 'Viktor', 'career': 'PHP Developer'},
        {'id': 5, 'name': 'Valera', 'career': 'Javascript Developer'}
      ]
    }
  },
  _callSubscriber() {
    console.log( 'Rerender Changed !!!')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {

      this._state.profilePage = profile_reducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebar_reducer(this._state.sidebar, action)

      this._callSubscriber(this._state)
  }
}

export default store // store OOP
window.store = store // view store in console browser


