import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {
  currentGameIncrementHomeTeam,
  currentGameDecrementHomeTeam,
  currentGameIncrementVisitorTeam,
  currentGameDecrementVisitorTeam,
} from '../actions/GameActions/GameActions';
import {
  setIncrementHomeTeam,
  setIncrementVisitorTeam,
} from '../actions/SetActions/SetActions';
import {
  Wrapper,
  WinnerSection,
  HomeSection,
  VisitorSection,
  Row,
  Label,
  MinusButton,
  PlusButton,
  ButtonText,
  ScoreText,
  HomeWinnerButton,
  VisitorWinnerButton,
  WinnerButtonText,
} from './styles';

const CurrentGame = ({
  homeTeamScore,
  visitorTeamScore,
  homeTeamIncrement,
  homeTeamDecrement,
  visitorTeamIncrement,
  visitorTeamDecrement,
  homeTeamSets,
  visitorTeamSets,
  homeTeamSetIncrement,
  visitorTeamSetIncrement,
}) => {
  return (
    <Wrapper>
      <WinnerSection>
        <View>
          <Label>WINNER</Label>
        </View>
        <Row>
          <HomeWinnerButton onPress={() => homeTeamSetIncrement()}>
            <WinnerButtonText>HOME</WinnerButtonText>
          </HomeWinnerButton>
          <VisitorWinnerButton onPress={() => visitorTeamSetIncrement()}>
            <WinnerButtonText>VISITOR</WinnerButtonText>
          </VisitorWinnerButton>
        </Row>
      </WinnerSection>
      <HomeSection>
        <View>
          <Label>HOME - {homeTeamSets}</Label>
        </View>
        <Row>
          <MinusButton onPress={homeTeamDecrement}>
            <ButtonText>-</ButtonText>
          </MinusButton>
          <ScoreText>
            <Text>{homeTeamScore}</Text>
          </ScoreText>
          <PlusButton onPress={() => homeTeamIncrement()}>
            <ButtonText>+</ButtonText>
          </PlusButton>
        </Row>
      </HomeSection>
      <VisitorSection>
        <View>
          <Label>VISITOR - {visitorTeamSets}</Label>
        </View>
        <Row>
          <MinusButton onPress={() => visitorTeamDecrement()}>
            <ButtonText>-</ButtonText>
          </MinusButton>
          <ScoreText>
            <Text>{visitorTeamScore}</Text>
          </ScoreText>
          <PlusButton onPress={() => visitorTeamIncrement()}>
            <ButtonText>+</ButtonText>
          </PlusButton>
        </Row>
      </VisitorSection>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  homeTeamScore: state.currentGame.homeTeamFriendly,
  visitorTeamScore: state.currentGame.visitorTeamFriendly,
  homeTeamSets: state.sets.homeTeam,
  visitorTeamSets: state.sets.visitorTeam,
});
const mapDispatchToProps = dispatch => ({
  homeTeamIncrement: () => dispatch(currentGameIncrementHomeTeam()),
  homeTeamDecrement: () => dispatch(currentGameDecrementHomeTeam()),
  visitorTeamIncrement: () => dispatch(currentGameIncrementVisitorTeam()),
  visitorTeamDecrement: () => dispatch(currentGameDecrementVisitorTeam()),
  homeTeamSetIncrement: () => dispatch(setIncrementHomeTeam()),
  visitorTeamSetIncrement: () => dispatch(setIncrementVisitorTeam()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CurrentGame);
