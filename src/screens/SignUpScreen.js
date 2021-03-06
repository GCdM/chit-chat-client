import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import NavigationButton from '../components/NavigationButton'

import Adapter from '../../utils/Adapter'
import { decryptData } from '../../utils/helper'


class SignUpScreen extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
  }

  handleFormSubmission = () => {
    Adapter.signUp(this.state)
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
        <NavigationButton 
          style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
          title=" < "
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Sign Up</Text>
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
            onSubmitText={
              1 + 1 == 1 // ...I'm pretty sure :/
              // Refocus on next text input
            }
          />
          <TextInput
            secureTextEntry
            placeholder="Password Confirmation"
            value={ this.state.passwordConfirmation }
            onChangeText={ passwordConfirmation => this.setState({ passwordConfirmation }) }
            onSubmitText={ this.handleFormSubmission }
          />
          <Button 
            title="Sign Up"
            onPress={ this.handleFormSubmission }
          />
        </View>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn(userInfo) {
      dispatch({ type: "LOG_USER_IN", payload: userInfo })
    },
  }
}

export default connect(undefined, mapDispatchToProps)(SignUpScreen)