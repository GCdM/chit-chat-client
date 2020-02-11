import React from 'react'
import { View, Text } from 'react-native'

export default function UserPreview({ user }) {
  return (
    <View>
      <Text>{ user.username }</Text>
    </View>
  )
}
