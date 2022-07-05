import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({text, onPress, containerStyles}) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default Button;
