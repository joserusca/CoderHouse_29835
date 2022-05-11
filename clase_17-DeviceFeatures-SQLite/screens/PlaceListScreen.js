import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import PlaceItem from '../components/PlaceItem';
import * as addressAction from '../store/places.actions';

const PlaceListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    let places = useSelector(state => state.places);

    useEffect(() => {
        dispatch(addressAction.loadPlaces())
    }, [])

    const handlerDelete = (id) => {
        dispatch(addressAction.deletePlace(id))
    }

    const renderItem = ({item}) => (
        <PlaceItem
            title={item.title}
            image={item.image}
            address={item.address}
            onSelect={() => navigation.navigate('Detalle', {
                placeID: item.id
            })}
            onDelete={() => handlerDelete(item.id)}
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
