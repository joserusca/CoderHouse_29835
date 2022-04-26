import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import BreadItem from '../components/BreadItem';
//import { BREADS } from '../data/breads';
import { useSelector, useDispatch } from 'react-redux'; 
import { filteredBread, selectBread } from '../store/actions/bread.action';


function CategoryBreadScreen({navigation}) {//, route}) {
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBread);
  //const breads = BREADS.filter( bread => bread.category === route.params.categoryID);
  const category = useSelector(state => state.categories.selected);

  useEffect( () => {
    console.log("Screen: " + category.id);
    dispatch(filteredBread(category.id));
  }, [])

  const handleSelect = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Detail', {      
      bread: item
    })
  }

  const renderItemBread = ({item}) => <BreadItem item={item} onSelected={handleSelect}/>;

  return (
    <FlatList
      data={categoryBreads}
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