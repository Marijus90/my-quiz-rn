import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

// import BackgroundImage from '../containers/BackgroundImage';
import RoundedBtn from './components/RoundedBtn';

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.top}>
          <Text style={style.title}>KARATE QUIZ</Text>
        </View>

        <View style={style.content}>
          <RoundedBtn text={'Learn'} />
          <RoundedBtn text={'Take The Quiz'} />
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  top: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    color:'#810000',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Roboto'
  },
  content: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 2
  },
  roundedBtnText: {
      fontSize: 22,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color:'#ffffff',
      textAlign: 'center',
  },
  roundedBtn: {
      width: 200,
      backgroundColor: '#639600',
      borderRadius: 50,
      marginBottom: 13,
      paddingTop: 8,
      paddingBottom: 8
  },
});
