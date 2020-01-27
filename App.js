import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppContainer from './src/containers/AppContainer'
import AuthContainer from './src/containers/AuthContainer'
import reducer from './src/reducer'

const store = createStore(reducer)

export default class App extends React.Component {

  get user() {
    return store.getState().user
  }

  render() {
    return <Provider store={store}>
      {
        this.user
        ? <AppContainer />
        : <AuthContainer />
      }
    </Provider>
    
  }
}

