export const initialState = {
    user: null
  };
  
  const user = (state = initialState, action:any) => {
    switch (action.type) {
      case 'setUpUser':
        return {
          ...state,
          user: action?.payload,
        };
      case 'Log_out':
        return {
          ...initialState,
        };
      default:
        return state;
    }
  };
  
  export default user;
  