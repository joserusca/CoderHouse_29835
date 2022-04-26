import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../store/actions/cart.action'; 

function BreadDetailScreen() { //{route}
  const dispatch = useDispatch();
  
  //const bread = route.params.bread;
  //const bread = useSelector(state => state.breads.selected);
  const bread = useSelector(state => state.breads.selected)
  

  const handlerAddItemCart = () => dispatch(addItem(bread));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
      <TouchableOpacity onPress={handlerAddItemCart}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Agregar Al Carrito</Text>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  button: {
    width: 200,
    padding: 15,
    margin: 15,    
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#bbb'
  },
  textButton: {
    fontFamily: 'OpenSansBold',
  }
});


export default BreadDetailScreen;