import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ChoiceCard = (props) => {
    return (
        <View style={styles.choiceContainer}>
            <Text style={styles.choiceCardTitle}>{props.playerName}</Text>
            <Image style={styles.choiceImage} source={{uri:props.choice.uri}}></Image>
            <Text style={styles.choiceDescription}>{props.choice.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    choiceContainer: {
        flex: 1,
        alignItems: 'center',
      },
      choiceDescription: {
        fontSize: 25,
        color: '#250902',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
      },
      choiceCardTitle: {
        fontSize: 30,
        color: '#250902'
      },
      choiceImage: {
        width: 150,
        height: 150,
        padding: 10,
      },
})


export default ChoiceCard
