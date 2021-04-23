import {StatusBar} from 'expo-status-bar'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Alert } from 'react-native'

import FormField from '../components/FormField'
import { Link } from '@react-navigation/native'
import globalStyle from '../styles/global'
import useForm from '../hooks/useForm'
import { openDatabase } from 'expo-sqlite'

const UserRegistration = () => {

  const db = openDatabase('AppDatabase.db')

  const cpf = useForm('cpf')
  const email = useForm('email')
  const name = useForm('name')
  const password = useForm('password')
  const confirmPassword = useForm('password')

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
  
  async function checkDate() {
    if (cpf.validate() === false) {
      Alert.alert("Informe um CPF")
      
    } else if (email.validate() === false) {
      Alert.alert("Informe um email")

    } else if (name.validate() === false) {
      Alert.alert("Informe o seu nome")

    } else if (password.validate() === false) {
      Alert.alert("Informe sua senha!")
    } else if (confirmPassword.validate() === false) {
      Alert.alert("Confirme a sua senha!")
    }
    
    else {
      try {
        db.transaction(data => {
          data.executeSql(
            'INSERT INTO table_user (user_name, age, email, cpf ,password, balance) VALUES (?,?,?,?,?,?)',
            [form.name, form.age, form.email, form.cpf, form.password, form.balance],
            (tx, results) => {
              console.log('Results', results.rowsAffected);
              if (results.rowsAffected > 0) {
                Alert.alert(
                  'Success',
                  'You are Registered Successfully',
                  [
                    {
                      text: 'Ok'
                    },
                  ],
                  { cancelable: false }
                );
              } else Alert.alert('Registration Failed')
            }
          )
        })
        
      } catch(e) {
        Alert.alert(error)
      }
    }
  }

  return (
    <ScrollView>
      <View>
        <StatusBar style="auto" />
        <FormField nameField={"Nome completo: "} event={text => (handleChange(text, "name"), name.onChange(text))} {...name} placeholder="name lastname" />
        <FormField nameField={"Idade: "} event={text => handleChange(text, "age")} isNumeric={true} />
        <FormField nameField={"Email: "} event={text=> (handleChange(text, "email"), email.onChange(text))} {...email} placeholder="exemple@exemple.com" />
        <FormField nameField={"CPF: "} event={text => (handleChange(text, "cpf"), cpf.onChange(text))} isNumeric={true} placeholder="000.000.000-00" {...cpf} />
        <FormField nameField={"Senha: "} event={text => (handleChange(text, "password"), password.onChange(text))} {...password} />
        <FormField nameField={"Confirme a senha: "} event={text => (handleChange(text, "confirmPassword"), confirmPassword.onChange(text))} {...confirmPassword}/>

        <TouchableOpacity style={globalStyle.button} onPress={() => checkDate()}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>

        
        <Link style={globalStyle.button} to="/login">Back</Link>

      </View>
    </ScrollView>
  )
}

export default UserRegistration
