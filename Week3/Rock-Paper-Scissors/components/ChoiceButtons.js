import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
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
                                {/* <Text style={styles.buttonText}>{choice.name}</Text> */}
                                <Image style={styles.choiceImage} source={choice.image}></Image>
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
        width: 70,
        margin: 25,
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#524848',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },

    choiceImage: {
        width: 120,
        height: 120,
        padding: 10,
        transform: [{ rotate: '20deg' }]
    },
});


export default ChoiceButtons
