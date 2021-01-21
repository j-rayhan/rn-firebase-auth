import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {IconX} from '../../Icons';

interface Props {
  icon: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const SearchItems: React.FC<Props> = ({icon, placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchIcon}>
        <IconX style={styles.padding5} name={icon} color="#555" />
      </View>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.padding5}
          placeholderTextColor="#555"
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    margin: 10,
    borderBottomColor: '#888',
  },
  searchIcon: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  searchInput: {
    flex: 1,
    justifyContent: 'center',
  },
  padding5: {
    padding: 5,
  },
});

export default SearchItems;
