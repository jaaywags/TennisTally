/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  requireNativeComponent,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import NavBar from './src/components/NavBar';
// import {watchEvents} from 'react-native-watch-connectivity';
import {
  useReachability,
  sendMessageData,
  sendMessage,
  startFileTransfer,
  useInstalled,
  usePaired,
  watchEvents,
  watch,
  getIsPaired,
  getReachability,
} from 'react-native-watch-connectivity';

const App = () => {
  // const installed = useInstalled();
  // const reachable = useReachability();
  // const paired2 = usePaired();
  useEffect(() => {
    // const paired = async () => {
    //   const isPaired = await getIsPaired();
    //   if (isPaired) {
    //     console.log('phone is paired with a watch');
    //   } else {
    //     console.log('phone is NOT paired with a watch');
    //   }
    //   const isReachable = await getReachability();
    //   if (isReachable) {
    //     console.log('phone is isReachable with a watch');
    //   } else {
    //     console.log('phone is NOT isReachable with a watch');
    //   }
    // };

    const unsubscribe2 = watchEvents.addListener('message', (messageFromWatch, reply) => {
      console.log('messageFromWatch: ', messageFromWatch);
      reply({text: 'Thanks watch!'});
    });

    // paired();
  }, []);

  // watchEvents.on('paired', isPaired => {
  //   if (isPaired) {
  //     console.log('2phone is paired with a watch');
  //   } else {
  //     console.log('2phone is NOT paired with a watch');
  //   }
  // });
  // console.log('installed: ', installed);
  // console.log('reachable: ', reachable);
  // console.log('paired2: ', paired2);
  // watchEvents.on('installed', (c, d) => {
  //   console.log('c: ', c);
  //   console.log('d: ', d);
  // });
  // watchEvents.on('paired', (a, b) => {
  //   console.log('a: ', a);
  //   console.log('b: ', b);
  // });
  // const unsubscribe = watchEvents.on(
  //   'reachability',
  //   (err, watchIsReachable) => {
  //     if (!err) {
  //       // this.setState({watchIsReachable})
  //       console.log('watchIsReachable: ', watchIsReachable);
  //     } else {
  //       console.log('error getting watchReachability', err);
  //     }
  //   },
  // );

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
