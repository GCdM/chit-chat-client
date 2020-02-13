import React from 'react';
import { View, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ConversationList from '../components/ConversationList'
import SearchBar from '../components/SearchBar'

import Adapter from '../../utils/Adapter';

class MainScreen extends React.Component {
  
  componentDidMount() {
    // Connect to websocket
    Adapter.loadInitialData()
    .then( this.props.storeInitialData )
    .catch( errorObj => {
      const errorInfo = JSON.parse(errorObj.message)
      console.error(errorInfo)
      debugger
    })
  }
  
  componentWillUnmount() {
    // Disconnect from websocket
  }
    
    render() {
      return (
        <>
        <View style={styles.header}>
          <SearchBar navigation={this.props.navigation}/>
          <Button
            style={{ flex: 1 }}
            title=" Profile "
            onPress={() => this.props.navigation.navigate('Profile') }
            />
        </View>
        <ConversationList navigation={this.props.navigation} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  searchResults: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
})

const mapDispatchToProps = (dispatch) => {
  return {
    storeInitialData(data) {
      dispatch({ type: 'LOAD_INITIAL_DATA', payload: data })
    },
  }
}

export default connect(null, mapDispatchToProps)(MainScreen)