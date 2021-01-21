/**
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
//
import SearchItems from './SearchItems';
import ExpenseForm, {Button} from './ItemForm';
import Item from './Item';
import Expense, {expenses} from '../../types/Expense';

const App: React.FC = () => {
  // const [newExpense, setNewExpense] = React.useState<Expense | null>(null);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [visible, setVisible] = React.useState<boolean>(false);
  const handleSubmit = (v: Expense) => {
    setVisible(false);
    // setNewExpense(v);
  };
  const ExpenseList: Expense[] = React.useMemo<Expense[]>(() => {
    return expenses
      .filter((item) => item.name.includes(searchQuery))
      .sort((a: Expense, b: Expense) =>
        a.amount > b.amount ? 1 : b.amount > a.amount ? -1 : 0,
      );
  }, [searchQuery]);
  return (
    <>
      <View style={styles.container}>
        <SearchItems
          icon="md-search"
          placeholder="Search"
          onChangeText={(text) => setSearchQuery(text)}
        />
        <FlatList
          data={ExpenseList}
          renderItem={({item}) => <Item {...item} />}
        />
        <View>
          {visible ? (
            <ExpenseForm handleSubmit={(v) => handleSubmit(v)} />
          ) : (
            <Button label="Add New" onPress={() => setVisible(true)} />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
