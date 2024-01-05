export const initialState = {
    posts: []
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'setUpPosts':
        return {
          ...state,
          posts: action?.payload
        };
   
      default:
        return state;
    }
  };
  
  export default user;
  