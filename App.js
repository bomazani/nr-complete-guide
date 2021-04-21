import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

// function goalInputHandler(enteredText) {
  // Changed the function above to and arrow function below.
const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
}

  return (
    <View style={styles.screen}>
      <view stlye={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
      <Button title="ADD" />
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
