/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <View style={{padding: 20, margin: 10, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, textAlign: 'center', padding: 20}}>
        Profile screen
      </Text>
    </View>
  );
};

export default MainScreen;
