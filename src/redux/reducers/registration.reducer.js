const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TEMP_USER':
      return action.payload;
    case 'UPDATE_USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default registrationReducer;
