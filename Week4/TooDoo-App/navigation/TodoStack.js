import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const TodoStack = createStackNavigator(
    {
        Todo: TodoScreen,
        TodoDetail: TodoDetailsScreen
    },
    config
);

TodoStack.navigationOptions = {
    tabBarLabel: 'TodoList',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

TodoStack.path = '';

export default TodoStack;