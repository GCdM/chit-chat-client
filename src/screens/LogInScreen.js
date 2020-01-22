import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default class LogInScreen extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleFormSubmission = () => {
    // API.logIn(this.state)
    // .then( redirect on success )
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
            console.log("Refocus")
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