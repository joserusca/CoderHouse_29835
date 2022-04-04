import React from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput
} from 'react-native';



function Input(props) {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height: 30,
        marginVertical: 10,

    }
});

export default Input;