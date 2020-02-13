import React from 'react'
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default function UserPreview({ user, onPress }) {
  return (
    <TouchableNativeFeedback
      onPress={() => onPress(user.id)}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={styles.userPreview}>
        <Text>{ user.username }</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  userPreview: {
    borderWidth: 1,
    width: 300,
    height: 60,
    backgroundColor: '#DDDDDD',
  },
})