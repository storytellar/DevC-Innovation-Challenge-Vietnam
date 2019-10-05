import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TodoDetailsScreen extends Component {
    render() {
        const {navigation} = this.props;
        const todoItem = navigation.getParam('data');
        const {
            id,
            body,
            status
        } = todoItem;
        return (
            <View>
                <Text> {id} . {body} . {status} </Text>
            </View>
        )
    }
}
