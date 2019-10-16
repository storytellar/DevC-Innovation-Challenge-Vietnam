import React from 'react';
import { ScrollView, StyleSheet, View, AsyncStorage } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import { TODOS } from '../constants/Utils'
import TodoItem from '../components/TodoItem'

class CompletedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: '',
    }
  }

  componentWillMount = async () => {
    AsyncStorage.getItem('@Todolist')
      .then(todoList => this.setState({
        todoList: JSON.parse(todoList)
      })
      ).done()
  }

  render() {
    if (this.props.isFocused){
      AsyncStorage.getItem('@Todolist')
        .then(todoList => this.setState({
          todoList: JSON.parse(todoList)
        })
        ).done()
    }

    if (this.state.todoList.length > 0)
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {
            this.state.todoList.map(item => {
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
      )
    else
      return (<View></View>)
  }
}



CompletedScreen.navigationOptions = {
  title: 'Completed',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});

export default withNavigationFocus(CompletedScreen)