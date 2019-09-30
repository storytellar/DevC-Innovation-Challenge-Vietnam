import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DataCard = (props) => {
    return (
        <View style={styles.Wrapper}>
            <View style={[styles.headerBox]}>
                <Text style={[styles.headerText]}>Statistics</Text>
            </View>
            <View style={[styles.countBox]}>
                <Text style={[styles.dataText]}>Win: {props.userStatistic.countWin}, lose: {props.userStatistic.countLose}, tie: {props.userStatistic.countTie}</Text>
            </View>
            <View style={[styles.percentageBox]}>
                <Text style={[styles.dataText]}>Win: {props.userStatistic.percentageWin}%, lose: {props.userStatistic.percentageLose}%, tie: {props.userStatistic.percentageTie}%</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
        borderWidth: 2,
        borderColor: '#aaa',
        backgroundColor: 'white',
    },
    headerBox:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '500',
        paddingTop: 10,
        color: '#aaa',
    },
    countBox: {
        flex: 0.25,
        paddingLeft: 10,
    },
    dataText: {
        fontSize: 20,
        color: '#999',
    },
    percentageBox: {
        flex: 0.45,
        paddingLeft: 10,
    }
})


export default DataCard
