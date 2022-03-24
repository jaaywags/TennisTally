import React from 'react';
import {View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';
import {
  Row,
  LabelSmall,
  MinusButton,
  PlusButton,
  ScoreText,
  ScoreTextValue,
} from '../styles';

export default ({minusBtnCallback, plusBtnCallback, label, value}) => (
  <>
    <View>
      <LabelSmall>{label}</LabelSmall>
    </View>
    <Row>
      <MinusButton onPress={minusBtnCallback}>
        <FontAwesomeIcon icon={faMinus} size={26} />
      </MinusButton>
      <ScoreText>
        <ScoreTextValue>{value}</ScoreTextValue>
      </ScoreText>
      <PlusButton onPress={plusBtnCallback}>
        <FontAwesomeIcon icon={faPlus} size={26} />
      </PlusButton>
    </Row>
  </>
);
