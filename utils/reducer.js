const INITIAL_STATE = {
  user: null,
  conversationPreviews: [],
  selectedConversationId: null,
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case 'LOG_USER_IN':
      return { ...state, user: action.payload }
    case 'LOG_USER_OUT':
      return { ...INITIAL_STATE }
    case 'LOAD_INITIAL_DATA':
      return { ...state, ...action.payload }
    case 'SELECT_CONVERSATION_BY_ID':
      return { ...state, selectedConversationId: action.payload}
    default:
      return state
  }
}