import {StatusBar} from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native'

import FormField from '../components/FormField'

const UserRegistration = () => {
  const formState = {
    name:"",
    age:"",
    email:"",
    cpf:"",
    password:"",
    confirmPassword:"",
    balance:0

  }

  const [form, setForm] = useState(formState)

  function handleChange(value, name) {
    setForm({ ...form, [name]: value })
  }

  function checkDate() {
    if ({ ...form === "" }) {
      Alert.alert("Preencha todos os campos!")
    } else {
      try {
      
      } catch(error) {
        Alert.alert(error)  
      }
    }
  }

  return (
    <ScrollView>
      <View>
        <StatusBar style="auto" />
        <FormField nameField={"Nome completo: "} event={text => handleChange(text, "name")} />
        <FormField nameField={"Idade: "} event={text => handleChange(text, "age")} isNumeric={true} />
        <FormField nameField={"Email: "} event={text=> handleChange(text, "email")} />
        <FormField nameField={"CPF: "} event={text => handleChange(text, "cpf")} isNumeric={true} />
        <FormField nameField={"Senha: "} event={text => handleChange(text, "password")} />
        <FormField nameField={"Confirme a senha: "} event={text => handleChange(text, "confirmPassword")} />

        <TouchableOpacity style={styles.button} onPress={() => checkDate()}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 15
  },
  scrollView: {
    marginVertical: 60,
    marginHorizontal: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20
  }
})

export default UserRegistration
