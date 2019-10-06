import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import TodoStack from './TodoStack';
import CompletedStack from './CompletedStack';
import ActivedStack from './ActivedStack';

const tabNavigator = createBottomTabNavigator(
  {
    CompletedStack,
    TodoStack,
    ActivedStack,
  },
  { 
    initialRouteName: 'TodoStack',
  }
);

tabNavigator.path = '';

export default tabNavigator;
