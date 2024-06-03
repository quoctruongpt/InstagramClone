import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigation} from './AppNavigation';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
