import React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import AppContainer from './src/containers/AppContainer'
import AuthContainer from './src/containers/AuthContainer'
import reducer from './src/reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

class App extends React.Component {

  render() {
    return this.props.user
      ? <AppContainer />
      : <AuthContainer />
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const ConnectedApp = connect(mapStateToProps)(App)

export default class AppWrapper extends React.Component {

  render() {
    return <Provider store={store}>
      <ConnectedApp />
    </Provider>
  }
}

