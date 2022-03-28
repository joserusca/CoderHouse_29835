import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  Button, 
  FlatList, 
  Modal
} from 'react-native';
import './style';

export default function App() {
  const [ counter, setCounter ] = useState(3);
  const [ textItem, setTextItem ] = useState();
  const [ listItem, setListItem ] = useState([{id:1, value:'Juan'},{id:2, value:'Pedro'}]);
  const [ itemSelected, setItemSelected ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);

  const onHandlerChangeItem = (texto) => setTextItem(texto);
  const onHandlerDelete = id => { 
      setListItem( currenItems => currenItems.filter( item => item.id !== id ));
      setItemSelected({});
      setModalVisible(!modalVisible);
  }
  const onHandlerModal = id => {
    setItemSelected(listItem.filter( item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  }  

  const closeModal = () => {
    setModalVisible(!modalVisible);
  }
  const addItem = () => {
    if(textItem!=="") {
      setListItem( currenItems => 
        [...currenItems, {id: counter, value: textItem}]        
      )
      setTextItem('');
      setCounter(counter + 1);
    }
  }

  //const renderItem = data => <Texto key={data.item.id} id={data.item.id} value={data.item.value}></Texto>
  const renderItem = data => <Text style={styles.listItem} onPress={onHandlerModal.bind(this, data.item.id)}>* {data.item.value} ({data.item.id})</Text>
  return (
    <View style={styles.container}>
      <View style={styles.addItemContainer}>
        <TextInput 
            placeholder='Ingrese un item.' 
            style={styles.input}
            value={textItem}
            onChangeText={onHandlerChangeItem}
            />
        <Button title="Agregar" onPress={addItem}/>
      </View>
      
      <View style={styles.listItemContainer}>
        <FlatList
          data={listItem}
          renderItem={renderItem}
          keyExtractor={ item => item.id }
        />{/* <ScrollView>{
        listItem.map( item => <Texto key={item.id} value={item.value}></Texto> )
        }
      </ScrollView> */}
      </View>
      <Modal

        transparent={true}
        animationType='slide'
        visible={modalVisible}>
        <View style={styles.modalCentered}>
          <View style={styles.modalView}>
         <View style={styles.tituloModal}>
          <Text style={styles.textoTitulo}>Titulo Modal</Text><Text style={styles.textoTitulo} onPress={closeModal.bind(this)}>X</Text>
        </View>
        <View style={styles.cuerpoModal}>
          <View>
            <Text>Desea Borrar el item?</Text>
          </View>
          <View>
            <Text>{itemSelected.value}</Text>
          </View>
          </View>
          <View style={styles.botonModal}>
            <Text>
              <Button title='Confirmar' onPress={onHandlerDelete.bind(this, itemSelected.id)} />
            </Text>  
          </View>
        
        </View>
        </View>
      </Modal>
    </View>
  );
}

// function Texto(props) {
//   return <Text style={styles.listItem} onPress={onHandlerModal.bind(this, props.id)}>{props.id}) {props.value}</Text>
// }

