import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

//import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLAR: 0.013,
  EURO: 0.011,
  POUND: 0.0098,
  RUBEL: 0.99,
  AUSDOLLAR: 0.018,
  CANDOLLAR: 0.017,
  YEN: 1.48,
  DINAR: 0.004,
  BITCOIN: 0.000004,
};

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      Alert.alert('Sorry!!!', 'Please insert a Value', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      // return Snackbar.show({
      //   text: 'Please enter a value',
      //   backgroundColor: '#EA7773',
      //   textColor: '#FFFFFF',
      // });
    }

    let result = parseFloat(inputValue) * currencyPerRupee[currency];

    setResultValue(result.toFixed(2));
  };

  return (
    <>
      <ScrollView
        backgroundColor="#1b262c"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={inputValue =>
                setInputValue(inputValue)
              }></TextInput>
          </View>

          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                onPress={() => buttonPressed(currency)}
                key={currency}
                style={styles.convertButton}>
                <Text style={styles.convertButtonText}> {currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },

  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },

  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },

  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },

  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },

  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  convertButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
  },

  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
    backgroundColor: '#0f4c75',
  },
});
