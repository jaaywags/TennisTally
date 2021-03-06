import React, {useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faGear, faTrash} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import analytics from '@react-native-firebase/analytics';
import CurrentGame from './CurrentGame';
import MatchSettings from './MatchSettings';
import {resetEverything} from '../actions/MatchActions/MatchActions';

const Tab = createBottomTabNavigator();
const tabIcon = (screenName, color) => {
  switch (screenName) {
    case 'Home':
      return <FontAwesomeIcon icon={faHome} size={26} color={color} />;
    case 'Match':
      return <FontAwesomeIcon icon={faGear} size={26} color={color} />;
    case 'Reset':
      return <FontAwesomeIcon icon={faTrash} size={26} color={color} />;
  }
};

const ButtonScreen = () => null;

const NavBar = ({resetMatch}) => {
  const routeNameRef = useRef();
  const navigationRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <Tab.Navigator
        labeled={false}
        screenOptions={({route}) => ({
          showLabel: false,
          activeTintColor: '#ffffff',
          inactiveTintColor: '#c9c9c9',
          style: {
            backgroundColor: '#03a5fc',
          },
          tabBarIcon: ({color}) => tabIcon(route.name, color),
        })}
        initialRouteName="Home">
        <Tab.Screen
          name="Reset"
          options={{
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={async () => {
                  await analytics().logEvent('resetMatch', {});
                  resetMatch();
                }}
              />
            ),
          }}
          component={ButtonScreen}
        />
        <Tab.Screen
          name="Home"
          component={CurrentGame}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Match"
          component={MatchSettings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  resetMatch: () => dispatch(resetEverything()),
});
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
