const baseUrl = "http://localhost:3001"

const parseJson = resp => resp.json()

const optionsBuilder = (method, payload = undefined, headers = {}) => {
  return {
    method,
    // credentials: 'include', NEEDED FOR COOKIE SESSION MANAGEMENT
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
    },
  }
}

const compactFetch = ({ extension, method, payload, headers }) => {
  return fetch(
    baseUrl + extension, 
    optionsBuilder(method, payload, headers)
  )
  .then( parseJson )
}

export default class Adapter {
  
  static logIn = (userInfo) => {
    return compactFetch({
      extension: '/login',
      method: 'POST',
      payload: userInfo,
    })
  }

  static signUp = (newUserInfo) => {
    return compactFetch({
      extension: '/signup',
      method: 'POST',
      payload: newUserInfo,
    })
  }
  // static login = (userInfo) => {
  //   return fetch(baseUrl + '/login', optionsBuilder('POST', userInfo))
  //   .then( parseJson )
  // }

  // static signup = (newUserInfo) => {
  //   return fetch(baseUrl + '/register', optionsBuilder('POST', newUserInfo))
  //   .then( parseJson )
  // }

  // static validate = () => {
  //   return fetch(baseUrl + '/validate', optionsBuilder('GET'))
  //   .then( parseJson )
  // }

  // static logout = () => {
  //   return fetch(baseUrl + '/logout', optionsBuilder('GET'))
  //   .then( parseJson )
  // }

  // static fetchUsersNotInConversation = (conversationId) => {
  //   return fetch(baseUrl + '/users', optionsBuilder('POST', { conversationId }))
  //   .then( parseJson )
  // }
}