import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Adapter from '../../utils/Adapter';

const DUMMY_DATA = [
  { id: '1', username: "Friend1" },
  { id: '2', username: "Friend2" },
  { id: '3', username: "Friend3" },
  { id: '4', username: "Friend4" },
  { id: '5', username: "Friend5" },
  { id: '6', username: "Friend6" },
  { id: '7', username: "Friend7" },
]

class MainScreen extends React.Component {

  handleConversationSelect = (id) => {
    this.props.selectConversationById(id)
    .then(() => this.props.navigation.navigate('Conversation'))
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
  
  render() {
    return (
      <>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Button
            title=" Profile "
            onPress={() => this.props.navigation.navigate('Profile') }
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Main Screen</Text>
          <FlatList 
            data={DUMMY_DATA}
            renderItem={({ item }) => 
              <Text 
                key={item.id}
                onPress={() => this.handleConversationSelect(item.id)}
              >{ item.username }</Text>
            }
          />
        </View>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    async selectConversationById(id) {
      dispatch({ type: 'SELECT_CONVERSATION_BY_ID', payload: id })
    },
    storeInitialData(data) {
      dispatch({ type: 'LOAD_INITIAL_DATA', payload: data })
    }
  }
}

export default connect(null, mapDispatchToProps)(MainScreen)