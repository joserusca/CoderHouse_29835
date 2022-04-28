import React, { useEffect} from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, deleteOrder } from '../store/actions/order.action';
import ItemOrder from '../components/OrderItem';

const OrderScreen = ({navigation}) => {
    const orders = useSelector(state => state.order.items);
    const dispatch = useDispatch();

    const onHandlerDeleteItem = (id) => dispatch(deleteOrder(id));

    const renderItem = (itemData) => (
        <ItemOrder 
          item={itemData.item}
          onDelete={onHandlerDeleteItem}
        />
    )

    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', () => {        
        console.log("onFocus")
        dispatch(getOrders());
      });  
      return unsubscribe;      
    }, [navigation]);

    return (
        <View style={styles.container}>     
        <View style={styles.list}>
          <FlatList
            data={orders}
            renderItem={ renderItem }
            keyExtractor={item => item.id.toString()}
        />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: '#fff',
      paddingBottom: 120,
    },
    list: {
      flex: 1,
    },
    footer: {
      padding: 12,
      borderTopColor: '#ccc',
      borderTopWidth: 1,
    },
    confirm: {
      backgroundColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    total: {
      flexDirection: 'row'
    },
    text: {
      fontSize: 18,
      fontFamily: 'OpenSansBold',
      padding: 8,
    }
  });
  
  
  export default OrderScreen;