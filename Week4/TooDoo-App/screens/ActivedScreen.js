import React from 'react';
import { ScrollView, StyleSheet, AsyncStorage, View } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import TodoItem from '../components/TodoItem'

class ActivedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
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
    else
      return (<View></View>)
  }
}

ActivedScreen.navigationOptions = {
  title: 'Actived',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 15,
  },
});

export default withNavigationFocus(ActivedScreen)