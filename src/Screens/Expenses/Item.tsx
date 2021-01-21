import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Expense} from '../../Types';

const Item: React.Fc<Expense> = ({
  id,
  description,
  name,
  amount,
  createdAt,
}: Expense) => {
  return (
    <View style={styles.container}>
      <View style={[styles.listItem, {alignItems: 'flex-start'}]}>
        <Text>{description} </Text>
      </View>
      <View style={[styles.listItem, {alignItems: 'flex-start'}]}>
        <Text>{name} </Text>
      </View>
      <View style={[styles.listItem, {alignItems: 'flex-start'}]}>
        <Text style={styles.amount}> {amount} </Text>
      </View>
      <View style={[styles.listItem, {alignItems: 'flex-end'}]}>
        <Text>{createdAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    // flex: 0.25,
    // justifyContent: 'center',
    backgroundColor: '#080',
  },
  amount: {
    padding: 5,
    fontWeight: '600',
    fontSize: 16,
    backgroundColor: '#a10',
  },
});

export default Item;
