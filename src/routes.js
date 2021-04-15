import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import UserRegistration from './pages/UserRegistration'

const Stack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={UserRegistration} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default Routes
