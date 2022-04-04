import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView 
} from 'react-native';
import Header from './components/Header';
import StartGamesScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Encabezado"></Header>
        <StartGamesScreen/>
      </View>
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
