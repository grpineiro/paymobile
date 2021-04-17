import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import Login from './pages/Login'
import UserRegistration from './pages/UserRegistration'

const Stack = createStackNavigator()

const Routes = () => {
  const links = {
    config: {
      screens: {
        Login: '/login',
        Register:'/register'
      }
    }
  }

  return (
    <NavigationContainer linking={links} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={UserRegistration} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default Routes
