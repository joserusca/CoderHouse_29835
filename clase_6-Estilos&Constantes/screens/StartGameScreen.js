import React, {useState} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import Card from '../components/Card';
import color from '../constantes/colors';
import Input from '../components/Input';



function StartGameScreen(){
    const [ enteredValue, setEnteredValue ] = useState('');

    const onHandlerTextChange = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    } 

    return (
        <View style={styles.screen}>
            <Text>Comenzar Juego</Text>
            {/* <View style={styles.inputContainer}> */}
            <Card style={styles.inputContainer}>
                <Text>Eliga un numero</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    keyboardType='numeric'
                    autoCorrect={false}
                    autoCapitalization="none"
                    maxLength={2}
                    onChangeText={onHandlerTextChange}
                    value={enteredValue}
                />
                    <View style={styles.buttonContainer}>
                        <Button title='Limpiar' color={color.accent}/>
                        <Button title='Confirmar' color={color.primary}/>
                    </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputContainer: {
        //backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        width:'20%'
    }
});

export default StartGameScreen;