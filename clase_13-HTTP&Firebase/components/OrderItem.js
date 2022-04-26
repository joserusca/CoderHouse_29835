import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../constants/colors'

const formatDay = (time) => {
    const date = new Date(time)
    return date.toLocaleDateString()
}

const sumTotal= (list) => list.map(item => item.quantity*item.price).reduce((a,b) => a + b, 0)

const OrderItem = ({item, onDelete}) => {
    return (
        <View style={styles.item}>
                <View style={styles.detail}>
                    <View>
                        <Text>{formatDay(item.date)}</Text>
                        <Text style={styles.header}>$ {sumTotal(item.items)}</Text>
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
        padding: 12,
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


export default OrderItem
