import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function ConversationPreview(props) {
  return (
    <TouchableOpacity
      style={styles.conversationPreview}
      onPress={() => props.handleConversationSelect(props.id)}
    >
      <Text>{props.otherUsername}</Text>
    </TouchableOpacity>
  )
}
  
const styles = StyleSheet.create({
  conversationPreview: {
    borderWidth: 2,
    borderColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
})