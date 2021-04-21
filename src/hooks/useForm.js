import React, { useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Digite um email válido!'
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    message: 'Digite um CPF válido!'
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