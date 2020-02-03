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
    Adapter.logIn(this.state)
    .then( this.props.logUserIn )
    .catch( errorObj => {
      const errorInfo = JSON.parse(errorObj.message)
      debugger
      // ADD ERROR TO REDUX STORE
    })
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }
  
  render() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button
            title="Sign Up"
            onPress={ this.navigateToSignUp }
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