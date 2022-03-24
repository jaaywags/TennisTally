import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  background-color: #ebf2fa;
`;

export const Center = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MatchScoreContainer = styled.View`
  width: 100%;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
`;

export const MatchScoreText = styled.Text`
  margin-left: 5px;
  font-weight: ${({bold}) => (bold ? 600 : 100)};
  color: #a3a3a3;
`;

export const MatchScoreLabelContainer = styled.View`
  background-color: #dedede;
`;

export const MatchScoreLabelText = styled.Text`
  color: #a3a3a3;
`;

export const ModifyMatchScoreContainer = styled.View`
  width: 100%;
  flex-direction: row;
  height: 250px;
`;

export const ModifyMatchScoreLabelContainer = styled.View`
  background-color: #dedede;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ModifyMatchScoreLabel = styled.Text`
  font-size: 26px;
  color: #a3a3a3;
`;

export const ModifyMatchScoreText = styled.Text`
  font-size-: 26px;
  color: ${({odd}) => (odd ? '#a3a3a3' : '#ffffff')};
`;

export const ModifyScoreCell = styled.View`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({color, odd}) => (color ? color : odd ? '' : '#a3a3a3')};
`;
export const ModifyScoreExtraCell = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ModifyScoreExtraCellText = styled.Text`
  color: #a3a3a3;
`;

export const SetSection = styled.View`
  width: 100%;
`;

export const GameSection = styled.View`
  width: 100%;
`;

export const CurrentGameSection = styled.View`
  width: 100%;
`;

export const HomeSection = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const VisitorSection = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
  font-weight: 600;
  color: #242424;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`;

export const LabelSmall = styled.Text`
  font-weight: 600;
  color: #525252;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

export const MinusButton = styled.TouchableOpacity`
  min-width: 100px;
  padding: 10px;
  background-color: #b34747;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const PlusButton = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  background-color: #427bbd;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const ScoreText = styled.View`
  border-top-color: #dedede;
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-color: #dedede;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  height: 50px;
  width: 90px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScoreTextValue = styled.Text`
  color: black;
`;

export const HomeWinnerButton = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  color: black;
  background-color: #427bbd;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const VisitorWinnerButton = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  color: black;
  background-color: #b34747;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const WinnerButtonText = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;
