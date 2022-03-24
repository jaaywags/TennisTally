/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
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
  updateCurrentGameFromWatch,
} from './src/actions/CurrentGameActions/CurrentGameActions';
import {
  setGamesFromWatch,
} from './src/actions/GameActions/GameActions';
import {
  completeSet,
  fixSetCountFromWatch,
} from './src/actions/SetActions/SetActions';
import {updateAppleWatchReachable} from './src/actions/WatchActions/WatchActions';

const App = ({
  updateIsAppleWatchReachable,
  setCurrentGameScoreFromWatch,
  setGamesScoreFromWatch,
  setSetScoreFromWatch,
  sets,
  fixSetCount,
}) => {
  // We need to setup a reference to sets for the watch listener callback.
  // Without it, the callback will only use the original sets object. If sets
  // changes, the callback will net get the updates. Using a ref fixes that.
  const stateRef = useRef();
  stateRef.currentSets = sets;

  // See if the apple watch is reachable
  const reachable = useReachability();
  useEffect(() => {
    updateIsAppleWatchReachable({isReachable: reachable});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachable]);

  // Listen for communication from the apple watch
  useEffect(() => {
    watchEvents.addListener('message', (messageFromWatch) => {
      if (messageFromWatch.score) {
        const score = JSON.parse(messageFromWatch.score);
        setCurrentGameScoreFromWatch(score);
        setGamesScoreFromWatch({home: score.homeTeamGames, visitor: score.visitorTeamGames});
        const homeSetsSum = stateRef.currentSets.filter(set => set.isHomeWinner).length;
        const visitorSetsSum = stateRef.currentSets.filter(set => !set.isHomeWinner).length;
        if (homeSetsSum !== score.homeTeamSets || visitorSetsSum !== score.visitorTeamSets) {
          let homeSets = [];
          for (let i = 0; i < score.homeTeamSets; i++) {
            homeSets.push({isHomeWinner: true, home: 0, visitor: 0});
          }

          let visitorSets = [];
          for (let i = 0; i < score.visitorTeamSets; i++) {
            visitorSets.push({isHomeWinner: false, home: 0, visitor: 0});
          }

          fixSetCount({sets: [...homeSets, ...visitorSets]});
        }
      }

      if (messageFromWatch.completeSet) {
        const set = JSON.parse(messageFromWatch.completeSet);
        setSetScoreFromWatch({
          home: set.home,
          visitor: set.visitor,
          isHomeWinner: set.isHomeWinner,
        });
        setGamesScoreFromWatch({home: 0, visitor: 0});
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

const mapStateToProps = state => ({
  sets: state.sets.sets,
});
const mapDispatchToProps = dispatch => ({
  updateIsAppleWatchReachable: ({isReachable}) => dispatch(updateAppleWatchReachable({isReachable})),
  setCurrentGameScoreFromWatch: (payload) => dispatch(updateCurrentGameFromWatch(payload)),
  setGamesScoreFromWatch: (payload) => dispatch(setGamesFromWatch(payload)),
  setSetScoreFromWatch: (payload) => dispatch(completeSet(payload)),
  fixSetCount: (payload) => dispatch(fixSetCountFromWatch(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
