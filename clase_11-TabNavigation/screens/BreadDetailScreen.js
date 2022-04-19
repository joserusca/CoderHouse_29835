import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function BreadDetailScreen({route}) {
  const bread = route.params.bread;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
    </View>
  //   <View style={styles.screen}>
  //   <Text>Bread Detail Screen</Text>      
  // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  }
});


export default BreadDetailScreen;