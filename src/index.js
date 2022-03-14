import React from 'react';
import {connect} from 'react-redux';
import CurrentGame from './components/CurrentGame';
import {Wrapper, ResetButtonText, ResetButton} from './styles';
import {resetEverything} from './actions/MatchActions/MatchActions';

const Entry = ({resetMatch}) => (
  <Wrapper>
    <ResetButton onPress={() => resetMatch()}>
      <ResetButtonText>Reset</ResetButtonText>
    </ResetButton>
    <CurrentGame />
  </Wrapper>
);

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  resetMatch: () => dispatch(resetEverything()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Entry);
