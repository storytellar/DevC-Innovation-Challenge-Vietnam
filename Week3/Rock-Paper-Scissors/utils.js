const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
  let Result = {
    text: '',
    flag: -2,
  };

  if (userChoice === 'rock') {
    Result.text = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'paper') {
    Result.text = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'scissors') {
    Result.text = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) Result.text = 'Tie game!';

  if (Result.text === 'Victory!') Result.flag = 1;
  else if (Result.text === 'Defeat!') Result.flag = -1;
  else Result.flag = 0;

  return Result;
};

const getNewStatistic = (result, oldStatistic) => {
  let newStatistic = {
    countTie: 0,
    countWin: 0,
    countLose: 0,
    percentageTie: 0,
    percentageWin: 0,
    percentageLose: 0,
  };

  newStatistic = oldStatistic;
  if (result.flag === 1) newStatistic.countWin++;
  else if (result.flag === -1) newStatistic.countLose++;
  else if (result.flag === 0) newStatistic.countTie++;

  let totaltime = newStatistic.countLose + newStatistic.countWin + newStatistic.countTie;
  newStatistic.percentageWin = Math.round(newStatistic.countWin * 100 / totaltime);
  newStatistic.percentageTie = Math.round(newStatistic.countTie * 100 / totaltime);
  newStatistic.percentageLose = Math.round(newStatistic.countLose * 100 / totaltime);

  return newStatistic;
};

export { randomComputerChoice, getRoundOutcome, getNewStatistic }