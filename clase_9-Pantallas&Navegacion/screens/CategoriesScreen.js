import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function CategoriesScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <Text>Category Screen</Text> 
      <Button title='Ir a Productos' onPress={ () => {
          navigation.navigate('Bread')
      }}/>     
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default CategoriesScreen;