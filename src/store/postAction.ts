export const setPost  = response => async dispatch => {
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