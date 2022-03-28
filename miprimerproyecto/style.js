import { StyleSheet } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

export default styles = StyleSheet.create({
    container: {
      flexDirection: 'column', 
      flex:1, 
      justifyContent: 'center', 
      alignItems: 'center',
      paddingTop: 100,
      paddingBottom: 100,
    },
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
    listItemContainer: {
      backgroundColor: "#BBBBBB",
      width: '90%', 
      flex: 4,
      alignItems: 'center',
      borderRadius: 20,
      margin: 10
    },
    listItem: {
      fontSize: 20
    },
    modalCentered: {
      flex:1, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalView: {
      borderWidth: 1,
      borderRadius: 20,
      width: 200,
      height: 200,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: "hidden"
    },
    tituloModal: {
      flex:2,
      backgroundColor: '#777777',
      width: '100%',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      // paddingLeft: 10,
      // paddingRight: 
    },
    cuerpoModal: {
      flex:8,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textoTitulo: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15
    },
    botonModal: {
      flex:2,
      paddingBottom: 15,
      flexDirection: 'row',
    }
});
