import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux'

import Adapter from '../Adapter'

class LogInScreen extends React.Component {

  state = {
    username: "",
    password: "",
  }

  handleFormSubmission = () => {
    // Adapter.logIn(this.state)
    // .then( userData => {
    //   console.log("loged in?: ", userData)
    // })
    console.log("Logged In")
    this.props.logUserIn(this.state)
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
        <Button 
          title="Log In"
          onPress={ this.handleFormSubmission }
        />
      </View>
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

export default connect(undefined, mapDispatchToProps)(LogInScreen)
// export default LogInScreen