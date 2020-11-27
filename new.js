import React, { useState, Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
  Easing,
  Image,
  TouchableOpacity
} from "react-native";

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fadeValue: new Animated.Value(0),
      xValue: new Animated.Value(0),
      springValue: new Animated.Value(0.9),
    }
  }
  _moveAnimation = () => {
    Animated.timing(this.state.xValue, {
      toValue: 500,
      duration: 4000,
      easing: Easing.linear,
    }).start();
  }

  _springAnimation = () => {
    Animated.spring(this.state.springValue, {
      toValue: 1.2,
      friction: 1.4,
      delay: 4000,
    }).start();
  }
  render() {
    return(
      <View style={styles.container}>
      <Animated.Image
            source={require('./screens/images/33.png')}
            onLoad={this._springAnimation} 
            style={[styles.imageStyle, 
              {transform: [{scale: this.state.springValue}], alignSelf: 'center'}
            ]}>
        </Animated.Image>
        <Animated.Image onLoad={this._moveAnimation} style={[styles.animatedView, {left: this.state.xValue}]}>
        </Animated.Image>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  animatedView: {
    height: 300,
    width: '100%',
    backgroundColor: '#fff',
  },
  animatedView2: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#595959',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    position: 'absolute',
    alignSelf: 'center'
  }
});
