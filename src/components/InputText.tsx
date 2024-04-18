import React from 'react';
import {Platform, StyleSheet, TextInput, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  titleplaceholder: string;
}

export default function InputText({titleplaceholder, ...rest}: InputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={titleplaceholder}
      placeholderTextColor="gray"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#161616',
    borderRadius: 5,
    padding: Platform.OS === 'ios' ? 20 : 15,
    width: '100%',
    color: 'white',
    fontSize: 18,
  },
});
