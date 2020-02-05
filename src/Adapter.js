const currentIP = "10.218.17.119"
const baseUrl = `http://${currentIP}:3001`

const parseJson = async resp => {
  const body = await resp.json()

  if( resp.ok ) return body
  
  throw new Error( JSON.stringify(body) )
}

const optionsBuilder = (method, payload = undefined, headers = {}) => {
  return {
    method,
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
    },
  }
}

const compactFetch = ({ extension, method, payload, headers }) => {
  console.log("Fetched to URL:", method,  baseUrl + extension)
  
  return fetch(
    baseUrl + extension, 
    optionsBuilder(method, payload, headers)
  )
  .then( parseJson )
}

export default class Adapter {
  
  static logIn = (userCredentials) => {
    return compactFetch({
      extension: '/login',
      method: 'POST',
      payload: userCredentials,
    })
  }

  static signUp = (newUserCredentials) => {
    return compactFetch({
      extension: '/signup',
      method: 'POST',
      payload: newUserCredentials,
    })
  }

  static validate = () => {
    return compactFetch({
      extension: '/validate',
      method: 'GET',
    })
  }
}