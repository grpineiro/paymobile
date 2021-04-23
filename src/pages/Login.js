import { Link } from '@react-navigation/native'
import { openDatabase } from 'expo-sqlite'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import FormField from '../components/FormField'
import globalStyle from '../styles/global'

const Login = () => {
  const [user, setUser] = useState(null)

  const db = openDatabase('AppDatabase.db')

  useEffect(() => {
    db.transaction(sql => {
      sql.executeSql('CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(40), age INTEGER, email VARCHAR(60), cpf VARCHAR(14), password VARCHAR(255), balance INTEGER)')
    })

    db.transaction(sql => {
      sql.executeSql('SELECT * FROM table_user',
      null,
      (txObj, {rows: { _array }}) => console.log(_array),
      (txObj, error) => console.log('Error ', error)
    )
    })
  }, [])

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