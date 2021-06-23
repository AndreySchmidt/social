let state ={
  profilePage: {
    posts: [
     {id:1, text: 'posts 1', likes: 'likes 1'},
     {id:2, text: 'posts 2', likes: 'likes 2'},
     {id:3, text: 'posts 3', likes: 'likes 3'},
     {id:4, text: 'posts 4', likes: 'likes 4'},
     {id:5, text: 'posts 5', likes: 'likes 5'},
     {id:6, text: 'posts 6', likes: 'likes 6'}
   ],
   dialogs: [
     {id:1, text: 'dialoges 1'},
     {id:2, text: 'dialoges 2'},
     {id:3, text: 'dialoges 3'},
     {id:4, text: 'dialoges 4'},
     {id:5, text: 'dialoges 5'},
     {id:6, text: 'dialoges 6'}
   ],
  },
  messagesPage: {
    messages: [
      {id:1, text: 'messages 1'},
      {id:2, text: 'messages 2'},
      {id:3, text: 'messages 3'},
      {id:4, text: 'messages 4'},
      {id:5, text: 'messages 5'},
      {id:6, text: 'messages 6'}
    ],
  },
  sidebar: {
    nav: [
      {id: 1, text: 'Dialogs', path: 'dialogs'},
      {id: 2, text: 'Profile', path: 'profile'},
      {id: 3, text: 'Messages', path: 'messages'},
    ]
  }
}
export default state;

const addPostToState = (postItem) => {
  if(postItem['text'])
  {
    state = state.push(postItem);
  }
  return state;
}

export {addPostToState};
