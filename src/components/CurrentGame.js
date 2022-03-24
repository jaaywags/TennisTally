import React from 'react';
import {Text, View, FlatList} from 'react-native';
import uuid from 'react-native-uuid';
import {connect} from 'react-redux';
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
          <Text>Home: </Text>
          <Text>Visitor: </Text>
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
          homeCallback={homeTeamSetIncrement}
          visitorCallback={visitorTeamSetIncrement}
          label="SETS"
        />
      </SetSection>
      <GameSection>
        <TeamWinnerBtn
          homeValue={homeTeamGames}
          visitorValue={visitorTeamGames}
          homeCallback={homeTeamGameIncrement}
          visitorCallback={visitorTeamGameIncrement}
          label="GAMES"
        />
      </GameSection>
      <CurrentGameSection>
        <View>
          <Label>Current Game</Label>
        </View>
        <HomeSection>
          <PlusMinus
            minusBtnCallback={homeTeamDecrement}
            plusBtnCallback={homeTeamIncrement}
            label="HOME"
            value={homeTeamScore}
          />
        </HomeSection>
        <VisitorSection>
          <PlusMinus
            minusBtnCallback={visitorTeamDecrement}
            plusBtnCallback={visitorTeamIncrement}
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
    dispatch(setIncrementHomeTeam({updateWatch: true})),
  visitorTeamSetIncrement: () =>
    dispatch(setIncrementVisitorTeam({updateWatch: true})),
  homeTeamGameIncrement: () =>
    dispatch(gameIncrementHomeTeam({updateWatch: true})),
  visitorTeamGameIncrement: () =>
    dispatch(gameIncrementVisitorTeam({updateWatch: true})),
});
export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);
