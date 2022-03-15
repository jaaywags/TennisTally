import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import NavBar from './src/components/NavBar';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
          <NavBar />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
