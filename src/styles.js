import styled from 'styled-components/native';

export const ResetButton = styled.TouchableOpacity`
  background-color: #999999;
  color: #000000;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  position: relative;
`;

export const ResetButtonText = styled.Text`
  color: #000000;
`;
