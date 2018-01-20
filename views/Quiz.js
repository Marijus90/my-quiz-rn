import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

// import BackBtn from '../components/BackBtn';

export default class Quiz extends React.Component {
  static navigationOptions = {
      header: null,
  };

  render() {
    return (
      <View>
        <Text>Insert questions here</Text>
      </View>
    );
  }
}
