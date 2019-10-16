import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CompletedScreen from '../screens/CompletedScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const CompletedStack = createStackNavigator(
    {
        Completed: CompletedScreen,
        TodoDetail: TodoDetailsScreen
    },
    config
);

CompletedStack.navigationOptions = {
    tabBarLabel: 'Completed',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-checkmark-circle' : 'md-checkmark-circle'} />
    ),
};


CompletedStack.path = '';

export default CompletedStack;