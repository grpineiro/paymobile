import React, { useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Digite um email válido!'
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    message: 'Digite um CPF válido!'
  },
  name: {
    regex: /[A-Z][a-z]* [A-Z][a-z]*/,
    message: 'Digite seu nome completo!'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message: 'Digite uma senha válida! (1 letra maiscula, 1 letra minuscula, 1 caractere especial e 8 digitos)'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError("Preencha o campo!")
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange(valueSet) {
    if (error) validate(valueSet)
    setValue(valueSet)
  }

  return {value, setValue, error, onChange, onBlur: () => validate(value), validate: () => validate(value)}
}

export default useForm;