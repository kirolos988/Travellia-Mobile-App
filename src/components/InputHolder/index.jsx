import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

function InputHolder({ type, placeholder, value, handleChange, style, name, editable}) {
  const [inputValue, setInputValue] = useState(value);

  const onChangeText = (text) => {
    // Use setInputValue to update the internal state
    setInputValue(type === 'numeric' ? text.replace(/[^0-9]/g, '') : text);

    // Pass the updated value to the parent component using handleChange
    handleChange(name, type === 'numeric' ? text.replace(/[^0-9]/g, '') : text);
  };

  return (
    
      <TextInput
        inputMode={type === 'numeric' ? 'numeric' : 'default'}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChangeText}
        style={style} // You can pass a style object for styling
        underlineColorAndroid="transparent" // Removes the underline on Android
        name={name}
        editable={editable}
      />
    
  );
}

export default InputHolder;
