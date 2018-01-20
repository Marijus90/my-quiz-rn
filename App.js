import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

// import BackgroundImage from './components/BackgroundImageAndAds';
import RoundedBtn from './components/RoundedBtn';
import Quiz from './views/Quiz';

class Home extends React.Component {
  static navigationOptions = {
      header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <View style={style.top}>
          <Text style={style.title}>MY QUIZ</Text>
        </View>

        <View style={style.content}>
          <Text onPress={this._handlePress} style={style.descriptionText}>Multiple choice, 10 random questions</Text>

          <RoundedBtn
            text={'START'}
            onPress={() => navigate('QuizScreen')}
          />
        </View>
      </View>
    );
  }
}

const QuizApp = StackNavigator({
  HomeScreen: { screen: Home },
  QuizScreen: { screen: Quiz },
});

export default class App extends React.Component {
  render() {
      return <QuizApp />;
      // return <Home />;
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 140,
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
      width: 220,
      backgroundColor: '#639600',
      borderRadius: 50,
      marginBottom: 20,
      paddingTop: 16,
      paddingBottom: 16
  },
  descriptionText: {
    color: '#d7933f',
    fontSize: 18,
    lineHeight: 20,
    maxWidth: 400,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 80,
    textAlign: 'center'
},
});
