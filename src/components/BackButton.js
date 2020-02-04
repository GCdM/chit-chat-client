import React from 'react'
import { View, Button } from 'react-native'


export default function BackButton(props) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Button
        title="  <  "
        onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}