import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ActivedScreen from '../screens/ActivedScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';


const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });
  
  
  const ActivedStack = createStackNavigator(
    {
      Actived: ActivedScreen,
      TodoDetail: TodoDetailsScreen,
    },
    config
  );
  
  ActivedStack.navigationOptions = {
    tabBarLabel: 'Actived',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-walk' : 'md-walk'} />
    ),
  };
  
  ActivedStack.path = '';

  export default ActivedStack;