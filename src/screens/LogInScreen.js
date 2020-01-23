import React from 'react';
import { View, Text, TextInput } from 'react-native';

import Adapter from '../Adapter'

export default class LogInScreen extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleFormSubmission = () => {
    Adapter.logIn(this.state)
    .then( userData => {
      console.log("loged in?: ", userData)
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
          onSubmitText={ this.handleFormSubmission }
        />
      </View>
    );
  }
}