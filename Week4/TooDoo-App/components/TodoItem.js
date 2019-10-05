import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export default class TodoItem extends Component {
    render(props) {
        const { data, onPressButton, onLongPressButton, onPressForDetailButton } = this.props;
        const status = data.status === 'Active' ? 
            {
                radioName: "radio-button-unchecked",
                radioColor: "#aaa",
                textColor: "#333745",
            } : 
            {
                radioName: "radio-button-checked",
                radioColor: '#fe5f55',
                textColor: "#aaa",
            } ;
        const body = data.body.length > 41 ? data.body.substr(0, 38) + '...' : data.body;
        
        return (
            <View style={styles.todoWrapper}>
                <TouchableOpacity
                    onPress={onPressButton}
                    onLongPress={onLongPressButton}>
                    <MaterialIcons
                        name={status.radioName}
                        size={32}
                        style={styles.icon}
                        color={status.radioColor}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={onPressForDetailButton}
                    onLongPress={onLongPressButton}
                >
                    <Text style={[styles.text, {color: status.textColor}]}>{body}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 15,
        paddingLeft: 10,
        width: 350,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    text: {
        fontWeight: '400',
        fontSize: 16,
    },
})

