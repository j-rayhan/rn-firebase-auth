/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
//
import {Button} from '../../components';

const MainScreen: FC = () => {
  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{padding: 20, margin: 10, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, textAlign: 'center', padding: 20}}>
        Home screen
      </Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
