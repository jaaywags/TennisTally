import React from 'react';
import {View} from 'react-native';
import {
  Row,
  Label,
  WinnerButtonText,
  HomeWinnerButton,
  VisitorWinnerButton,
} from '../styles';

export default ({
  homeValue,
  visitorValue,
  homeCallback,
  visitorCallback,
  label,
}) => (
  <>
    <View>
      <Label>
        {homeValue} - {label} - {visitorValue}
      </Label>
    </View>
    <Row>
      <HomeWinnerButton onPress={homeCallback}>
        <WinnerButtonText>HOME</WinnerButtonText>
      </HomeWinnerButton>
      <VisitorWinnerButton onPress={visitorCallback}>
        <WinnerButtonText>VISITOR</WinnerButtonText>
      </VisitorWinnerButton>
    </Row>
  </>
);
