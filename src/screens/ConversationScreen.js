import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import NavigationButton from '../components/NavigationButton'

class ConversationScreen extends React.Component {
  
  render() {
    return (
      <>
        <NavigationButton 
          style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
          title=" < "
          onPress={() => this.props.navigation.goBack()}
        />
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