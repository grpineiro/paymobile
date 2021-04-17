import { Link } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FormField from '../components/FormField'
import globalStyle from '../styles/global'

const Login = () => {
  const [user, setUser] = useState(null)

  function handleChange(value, name) {
    setUser({ ...user, [name]: value})
  }

  function checkLogin() {
    if (({...user}) === "") {
      Alert.alert("Preencha os campos!")
    } else {
      try {
        
      } catch {

      }
    }
  }

  return (
    <ScrollView>
      <View>
        <FormField nameField="E-mail" event={text => handleChange(text, "email")} />
        <FormField nameField="Password" event={text => handleChange(text, "password")} />

        <TouchableOpacity style={globalStyle.button} onPress={() => checkLogin()}>
          <Text>Login</Text>
        </TouchableOpacity>

        <Link style={globalStyle.button} to="/register">Register</Link>
      </View>

    </ScrollView>
  )
}

export default Login