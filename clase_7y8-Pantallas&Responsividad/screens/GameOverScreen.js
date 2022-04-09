import React, {useState, useEffect} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    Button,
    Dimensions,
    Image
} from 'react-native';
import Card from '../components/Card';


function GameOverScreen(props) {

    const { rounds, choice, onRestart } = props;
    const [isPortrait, setIsPortrait] = useState(true);

    const onPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    }

    const statePortrait = () => setIsPortrait(onPortrait());

    useEffect(() => {
        Dimensions.addEventListener('change', statePortrait);
        setIsPortrait(onPortrait());
        return () => {
            Dimensions.removeEventListener('change', statePortrait);
        }
    }, []);

    return (
    <View style={isPortrait ? styles.screen : styles.screenLandscape}>
        <Image
          style={isPortrait ? styles.image : styles.imageLandscape}
          source={require('../assets/GameOver.png')}
          resizeMode="contain"
        />
        <View style={styles.dataContainer}>
          <Card style={styles.resultContainer}>
            <Text>Intentos: {rounds}</Text>
            <Text>El número era: {choice}</Text>
          </Card>
          <Button title="NUEVO JUEGO" onPress={onRestart} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      screenLandscape: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      resultContainer: {
        marginBottom: 30,
        padding: 20,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
      },
      image: {
        //width: '80%',
        width: 300
        // height: 300,
      },
      imageLandscape: {
        width: '50%',
        height: 300,
      },
      dataContainer: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center'
      }
});

export default GameOverScreen;