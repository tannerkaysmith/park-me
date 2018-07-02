import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  pressed() {
    console.log('pressed')
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('../images/header.png')} style={{ width: screenSize.width, height: screenSize.height * .3 }} />

        <Swiper style={styles.wrapper} showsButtons={false} loop={false}
          dot={<View style={screenSize.height === 812 && screenSize.width === 375 ? { backgroundColor: '#CCD1DD', width: 15, height: 2, borderRadius: 1, margin: 3, marginTop: -85 } : { backgroundColor: '#CCD1DD', width: 15, height: 2, borderRadius: 1, margin: 3, marginBottom: -25 }} />}
          activeDot={<View style={screenSize.height === 812 && screenSize.width === 375 ? { backgroundColor: '#0D40FF', width: 15, height: 3, borderRadius: 1, margin: 3, marginTop: -85 } : { backgroundColor: '#0D40FF', width: 15, height: 3, borderRadius: 1, margin: 3, marginBottom: -25 }} />}
        >
          <View style={styles.slide}>
            <Text style={screenSize.height === 812 && screenSize.width === 375 ? styles.bigText : styles.bigText3}>Welcome to ParkMe</Text>
            <Text style={styles.text}>Reserve and pay for parking from your phone</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.bigText2}>Find event parking</Text>
            <Text style={styles.text}>Find and reserve parking spots near you with just a few clicks</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.bigText2}>List your own space</Text>
            <Text style={styles.text}>Have a parking spot? List it today for event going on around you</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.bigText2}>Let's do this</Text> 
            <Text style={styles.text}>Get going and get parking with ParkMe</Text>
          </View>
        </Swiper>

        <View style={styles.buttons}>
          <TouchableHighlight style={styles.login} underlayColor={'#edf0ff'} activeOpacity={.3} onPress={this.pressed}>
            <Text style={styles.loginText}>LOG IN</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.signup} underlayColor={'rgba(13,64,255,0.4)'} activeOpacity={1}
            onPress={() => {
              this.props.navigation.navigate('AddName');
            }}>
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableHighlight>
        </View>

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
  wrapper: {
    height: 300,
    marginTop: 50
  },
  slide: {
    height: 300,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  bigText: {
    width: screenSize.width * .75,
    fontFamily: 'System',
    color: '#000000',
    fontSize: 55,
    fontWeight: '800',
    marginLeft: 26,
    marginBottom: 10
  },
  bigText2: {
    width: screenSize.width * .65,
    fontFamily: 'System',
    color: '#000000',
    fontSize: 46,
    fontWeight: '800',
    marginLeft: 26,
    marginBottom: 10
  },
  bigText3: {
    width: screenSize.width * .75,
    fontFamily: 'System',
    color: '#000000',
    fontSize: 55,
    fontWeight: '800',
    marginLeft: 26,
    marginBottom: 10
  },
  text: {
    width: screenSize.width * .81,
    fontFamily: 'System',
    color: '#000000',
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 26
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: 80
  },
  login: {
    height: 60,
    width: screenSize.width * .45,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontFamily: 'System',
    color: '#0D40FF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: .62
  },
  signup: {
    height: 60,
    width: screenSize.width * .45,
    borderRadius: 50,
    backgroundColor: '#0D40FF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupText: {
    fontFamily: 'System',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: .62
  }
})