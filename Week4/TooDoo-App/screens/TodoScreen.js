import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet, TextInput, Button, Alert, KeyboardAvoidingView, SafeAreaView, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import { TODOS } from '../constants/Utils'
import TodoItem from '../components/TodoItem'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class TodoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: TODOS,
            inputText: '',

        }
    }

    onChange = (text) => {
        this.setState({
            inputText: text
        })
    }

    onSubmit = () => {
        const newTodoItem = {
            body: this.state.inputText,
            status: 'Active',
            id: this.state.todoList.length + 1
        };
        const NewTodoList = [...this.state.todoList, newTodoItem];
        this.setState({
            todoList: NewTodoList,
            inputText: '',
        })
    }

    onDeleteTodo = id => {
        const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
        this.setState({
            todoList: newTodoList,
        })
    };

    onPressTodoItem = (item) => {
        let { id } = item;
        const { todoList } = this.state;
        const todo = todoList.find(todo => todo.id === id);
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList[foundIndex] = todo;
        const newTodoList = [...todoList];
        this.setState({
            todoList: newTodoList,
        })
    };

    onPressDetailItem = (item) => {
        setTimeout(() => {
            this.props.navigation.navigate("TodoDetail", { data: item });
        }, 10)
    }

    onLongPressTodoItem = (item) => {
        const prompt = `"${item.body}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => this.onDeleteTodo(item.id) }
            ],
            { cancelable: true }
        );
    }

    render() {
        return (
            <SafeAreaView>
                <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                    {
                        this.state.todoList.map(item => {
                            return (
                                <TodoItem
                                    key={item.id}
                                    data={item}
                                    onPressButton={() => this.onPressTodoItem(item)}
                                    onLongPressButton={() => this.onLongPressTodoItem(item)}
                                    onPressForDetailButton={() => this.onPressDetailItem(item)}
                                />
                            )
                        })
                    }
                    <View style={styles.newTodoWrapper}>
                        <MaterialIcons
                            name="create"
                            size={32}
                            style={styles.icon}
                            color="#aaa"
                            onPress={this.onSubmit}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={this.onChange}
                            value={this.state.inputText}
                            onSubmitEditing={this.onSubmit} />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    input: {
        paddingVertical: 15,
        paddingLeft: 10,
        width: 350,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    newTodoWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

TodoScreen.navigationOptions = {
    // header: null,
    title: 'Tasks',
};
