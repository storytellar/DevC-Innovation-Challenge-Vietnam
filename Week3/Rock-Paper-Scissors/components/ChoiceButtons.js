import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CHOICES from '../choices'

const ChoiceButtons = (props) => {
    return (
        <View>
            <View style={styles.buttonContainer} >
                {
                    CHOICES.map(choice => {
                        return (
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                key={choice.name}
                                onPress={() => props.onButtonPress(choice.name)}
                            >
                                <Text style={styles.buttonText}>{choice.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonStyle: {
        width: 100,
        margin: 10,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#640D14',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },

});


export default ChoiceButtons
