import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import BackButton from '../components/BackButton'

import Adapter from '../../utils/Adapter'

class ProfileScreen extends React.Component {

  handleLogOut = () => {
    Adapter.logOut()
    .then( this.props.logUserOut )
    .catch( errorObj => {
      // Not quite sure what could go wrong here, but just in case...
      debugger
      console.log("Couldn't log out (???): ", JSON.parse(errorObj.message))
    })
  }
  
  render() {
    return (
      <>
        <BackButton navigation={this.props.navigation} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{this.props.user.username}'s Profile Screen</Text>
          <Button
            title="Log Out"
            onPress={ this.handleLogOut }
          />
        </View>
      </>
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
    logUserOut() {
      dispatch({ type: 'LOG_USER_OUT' })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)