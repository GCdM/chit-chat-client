import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import ConversationPreview from './ConversationPreview'

class ConversationList extends React.Component {

  handleConversationSelect = (id) => {
    this.props.selectConversationById(id)
    .then(() => this.props.navigation.navigate('Conversation'))
  }
  
  renderItem = ({ item }) => (
    <ConversationPreview 
      key={item.id} 
      {...item} 
      handleConversationSelect={this.handleConversationSelect}
    />
  )

  render() {
    return (
      <View style={styles.conversationList}>
        <FlatList 
          data={this.props.conversationPreviews}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conversationList: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
})

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