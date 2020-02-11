import React from 'react';
import { View, Button, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';

import ConversationList from '../components/ConversationList'
import UserPreview from '../components/UserPreview'

import Adapter from '../../utils/Adapter';

class MainScreen extends React.Component {

  state = {
    otherUsers: [],
    searchTerm: "",
  }
  
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

  getOtherUsers = () => {
    Adapter.getOtherUsers()
    .then( otherUsers => {
      this.setState({ otherUsers })
    })
    .catch( errorObj => {
      const errorInfo = JSON.parse(errorObj.message)
      console.error(errorInfo)
      debugger
    })
  }

  renderSearchResults = () => {
    return <FlatList
      style={{ position: 'absolute' }}
      data={this.state.otherUsers}
      renderItem={({ item }) => <UserPreview user={item} /> }
    />
  }
  
  render() {
    return (
      <>
        <View style={{ flexDirection: 'row' }}>
          <TextInput 
            style={{ flex: 3, borderWidth: 1 }}
            placeholder="Search for users"
            onFocus={ this.getOtherUsers }
            onChangeText={ searchTerm => this.setState({ searchTerm }) }
          />
          <Button
            style={{ flex: 1 }}
            title=" Profile "
            onPress={() => this.props.navigation.navigate('Profile') }
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          {
            this.state.searchTerm
            ? this.renderSearchResults()
            : null
          }
        </View>
        <ConversationList navigation={this.props.navigation} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeInitialData(data) {
      dispatch({ type: 'LOAD_INITIAL_DATA', payload: data })
    },
  }
}

export default connect(null, mapDispatchToProps)(MainScreen)