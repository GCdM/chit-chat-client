import React from 'react'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import AppContainer from './src/containers/AppContainer'
import AuthContainer from './src/containers/AuthContainer'

import reducer from './utils/reducer'
import Adapter from './utils/Adapter'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

class App extends React.Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    Adapter.validate()
    .then( this.props.logUserIn )
    .catch( errorObj => this.setState({ loading: false }) )
  }

  render() {
    return this.state.loading
      ? null
      : (
        this.props.user
        ? <AppContainer />
        : <AuthContainer />
      )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn(userData) {
      dispatch({ type: 'LOG_USER_IN', payload: userData })
    },
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default class AppWrapper extends React.Component {

  render() {
    return <Provider store={store}>
      <ConnectedApp />
    </Provider>
  }
}

