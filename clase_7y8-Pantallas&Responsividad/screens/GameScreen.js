import React, {useState, useRef, useEffect} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Button,
    Alert
} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import colors from '../constantes/colors';

const generateNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNumber = Math.floor(Math.random() * (max - min) + min );
    if(rndNumber===exclude)
        return generateNumber(min, max, exclude);
    else 
        return rndNumber;
}

function GameScreen(props) {
    const { userOption, onGameOver } = props;
    const [ currentGuess, setCurrentGuess] = useState(generateNumber(1,100, userOption));

    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        console.log("CurrentGuess: " + currentGuess);
        console.log("UserOption: " + userOption);
        //console.log(currentGuess);
        if (currentGuess === userOption) onGameOver(rounds);
      }, [currentGuess, userOption, onGameOver]);
    

    const handleNextGuess = (direction) => {
        console.log(direction);
        if (
          (direction === 'lower' && currentGuess < userOption) ||
          (direction === 'greater' && currentGuess > userOption)
        ) {
          Alert.alert('No es correcto!', 'Esa no es la seleccion correcta!.', [{
            text: 'Disculpa!',
            style: 'cancel',
          }]);
          return;
        }
    
        if (direction === 'lower') {
          currentHigh.current = currentGuess;
        } else {
          currentLow.current = currentGuess;
        }
    
        const nextNumber = generateNumber(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(round => round + 1);
      }

    return (
        <View style={styles.screen}>
            <Text>La suposicion del oponente</Text>
            <NumberContainer> {currentGuess} </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Menor' color={colors.primary} onPress={handleNextGuess.bind(this, 'lower')}></Button>
                <Button title='Mayor' color={colors.primary} onPress={handleNextGuess.bind(this, 'greater')}></Button>
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        padding: 10,
        width: 300,
        maxWidth: '80%',
        marginBottom: 10,
      }
})

export default GameScreen;