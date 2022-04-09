import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView 
} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber ] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
    GrepeNuts: require('./assets/fonts/GrapeNuts-Regular.ttf'), 
  })

  console.log("Render");
  if(!loaded) return <AppLoading/>

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const handleRestart = () => {
    setUserNumber(null);
    setGuessRounds(0)
  }

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const handlerStartGame = value => {
    console.log("Set value: " + value);
    setUserNumber(value);
  }

  
  let content = <StartGameScreen onStartGame={handlerStartGame}/>

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen onEndGame={handleRestart} userOption={userNumber} onGameOver={handleGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handleRestart} />
  }
  
  return (
      <SafeAreaView style={styles.container}>
        <Header title="Adivina el numero"></Header>
        { content }
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
