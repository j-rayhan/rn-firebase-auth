import moment from 'moment';
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Expense} from '../../Types';

interface Button {
  label: string;
  onPress: () => void;
}
export const Button: React.FC<Button> = ({label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignSelf: 'center',
        backgroundColor: 'rgba(81,135,200,1)',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginVertical: 10,
      }}>
      <Text style={{color: 'white', fontWeight: '600'}}>{label}</Text>
    </TouchableOpacity>
  );
};
interface ExpenseForm {
  handleSubmit: (v: Expense) => void;
}
const ExpenseForm: React.FC<ExpenseForm> = ({handleSubmit}) => {
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [amount, setAmount] = React.useState<number>(0);
  const handleAdd = () => {
    const values: Expense = {
      id: new Date().getTime() + '',
      name,
      description,
      amount,
      createdAt: moment().format('DD-MM-YYYY'),
    };
    handleSubmit(values);
  };
  return (
    <View>
      <View style={styles.formItem}>
        <Text style={styles.itemLabel}>Expense Name:</Text>
        <TextInput placeholder="Expense name" onChangeText={setName} />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.itemLabel}>Description: </Text>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="Enter Description"
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.formItem}>
        <Text style={styles.itemLabel}>Amount</Text>
        <TextInput
          placeholder="Enter Your amount"
          underlineColorAndroid="transparent"
          style={styles.TextInputNumber}
          keyboardType="numeric"
          onChangeText={(text) => setAmount(parseInt(text, 10))}
        />
      </View>
      <View>
        <Button label="Submit" onPress={() => handleAdd()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formItem: {
    flexDirection: 'row',
    width: 300,
  },
  itemLabel: {
    // flex: 0.5,
    width: 100,
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  TextInputNumber: {
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009688',
    marginBottom: 10,
  },
});

export default ExpenseForm;
