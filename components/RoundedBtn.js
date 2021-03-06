import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class RoundedBtn extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
      return(
          <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.roundedBtn}
          underlayColor="rgba(215, 147, 63,.3)">
              <Text style={styles.roundedBtnText}>{this.props.text}</Text>
          </TouchableHighlight>
      );
  }
}

const styles = StyleSheet.create({
    roundedBtnText: {
        fontSize: 22,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'#810000',
        textAlign: 'center',
    },
    roundedBtn: {
        width: 200,
        backgroundColor: '#d7933f',
        borderRadius: 50,
        marginBottom: 13,
        paddingTop: 8,
        paddingBottom: 8
    },
});
