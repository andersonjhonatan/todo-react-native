import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity
      style={containerIpnutButton.button}
      activeOpacity={0.8}
      {...rest}>
      <Text style={containerIpnutButton.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const containerIpnutButton = StyleSheet.create({
  containerForButton: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00d9ff',
    borderRadius: 5,
    padding: Platform.OS === 'ios' ? 20 : 15,
    width: '100%',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
