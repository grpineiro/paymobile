import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormField = ({ nameField, isNumeric, event }) => {
  
  return (
    <View>
      <Text style={styles.container}>{nameField}</Text>
      <TextInput
        keyboardType={isNumeric ? "numeric" : "default"}
        style={styles.textInput}
        onChangeText={event}
      />
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
