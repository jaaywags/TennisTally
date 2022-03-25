import React from 'react';
import {View, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {connect} from 'react-redux';
import analytics from '@react-native-firebase/analytics';
import {
  currentGameIncrementHomeTeam,
  currentGameDecrementHomeTeam,
  currentGameIncrementVisitorTeam,
  currentGameDecrementVisitorTeam,
} from '../actions/CurrentGameActions/CurrentGameActions';
import {
  gameIncrementHomeTeam,
  gameIncrementVisitorTeam,
} from '../actions/GameActions/GameActions';
import {
  setIncrementHomeTeam,
  setIncrementVisitorTeam,
} from '../actions/SetActions/SetActions';
import {PlusMinus, TeamWinnerBtn} from './shared';
import {
  Wrapper,
  MatchScoreContainer,
  MatchScoreText,
  MatchScoreLabelContainer,
  SetSection,
  GameSection,
  HomeSection,
  VisitorSection,
  Label,
  CurrentGameSection,
  MatchScoreLabelText,
} from './styles';

const CurrentGame = ({
  homeTeamScore,
  visitorTeamScore,
  homeTeamIncrement,
  homeTeamDecrement,
  visitorTeamIncrement,
  visitorTeamDecrement,
  sets,
  homeTeamGames,
  visitorTeamGames,
  homeTeamSetIncrement,
  visitorTeamSetIncrement,
  homeTeamGameIncrement,
  visitorTeamGameIncrement,
}) => {
  const homeSetsSum = sets.filter(set => set.isHomeWinner).length;
  const visitorSetsSum = sets.filter(set => !set.isHomeWinner).length;
  return (
    <Wrapper>
      <MatchScoreContainer>
        <MatchScoreLabelContainer>
          <MatchScoreLabelText>Home: </MatchScoreLabelText>
          <MatchScoreLabelText>Visitor: </MatchScoreLabelText>
        </MatchScoreLabelContainer>
        <FlatList
          horizontal={true}
          data={sets}
          renderItem={({item}) => {
            return (
              <View>
                <MatchScoreText bold={item.isHomeWinner}>
                  {item.home}
                </MatchScoreText>
                <MatchScoreText bold={!item.isHomeWinner}>
                  {item.visitor}
                </MatchScoreText>
              </View>
            );
          }}
          keyExtractor={() => uuid.v4()}
        />
      </MatchScoreContainer>
      <SetSection>
        <TeamWinnerBtn
          homeValue={homeSetsSum}
          visitorValue={visitorSetsSum}
          homeCallback={async () => {
            await analytics().logEvent('modifySets', {
              screen: 'Home',
              action: 'Increment',
              team: 'Home',
              homeSetsSum,
              visitorSetsSum,
            });
            homeTeamSetIncrement();
          }}
          visitorCallback={async () => {
            await analytics().logEvent('modifySets', {
              screen: 'Home',
              action: 'Increment',
              team: 'Visitor',
              homeSetsSum,
              visitorSetsSum,
            });
            visitorTeamSetIncrement();
          }}
          label="SETS"
        />
      </SetSection>
      <GameSection>
        <TeamWinnerBtn
          homeValue={homeTeamGames}
          visitorValue={visitorTeamGames}
          homeCallback={async () => {
            await analytics().logEvent('modifyGames', {
              screen: 'Home',
              action: 'Increment',
              team: 'Home',
              homeTeamGames,
              visitorTeamGames,
            });
            homeTeamGameIncrement();
          }}
          visitorCallback={async () => {
            await analytics().logEvent('modifyGames', {
              screen: 'Home',
              action: 'Increment',
              team: 'Visitor',
              homeTeamGames,
              visitorTeamGames,
            });
            visitorTeamGameIncrement();
          }}
          label="GAMES"
        />
      </GameSection>
      <CurrentGameSection>
        <View>
          <Label>Current Game</Label>
        </View>
        <HomeSection>
          <PlusMinus
            minusBtnCallback={async () => {
              await analytics().logEvent('modifyCurrentGame', {
                screen: 'Home',
                action: 'Decrement',
                team: 'Home',
                homeTeamScore,
                visitorTeamScore,
              });
              homeTeamDecrement();
            }}
            plusBtnCallback={async () => {
              await analytics().logEvent('modifyCurrentGame', {
                screen: 'Home',
                action: 'Increment',
                team: 'Home',
                homeTeamScore,
                visitorTeamScore,
              });
              homeTeamIncrement();
            }}
            label="HOME"
            value={homeTeamScore}
          />
        </HomeSection>
        <VisitorSection>
          <PlusMinus
            minusBtnCallback={async () => {
              await analytics().logEvent('modifyCurrentGame', {
                screen: 'Home',
                action: 'Decrement',
                team: 'Visitor',
                homeTeamScore,
                visitorTeamScore,
              });
              visitorTeamDecrement();
            }}
            plusBtnCallback={async () => {
              await analytics().logEvent('modifyCurrentGame', {
                screen: 'Home',
                action: 'Increment',
                team: 'Visitor',
                homeTeamScore,
                visitorTeamScore,
              });
              visitorTeamIncrement();
            }}
            label="VISITOR"
            value={visitorTeamScore}
          />
        </VisitorSection>
      </CurrentGameSection>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  homeTeamScore: state.currentGame.homeTeamFriendly,
  visitorTeamScore: state.currentGame.visitorTeamFriendly,
  sets: state.sets.sets,
  homeTeamGames: state.games.homeTeam,
  visitorTeamGames: state.games.visitorTeam,
});
const mapDispatchToProps = dispatch => ({
  homeTeamIncrement: () =>
    dispatch(currentGameIncrementHomeTeam({updateWatch: true})),
  homeTeamDecrement: () =>
    dispatch(currentGameDecrementHomeTeam({updateWatch: true})),
  visitorTeamIncrement: () =>
    dispatch(currentGameIncrementVisitorTeam({updateWatch: true})),
  visitorTeamDecrement: () =>
    dispatch(currentGameDecrementVisitorTeam({updateWatch: true})),
  homeTeamSetIncrement: () =>
    dispatch(setIncrementHomeTeam({updateWatch: true, isHomeWinner: true})),
  visitorTeamSetIncrement: () =>
    dispatch(setIncrementVisitorTeam({updateWatch: true, isHomeWinner: false})),
  homeTeamGameIncrement: () =>
    dispatch(gameIncrementHomeTeam({updateWatch: true})),
  visitorTeamGameIncrement: () =>
    dispatch(gameIncrementVisitorTeam({updateWatch: true})),
});
export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);
