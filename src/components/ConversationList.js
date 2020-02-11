import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'


class ConversationList extends React.Component {

  handleConversationSelect = (id) => {
    this.props.selectConversationById(id)
    .then(() => this.props.navigation.navigate('Conversation'))
  }
  
  renderItem = ({ item }) => {
    return <Text 
      key={item.id}
      onPress={() => this.handleConversationSelect(item.id)}
    >
      { item.otherUsername }
    </Text>
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <FlatList 
          data={this.props.conversationPreviews}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    conversationPreviews: state.conversationPreviews,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    async selectConversationById(id) {
      dispatch({ type: 'SELECT_CONVERSATION_BY_ID', payload: id })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationList)