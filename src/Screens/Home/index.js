/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const MainScreen = ({routes, navigation}) => {
  return (
    <View style={{padding: 20, margin: 10, backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, textAlign: 'center', padding: 20}}>
        Home screen
      </Text>
    </View>
  );
};

export default MainScreen;
