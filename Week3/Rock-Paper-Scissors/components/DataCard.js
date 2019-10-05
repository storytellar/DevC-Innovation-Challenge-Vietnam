import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DataCard = (props) => {
    return (
        <View style={styles.Wrapper}>
            <View style={[styles.headerBox]}>
                <Text style={[styles.headerText]}>STATISTICS</Text>
            </View>
            <View style={[styles.countBox]}>
                {/* <Text style={[styles.dataText]}>Win: {props.userStatistic.countWin}, lose: {props.userStatistic.countLose}, tie: {props.userStatistic.countTie}</Text> */}
                <Text style={[styles.dataText]}>Win: {props.userStatistic.countWin}</Text>
                <Text style={[styles.dataText, {position: 'absolute' , left: 115,}]}>Lose: {props.userStatistic.countLose}</Text>
                <Text style={[styles.dataText, {position: 'absolute' , left: 230,}]}>Tie: {props.userStatistic.countTie}</Text>
            </View>
            <View style={[styles.percentageBox]}>
                {/* <Text style={[styles.dataText]}>Win: {props.userStatistic.percentageWin}%, lose: {props.userStatistic.percentageLose}%, tie: {props.userStatistic.percentageTie}%</Text> */}
                <Text style={[styles.dataText]}>Win: {props.userStatistic.percentageWin}%</Text>
                <Text style={[styles.dataText, {position: 'absolute' , left: 115,}]}>Lose: {props.userStatistic.percentageLose}%</Text>
                <Text style={[styles.dataText, {position: 'absolute' , left: 230,}]}>Tie: {props.userStatistic.percentageTie}%</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        flex: 1,
        margin: 10,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 150,
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
        flexDirection: 'row',
    },
    dataText: {
        fontSize: 20,
        color: '#999',
        paddingLeft: 40,
    },
    percentageBox: {
        flex: 0.45,
        paddingLeft: 10,
        flexDirection: 'row',
    }
})


export default DataCard
