import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class TodoDetailsScreen extends Component {
    render() {
        const { navigation } = this.props;
        const todoItem = navigation.getParam('data');
        const {
            id,
            body,
            status
        } = todoItem;
        const statusColor = status === "Active" ? "#fe5f55" : "#E63462";
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.body}>👉 {body}</Text>
                    <Text style={{color: statusColor}}>💡{status}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
        borderWidth: 0.1,
        borderColor: '#ddd',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    body: {
        fontSize: 20,
        color: "#333745"
    }
})
