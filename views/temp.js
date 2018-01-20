






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

/***

const App = StackNavigator({
  HomeScreen: { screen: Home },
  QuizScreen: { screen: Quiz },
});

export default App;
