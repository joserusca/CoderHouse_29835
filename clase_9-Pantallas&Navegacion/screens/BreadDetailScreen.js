import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function BreadDetailScreen() {
  return (
    <View style={styles.screen}>
      <Text>Bread Detail Screen</Text>      
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


export default BreadDetailScreen;