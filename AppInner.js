/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  useReachability,
  watchEvents,
} from 'react-native-watch-connectivity';
import NavBar from './src/components/NavBar';
import {
  currentGameIncrementHomeTeam,
  currentGameIncrementVisitorTeam,
} from './src/actions/CurrentGameActions/CurrentGameActions';
import {
  gameIncrementHomeTeam,
  gameIncrementVisitorTeam,
} from './src/actions/GameActions/GameActions';
import {
  setIncrementHomeTeam,
  setIncrementVisitorTeam,
} from './src/actions/SetActions/SetActions';
import {updateAppleWatchReachable} from './src/actions/WatchActions/WatchActions';

const App = ({
  homeTeamIncrement,
  visitorTeamIncrement,
  homeTeamSetIncrement,
  visitorTeamSetIncrement,
  homeTeamGameIncrement,
  visitorTeamGameIncrement,
  updateIsAppleWatchReachable,
}) => {
  const reachable = useReachability();
  useEffect(() => {
    updateIsAppleWatchReachable({isReachable: reachable});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachable]);
  useEffect(() => {
    watchEvents.addListener('message', (messageFromWatch) => {
      console.log('messageFromWatch: ', messageFromWatch);
      switch (messageFromWatch.text) {
        case 'INCREASE_HOME_CURRENT_GAME': {
          console.log('test1');
          homeTeamIncrement();
          return;
        }
        case 'INCREASE_VISITOR_CURRENT_GAME': {
          console.log('test2');
          visitorTeamIncrement();
          return;
        }
        case 'INCREASE_HOME_GAME': {
          console.log('test3');
          homeTeamGameIncrement();
          return;
        }
        case 'INCREASE_VISITOR_GAME': {
          console.log('test4');
          visitorTeamGameIncrement();
          return;
        }
        case 'INCREASE_HOME_SET': {
          console.log('test5');
          homeTeamSetIncrement();
          return;
        }
        case 'INCREASE_VISITOR_SET': {
          console.log('test6');
          visitorTeamSetIncrement();
          return;
        }
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  homeTeamIncrement: () => dispatch(currentGameIncrementHomeTeam()),
  visitorTeamIncrement: () => dispatch(currentGameIncrementVisitorTeam()),
  homeTeamSetIncrement: () => dispatch(setIncrementHomeTeam()),
  visitorTeamSetIncrement: () => dispatch(setIncrementVisitorTeam()),
  homeTeamGameIncrement: () => dispatch(gameIncrementHomeTeam()),
  visitorTeamGameIncrement: () => dispatch(gameIncrementVisitorTeam()),
  updateIsAppleWatchReachable: ({isReachable}) => dispatch(updateAppleWatchReachable({isReachable})),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
