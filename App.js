import React from 'react'

import AppContainer from './src/containers/AppContainer'
import AuthContainer from './src/containers/AuthContainer'

export default class App extends React.Component {

  state = {
    user: null,
  }
  
  render() {
    // Placeholder until redux is bootstrapped
    return this.state.user
    ? <AppContainer />
    : <AuthContainer />
  }
}
