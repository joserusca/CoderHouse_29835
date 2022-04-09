import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constantes/colors';

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;