import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import uuid from 'react-native-uuid';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {
  gameIncrementHomeTeam,
  gameIncrementVisitorTeam,
  gameDecrementHomeTeam,
  gameDecrementVisitorTeam,
} from '../actions/GameActions/GameActions';
import {
  decreaseSpecificSetForHomeTeam,
  increaseSpecificSetForHomeTeam,
  decreaseSpecificSetForVisitorTeam,
  increaseSpecificSetForVisitorTeam,
} from '../actions/SetActions/SetActions';
import {PlusMinus} from './shared';
import {
  Wrapper,
  SetSection,
  GameSection,
  HomeSection,
  VisitorSection,
  Label,
  LabelSmall,
  ModifyMatchScoreContainer,
  ModifyMatchScoreLabelContainer,
  ModifyMatchScoreLabel,
  ModifyMatchScoreText,
  ModifyScoreExtraCellText,
  Center,
  ModifyScoreCell,
  ModifyScoreExtraCell,
} from './styles';

const MatchSettings = ({
  homeTeam,
  visitorTeam,
  sets,
  homeTeamGameIncrement,
  homeTeamGameDecrement,
  visitorTeamGameIncrement,
  visitorTeamGameDecrement,
  decreaseSetForHomeTeam,
  increaseSetForHomeTeam,
  increaseSetForVisitorTeam,
  decreaseSetForVisitorTeam,
}) => {
  return (
    <Wrapper>
      <SetSection>
        <View>
          <Label>SETS</Label>
        </View>
        {!sets.length ? (
          <LabelSmall>No sets yet</LabelSmall>
        ) : (
          <ModifyMatchScoreContainer>
            <ModifyMatchScoreLabelContainer>
              <ModifyScoreCell color="#dedede">
                <ModifyMatchScoreLabel>Home: </ModifyMatchScoreLabel>
              </ModifyScoreCell>
              <ModifyScoreCell color="#dedede">
                <ModifyMatchScoreLabel>Visitor: </ModifyMatchScoreLabel>
              </ModifyScoreCell>
              <ModifyScoreExtraCell color="#dedede" />
            </ModifyMatchScoreLabelContainer>
            <FlatList
              horizontal={true}
              data={sets}
              renderItem={({item, index}) => {
                return (
                  <Center>
                    <ModifyScoreCell odd={(index + 1) % 2 === 0}>
                      <TouchableOpacity
                        onPress={() => increaseSetForHomeTeam(index)}>
                        <FontAwesomeIcon icon={faAngleUp} size={32} />
                      </TouchableOpacity>
                      <ModifyMatchScoreText odd={(index + 1) % 2 === 0}>
                        {item.home}
                      </ModifyMatchScoreText>
                      <TouchableOpacity
                        onPress={() => decreaseSetForHomeTeam(index)}>
                        <FontAwesomeIcon icon={faAngleDown} size={32} />
                      </TouchableOpacity>
                    </ModifyScoreCell>
                    <ModifyScoreCell odd={(index + 1) % 2 === 0}>
                      <TouchableOpacity
                        onPress={() => increaseSetForVisitorTeam(index)}>
                        <FontAwesomeIcon icon={faAngleUp} size={32} />
                      </TouchableOpacity>
                      <ModifyMatchScoreText odd={(index + 1) % 2 === 0}>
                        {item.visitor}
                      </ModifyMatchScoreText>
                      <TouchableOpacity
                        onPress={() => decreaseSetForVisitorTeam(index)}>
                        <FontAwesomeIcon icon={faAngleDown} size={32} />
                      </TouchableOpacity>
                    </ModifyScoreCell>
                    <ModifyScoreExtraCell>
                      <ModifyScoreExtraCellText>
                        {index + 1}
                      </ModifyScoreExtraCellText>
                    </ModifyScoreExtraCell>
                  </Center>
                );
              }}
              keyExtractor={() => uuid.v4()}
            />
          </ModifyMatchScoreContainer>
        )}
      </SetSection>
      <GameSection>
        <View>
          <Label>GAMES</Label>
        </View>
        <HomeSection>
          <PlusMinus
            minusBtnCallback={homeTeamGameDecrement}
            plusBtnCallback={homeTeamGameIncrement}
            label="HOME"
            value={homeTeam}
          />
        </HomeSection>
        <VisitorSection>
          <PlusMinus
            minusBtnCallback={visitorTeamGameDecrement}
            plusBtnCallback={visitorTeamGameIncrement}
            label="VISITOR"
            value={visitorTeam}
          />
        </VisitorSection>
      </GameSection>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  sets: state.sets.sets,
  homeTeam: state.games.homeTeam,
  visitorTeam: state.games.visitorTeam,
});
const mapDispatchToProps = dispatch => ({
  homeTeamGameIncrement: () =>
    dispatch(gameIncrementHomeTeam({updateWatch: true})),
  visitorTeamGameIncrement: () =>
    dispatch(gameIncrementVisitorTeam({updateWatch: true})),
  homeTeamGameDecrement: () =>
    dispatch(gameDecrementHomeTeam({updateWatch: true})),
  visitorTeamGameDecrement: () =>
    dispatch(gameDecrementVisitorTeam({updateWatch: true})),
  decreaseSetForHomeTeam: index =>
    dispatch(decreaseSpecificSetForHomeTeam({index, updateWatch: true})),
  increaseSetForHomeTeam: index =>
    dispatch(increaseSpecificSetForHomeTeam({index, updateWatch: true})),
  decreaseSetForVisitorTeam: index =>
    dispatch(decreaseSpecificSetForVisitorTeam({index, updateWatch: true})),
  increaseSetForVisitorTeam: index =>
    dispatch(increaseSpecificSetForVisitorTeam({index, updateWatch: true})),
});
export default connect(mapStateToProps, mapDispatchToProps)(MatchSettings);
