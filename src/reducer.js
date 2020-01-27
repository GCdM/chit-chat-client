const INITIAL_STATE = {
  user: null,
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case "LOG_USER_IN":
      return { ...state, user: action.payload }
    default:
      return state
  }
}