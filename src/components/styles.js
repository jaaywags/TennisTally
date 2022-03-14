import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  background-color: #ebf2fa;
`;

export const WinnerSection = styled.View`
  width: 100%;
`;

export const HomeSection = styled.View`
  width: 100%;
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

export const MinusButton = styled.TouchableOpacity`
  min-width: 100px;
  padding: 10px;
  /*border-color: #b34747;
  border-width: 1px;
  border-style: solid;*/
  background-color: #b34747;
  align-items: center;
  height: 50px;
`;

export const PlusButton = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  color: black;
  background-color: #427bbd;
  /*border-color: #b34747;
  border-width: 1px;
  border-style: solid;*/
  align-items: center;
  height: 50px;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 24px;
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
