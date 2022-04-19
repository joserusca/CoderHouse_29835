import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const CartItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.name}</Text>
            </View>
            <View style={styles.detail}>
                <View>
                    <Text style={styles.text}>Cantidad: {item.quantity}</Text>
                    <Text style={styles.text}>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={ ()=>onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={COLORS.accent}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    header: {
        fontSize: 16,
        fontFamily: 'OpenSansBold'
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        fontFamily: 'OpenSans'
    }
})

export default CartItem;