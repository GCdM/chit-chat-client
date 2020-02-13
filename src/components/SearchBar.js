import React from 'react'
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'

import UserPreview from './UserPreview'

import Adapter from '../../utils/Adapter'

class SearchBar extends React.Component {

  state = {
    searchTerm: '',
    otherUsers: [],
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
    const lowerSearchTerm = this.state.searchTerm.toLowerCase()
    const filteredUsers = this.state.otherUsers.filter( user => 
      user.username.toLowerCase().includes(lowerSearchTerm)
    )
    
    return filteredUsers.length
      ? <FlatList
        style={styles.searchResults}
        data={filteredUsers}
        renderItem={({ item }) =>
          <UserPreview
            user={item} 
            onPress={this.handleUserSelect}
          />
        }
      />
      : <View style={[styles.searchResults, {borderWidth: 1}]}><Text>No users</Text></View>
  }

  handleUserSelect = (id) => {
    console.log('clicked')
    debugger
    Adapter.startConversation(id)
    .then()
    .catch()
  }

  render() {
    return (
      <View style={styles.searchBarContainer} >
        <TextInput 
          style={{ borderWidth: 3 }}
          placeholder="Search for users"
          onFocus={ this.getOtherUsers }
          onChangeText={ searchTerm => this.setState({ searchTerm }) }
        />
        <View
          style={{ alignItems: 'center' }}
        >
          {
            this.state.searchTerm
            ? this.renderSearchResults()
            : null
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flex: 3,
  },
  searchResults: {
    // flex: 1,
    position: 'absolute',
    zIndex: 1,
  },
})

export default SearchBar