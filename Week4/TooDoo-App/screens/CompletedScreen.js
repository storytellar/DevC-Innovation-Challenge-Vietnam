import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { TODOS } from '../constants/Utils'
import TodoItem from '../components/TodoItem'

export default class LinksScreen extends React.Component {
  render() {
    console.log();
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          
          
          TODOS.map(item => {
            if (item.status === "Done")
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
    );
  }
}



LinksScreen.navigationOptions = {
  title: 'Completed',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});
