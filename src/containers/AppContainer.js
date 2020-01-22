import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import MainScreen from '../screens/MainScreen'
import ConversationScreen from '../screens/ConversationScreen'
import ProfileScreen from '../screens/ProfileScreen'

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Conversation: {
      screen: ConversationScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
)

export default createAppContainer(AppNavigator)