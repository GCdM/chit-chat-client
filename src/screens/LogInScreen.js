import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

import Adapter from '../../utils/Adapter'
import { decryptData } from '../../utils/helper'

class LogInScreen extends React.Component {

  state = {
    loading: true,
    username: "",
    password: "",
  }

  handleFormSubmission = () => {
    const { username, password } = this.state
    
    Adapter.logIn({ username, password })
    .then( userInfo => {
      const privateKey = decryptData(userInfo.encPrivateKey, this.state.password)

      userInfo.key = privateKey
      userInfo.encPrivateKey = undefined
      this.props.logUserIn(userInfo)
    })
    .catch( errorObj => {
      const errorInfo = JSON.parse(errorObj.message)
      console.error(errorInfo)
      debugger
      // ADD ERROR TO REDUX STORE
    })
  }

  render() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('SignUp')}
            />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Log In</Text>
          <TextInput
            placeholder="Username"
            value={ this.state.username }
            onChangeText={ username => this.setState({ username }) }
            onSubmitText={
              1 + 1 == 1 // ...I'm pretty sure :/
              // Refocus on next text input
            }
          />
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={ this.state.password }
            onChangeText={ password => this.setState({ password }) }
            onSubmitText={ this.handleFormSubmission }
          />
          <Button 
            title="Log In"
            onPress={ this.handleFormSubmission }
          />
        </View>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn(userData) {
      dispatch({ type: 'LOG_USER_IN', payload: userData })
    },
  }
}

export default connect(undefined, mapDispatchToProps)(LogInScreen)