import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

// function goalInputHandler(enteredText) {
  // Changed the function above to and arrow function below.
const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
};

const addGoalHandler = () => {
  setCourseGoals(currentGoals => [
    ...currentGoals, 
    { key: Math.random().toString(), value: enteredGoal }
  ]);
};

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
  },
  listItem: {
    padding: 10,
    margin: 10, 
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
