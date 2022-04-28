import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from './store';

import MainNavigator from './navigation';

// async function fetchFonts() {
//   await Font.loadAsync({
//     'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }

export default function App() {
  const [loaded] = Font.useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  
  //const [fontLoaded, setFontLoaded] = useState(false)

  if(!loaded) return (   // si usan el otro metodo aca va fontLoaded     
    <AppLoading
      // startAsync={fetchFonts}
      // onFinish={() => setFontLoaded(true)}
      // onError={console.warn}
    />
  )

  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}


