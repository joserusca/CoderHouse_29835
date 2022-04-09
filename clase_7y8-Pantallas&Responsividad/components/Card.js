import React from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';


function Card(props) {
    return (
        <View style={{...styles.inputContainer, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#ccdbdd',
        // Para iOS
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowRadius: 6,
        // shadowOffset: {width: 3, height: 2},
        elevation: 10,
        width: 300,
        padding: 20,
        borderRadius: 20,

    },
});

export default Card;