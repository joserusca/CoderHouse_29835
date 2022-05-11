import React, { useLayoutEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons'

const MapScreen = ({navigation}) => {
    const [ selectedLocation, setSelectedLocation ] = useState();
    const initialRegion = {
        latitude: 37.4219023,
        longitude: -122.0839984,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const handlerSaveSelection = () => {
        if(selectedLocation) {
            navigation.navigate('Nuevo', {mapLocation: selectedLocation});
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handlerSaveSelection}>
                    <Ionicons name="md-save-outline" color="white" size={22}/>
                </TouchableOpacity>
            )
        })
    }, [navigation, handlerSaveSelection]);

    const handlerSelectLocation = event => {
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }

    return (
        <MapView 
            initialRegion={initialRegion} 
            style={styles.container}
            onPress={handlerSelectLocation}
        >
            {selectedLocation && (
                <Marker
                    title="Ubicacion Seleccionada"
                    coordinate={{
                        latitude: selectedLocation.lat,
                        longitude: selectedLocation.lng
                    }}
                />
            )
            }
        </MapView>
        // <View style={styles.container}>
        //     <Text>Map View</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapScreen
