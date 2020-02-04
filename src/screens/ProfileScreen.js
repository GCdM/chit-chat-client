import React from 'react';
import { View, Text } from 'react-native';

import BackButton from '../components/BackButton';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <>
        <BackButton navigation={this.props.navigation} />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Profile Screen</Text>
        </View>
      </>
    );
  }
}