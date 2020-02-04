import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import BackButton from '../components/BackButton'

class ConversationScreen extends React.Component {
  render() {
    return (
      <>
        <BackButton navigation={this.props.navigation} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Conversation Screen</Text>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedConversationId: state.selectedConversationId,
  }
}

export default connect(mapStateToProps, null)(ConversationScreen)