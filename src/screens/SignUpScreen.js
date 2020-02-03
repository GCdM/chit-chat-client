import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

import Adapter from '../Adapter'

class SignUpScreen extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
  }

  handleFormSubmission = () => {
    Adapter.signUp(this.state)
    .then( this.props.logUserIn )
    .catch( errorObj => {
      const errorInfo = JSON.parse(errorObj.message)
      debugger
      // ADD ERROR TO REDUX STORE
    })
  }

  navigateBack = () => {
    this.props.navigation.goBack()
  }
  
  render() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Button
            title="X"
            onPress={ this.navigateBack }
          />
        </View>
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
    logUserIn(userData) {
      dispatch({ type: "LOG_USER_IN", payload: userData })
    },
  }
}

export default connect(undefined, mapDispatchToProps)(SignUpScreen)