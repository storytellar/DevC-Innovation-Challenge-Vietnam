import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const ConversionTypeButton = ({
  to,
  from,
  toCurrency,
  fromCurrency,
  setConversionCurrencies
}) => {
  const isSelectedConversionType = fromCurrency === from && toCurrency === to;
  const backgroundColor = isSelectedConversionType ? 'lightblue' : null;
  const conditionalButtonStyle = { backgroundColor };

  const fromFlag = from === 'usd' ? '🇺🇸' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇸' : '🇻🇳';

  return (
    <TouchableOpacity
      style={[styles.button, conditionalButtonStyle]}
      onPress={() => setConversionCurrencies(from, to)}
    >
      <Text style={styles.buttonText}>
        {fromFlag} to {toFlag}
      </Text>
    </TouchableOpacity>
  );
};



export default function App() {
  const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
  const [convertedCurrencyValue, setConvertedValue] = useState(0);
  const [toCurrency, setToCurrency] = useState('usd');
  const [fromCurrency, setFromCurrency] = useState('vnd');


  const convertCurrency = () => {
    let value;
    if (fromCurrency === 'vnd') {
      value = currentCurrencyValue / 23000;
    } else {
      value = 23000 * currentCurrencyValue;
    }
    setConvertedValue(value);
  };
  
  const setConversionCurrencies = (from, to) => {
    setToCurrency(to);
    setFromCurrency(from);
  };

  useEffect(convertCurrency)

  return (
    <SafeAreaView style={styles.container}>
      <Text>Please enter the value of the currency you want to convert</Text>
      <TextInput
        onChangeText={setFromCurrencyValue}
        keyboardType="number-pad"
        style={{
          height: 60,
          padding: 5,
          width: 300,
          fontSize: 35,
          borderWidth: 1,
          borderColor: 'lightblue'
        }}
        autoFocus={true}
        textAlign="center"
        placeholder="100,000,000 VND"
        selectionColor="red"
      />
      <View>
        <Text>Current currency:</Text>
        <Text style={styles.currencyText}>{currentCurrencyValue}</Text>
        <Text>Conversion currenecy:</Text>
        <Text style={styles.currencyText}>{convertedCurrencyValue}</Text>
      </View>
      <ConversionTypeButton to={toCurrency} from={fromCurrency} setConversionCurrencies={setConversionCurrencies} />
      <ConversionTypeButton to={fromCurrency} from={toCurrency} setConversionCurrencies={setConversionCurrencies} />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#aaa'
  },
  button: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold'
  }
});

