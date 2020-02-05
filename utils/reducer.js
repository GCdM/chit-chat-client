const INITIAL_STATE = {
  user: null,
  selectedConversationId: null,
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case "LOG_USER_IN":
      return { ...state, user: action.payload }
    case "LOG_USER_OUT":
      return { ...state, user: null }
    case "SELECT_CONVERSATION_BY_ID":
      return { ...state, selectedConversationId: action.payload}
    default:
      return state
  }
}