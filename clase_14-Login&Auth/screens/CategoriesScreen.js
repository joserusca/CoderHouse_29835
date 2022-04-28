import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GridItem from '../components/GridItem';
//import { CATEGORIES } from '../data/categories';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../store/actions/category.action';



function CategoriesScreen({navigation}) {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  const handledSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Bread', {
      //categoryID: item.id,
      name: item.title
    })
  }

  const renderGridItem = ({item}) => <GridItem item={item} onSelected={handledSelectedCategory}/>;

  return (
    <FlatList 
      data={categories}
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