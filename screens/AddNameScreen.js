import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput } from 'react-native';

export default class AddNameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textView}>
          <Text style={styles.text}>Almost done!</Text>
        </View>

        <View style={styles.inputView}>
          <Text style={styles.inputText}>First Name</Text>
          <TextInput style={ this.state.firstName ? styles.textInputActive : styles.textInput } onChangeText={(firstName) => this.setState({ firstName })} />
          <Text style={styles.inputText}>Last Name</Text>
          <TextInput style={ this.state.lastName ? styles.textInputActive : styles.textInput } onChangeText={(lastName) => this.setState({ lastName })} />
        </View>

        <TouchableHighlight disabled={ this.state.lastName && this.state.firstName ? false : true } style={ this.state.lastName && this.state.firstName ? styles.button : styles.inactiveButton } onPress={() => {this.props.navigation.navigate('EnableLocation');}}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableHighlight>


      </View>
    );
  }
}

const screenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {
    width: screenSize.width * .5,
    height: 50,
    position: 'absolute',
    top: 10,
    left: 10
  },
  text: {
    fontSize: 19,
    fontFamily: 'System',
    fontWeight: 'bold'
  },
  inputView: {
    position: 'absolute',
    top: screenSize.height*.15,
    width: screenSize.width*.9,
  },
  inputText: {
    fontSize: 15,
    color: '#303030'
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    height: 40,
    fontSize: 15,
    marginBottom: 35
  },
  textInputActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#0D40FF',
    height: 40,
    fontSize: 15,
    marginBottom: 35,
  },
  button: {
    position: 'absolute',
    top: screenSize.height*.46,
    width: screenSize.width,
    height: 60,
    backgroundColor: '#0D40FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inactiveButton: {
    position: 'absolute',
    top: screenSize.height*.46,
    width: screenSize.width,
    height: 60,
    backgroundColor: 'rgba(13,64,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
})