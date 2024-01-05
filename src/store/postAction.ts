export const setPost  =( response :any)=> async (dispatch:any) => {
    try {
      dispatch({
        type: 'setUpPosts',
        payload: response,
      });
    } catch (err) {
      throw err;
    }
    return response;
  };