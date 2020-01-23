import React from 'react';
import { View, Text } from 'react-native';

import Adapter from '../Adapter'

export default class SignUpScreen extends React.Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
  }

  handleFormSubmission = () => {
    Adapter.logIn(this.state)
    .then( userData => {
      console.log("signed up?: ", userData)
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Log In Screen</Text>
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
      </View>
    );
  }
}