import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { TODOS } from '../constants/Utils'
import TodoItem from '../components/TodoItem'

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      {
        TODOS.map(item => {
          if (item.status === "Active")
            return (
              <TodoItem
                key={item.id}
                data={item}
                onPressForDetailButton={() => this.props.navigation.navigate("TodoDetail", { data: item })}
              />
            )
        })
      }
    </ScrollView>

    )
  }
}

SettingsScreen.navigationOptions = {
  title: 'Actived',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});
