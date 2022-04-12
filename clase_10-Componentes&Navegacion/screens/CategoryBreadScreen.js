import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { BREADS } from '../data/breads';
import BreadItem from '../components/BreadItem'; 

function CategoryBreadScreen({navigation, route}) {
  const breads = BREADS.filter( bread => bread.category === route.params.categoryID);

  const handleSelect = (item) => {
    navigation.navigate('Detail', {
      productID: item.id,
      bread: item
    })
  }

  const renderItemBread = ({item}) => <BreadItem item={item} onSelected={handleSelect}/>;

  return (
    <FlatList
      data={breads}
      keyExtractor={ item => item.id}
      renderItem={renderItemBread}
      />
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