import React from 'react'
import { View, TextInput, FlatList, StyleSheet } from 'react-native'

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
    
    return <FlatList
      style={styles.searchResults}
      data={filteredUsers}
      renderItem={({ item }) => <UserPreview user={item} /> }
    />
  }

  render() {
    return (
      <View style={{ flex: 3 }} >
        <TextInput 
          style={{ borderWidth: 1 }}
          placeholder="Search for users"
          onFocus={ this.getOtherUsers }
          onChangeText={ searchTerm => this.setState({ searchTerm }) }
        />
        <View>
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
  searchResults: {
    position: 'absolute',
  },
})

export default SearchBar