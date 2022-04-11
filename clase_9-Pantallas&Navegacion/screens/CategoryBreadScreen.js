import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function CategoryBreadScreen({navigation}) {
  return (
    <View style={styles.screen}>
      <Text>Category Bread Screen</Text>   
      <Button title='Ir a Detalle' onPress={ () => {
          navigation.navigate('Detail')
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


export default CategoryBreadScreen;