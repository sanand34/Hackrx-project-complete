import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';

const Root = createStackNavigator();

const Router = ({client}) => {
  return (
    <Root.Navigator screenOptions={{headerShown: false}}>
      <Root.Screen component={BottomTabNav} name="HomeTabs" />
    </Root.Navigator>
  );
};

export default Router;
