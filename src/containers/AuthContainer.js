import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LogInScreen from '../screens/LogInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const AuthNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
  },
  {
    initialRouteName: 'LogIn',
  }
)

export default createAppContainer(AuthNavigator)