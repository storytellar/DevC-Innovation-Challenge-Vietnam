import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ChoiceButtons from './components/ChoiceButtons';
import ChoiceCard from './components/ChoiceCard';
import Header from './components/Header';
import DataCard from './components/DataCard';
import CHOICES from './choices';
import { randomComputerChoice, getRoundOutcome, getNewStatistic } from './utils'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userChoice: { image: require('./assets/all.png') },
      computerChoice: { image: require('./assets/all.png') },
      result: 'Make your choice',
      userStatistic: {
        countTie: 0,
        countWin: 0,
        countLose: 0,
        percentageTie: 0,
        percentageWin: 0,
        percentageLose: 0,
      },
    }
  }

  onChoicePress = (choice) => {
    const userChoice = CHOICES.find(item => item.name === choice);
    const computerChoice = randomComputerChoice();

    const result = getRoundOutcome(userChoice.name, computerChoice.name);
    const userStatistic = getNewStatistic(result, this.state.userStatistic);

    this.setState({
      userChoice,
      computerChoice,
      result: result.text,
      userStatistic,
    });
  }

  render() {
    // console.log(this.state.userStatistic);
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.dataArea}>
          <DataCard userStatistic={this.state.userStatistic} />
        </View>

        <View style={styles.playArea}>
          <View style={styles.choicesContainer}>
            <ChoiceCard
              playerName="YOU"
              choice={this.state.userChoice}
            />
            <Text>(vs)</Text>
            <ChoiceCard
              playerName="COMP"
              choice={this.state.computerChoice}
            />
          </View>
        </View>

        <View style={styles.header}>
          <Header result={this.state.result} />
        </View>

        <View style={styles.choiceButtons}>
          <ChoiceButtons onButtonPress={this.onChoicePress} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
  },
  dataArea: {
    flex: 0.15,
  },
  playArea: {
    flex: 0.45,
  },
  choiceButtons: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 100,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      height: 5,
      width: 5
    },
  },

});
