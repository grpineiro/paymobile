import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormField = ({ nameField, isNumeric, event, error, placeholder }) => {
  
  return (
    <View>
      <Text style={styles.container}>{nameField}</Text>
      <TextInput
        keyboardType={isNumeric ? "numeric" : "default"}
        style={styles.textInput}
        onChangeText={event}
        placeholder={placeholder}
      />
      {error && <Text>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
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
  });

export default FormField
