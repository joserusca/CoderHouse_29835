import React, {useState, useEffect} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Keyboard,
    Button,
    Dimensions,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import Card from '../components/Card';
import color from '../constantes/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


function StartGameScreen(props){
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState('')

    const handlerTextChange = text => {
        setEnteredValue(text.replace(/[^0-9]/g, ''));
    } 

    const handlerResetInput = () => {
        setEnteredValue('');
        setConfirmed(false);    
    }

    const handlerConfirmInput = () => {
        const chooseNumber = parseInt(enteredValue);
        if(Number.isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber >= 99) {
            setEnteredValue('');
            setConfirmed(false); 
        } else {
            setConfirmed(true);
            setSelectedNumber(chooseNumber);
        }

        

    }

    const handleStartGame = () => {
        props.onStartGame(selectedNumber);
      }
    
    let confirmedOutput;
    if(confirmed) {
        confirmedOutput = (
            <Card style={{margin: 20}}>
                <Text>Tu Seleccion</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button onPress={handleStartGame} title="Start Game" color={color.primary}></Button>
            </Card>
        )
    }
    console.log("Render StartGemeScreen");
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={30}          
          style={styles.screen}
        >
        {/* <ScrollView> */}

        <View style={styles.screen}>
        
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Elija un numero</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    keyboardType='numeric'
                    autoCorrect={false}
                    autoCapitalization="none"
                    maxLength={2}
                    onChangeText={handlerTextChange}
                    value={enteredValue}
                />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Limpiar' color={color.accent} onPress={handlerResetInput} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirmar' style={styles.button} color={color.primary} onPress={handlerConfirmInput}/>
                        </View>
                    </View> 
                 
            </Card>
            { confirmedOutput }
    </View>
    {/* </ScrollView> */}
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'OpenSansBold',
        fontSize: 20,
        padding: 10,
    },
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    screenLandscape: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        padding: 20,
        alignItems: 'center'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    input: {
        width:'20%'
    },
    button: {
        width: Dimensions.get('window').width / 3,
    }
});

export default StartGameScreen;