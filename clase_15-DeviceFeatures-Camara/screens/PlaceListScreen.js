import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = ({navigation}) => {
    let places = useSelector(state => state.places);

    // console.log(places.places);

    // useEffect(()=>{
    //     const unsubscribe = navigation.addListener('focus', () => {        
    //       console.log("onFocus")
    //       //places = useSelector(state => state.places);
    //       console.log(places.places);
    //     });  
    //     return unsubscribe;      
    //   }, [navigation]);

    const renderItem = ({item}) => (
        <PlaceItem
            title={item.title}
            image={item.image}
            address="123 street, City, Country"
            onSelect={() => navigation.navigate('Detalle')}
        />

    )

    return (
        <FlatList
            data={places.places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen
