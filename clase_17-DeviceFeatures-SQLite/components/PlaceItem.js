import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Alert } from 'react-native';
import { COLORS } from '../constants';

const PlaceItem = ({ title, image, address, onSelect, onDelete}) => {
    // console.log(title);
    // console.log(image);
    const handlerDelete = () => {
        Alert.alert(
            "Direccion",
            "Desea Eliminar la direccion?",
            [
                {
                text: "NO",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "SI", onPress: () => { console.log("Delete Pressed"); onDelete(); }}
            ]        
        )
    }

    return (
        <TouchableOpacity
            onPress={onSelect}
            onLongPress={handlerDelete}
            style={styles.placeItem}
        > 
        {/* { isStatic:true, uri: 'image'} */}
            <Image style={styles.image} source={{isStatic:true, uri: image,}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text styles={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.PEACH_PUFF
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: COLORS.BLUSH,
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: '#777',
        fontSize: 16,
    }
})

export default PlaceItem;