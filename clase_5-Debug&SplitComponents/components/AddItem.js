import React, {useState } from 'react';
import { 
    View, 
    TextInput, 
    Button, 
    StyleSheet
  } from 'react-native';

function AddItem(props) {      
    const [ textItem, setTextItem ] = useState('');  
    const { onAddItem } = props;
    const onHandlerChangeItem = (texto) => setTextItem(texto);

    const onHandlerAddItem = () => {
      console.log("Add: " + textItem);
      setTextItem('');
      onAddItem(textItem);
    }

    return (
    <View style={styles.addItemContainer}>
    <TextInput 
        placeholder='Ingrese un item.' 
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
        />
    <Button title="Agregar" onPress={onHandlerAddItem}/>
  </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth:1, 
        borderBottomColor: 'black', 
        width:'100%', 
        margin:5,
        fontSize: 20
      },
      addItemContainer: {
        padding: 20,
        width: '90%',
        backgroundColor: "#DDDDDD", 
        borderRadius: 20, 
        margin: 10
      },
})

export default AddItem;