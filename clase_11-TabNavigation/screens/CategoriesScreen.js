import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import GridItem from '../components/GridItem';


function CategoriesScreen({navigation}) {
  const handledSelectedCategory = (item) => {
    navigation.navigate('Bread', {
      categoryID: item.id,
      name: item.title
    })
  }

  const renderGridItem = ({item}) => <GridItem item={item} onSelected={handledSelectedCategory}/>;

  return (
    <FlatList 
      data={CATEGORIES}
      keyExtractor={ item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />

    
    // <View style={styles.screen}>
    //   <Text>Category Screen</Text> 
    //   <Button title='Ir a Productos' onPress={ () => {
    //       navigation.navigate('Bread')
    //   }}/>     
    // </View>
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