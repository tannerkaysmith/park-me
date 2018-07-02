import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Image } from 'react-native';
import axios from 'axios';

export default class EnableLocationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            currentState: '',
            city: ''
        }
        this.getLocation = this.getLocation.bind(this);
        this.doNot = this.doNot.bind(this);
    }

    getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        })
        axios.get(`https://us1.locationiq.org/v1/reverse.php?key=99139580186bb2&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`).then(response => {
          this.setState({ currentState: response.data.address.state, city: response.data.address.town })
        }).then(this.props.navigation.navigate('EnableNotifications'))
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

    doNot() {
        console.log('Do not allow')
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>

                <View style={styles.parkmeView} >
                    <Text style={styles.parkme} >parkme</Text>
                </View>

                <View style={styles.accessView} >
                    <Text style={styles.access} >ACCESS YOUR LOCATION</Text>
                </View>

                <View style={styles.imageView} >
                    <Image style={styles.image} source={require('../images/location2.png')} />
                </View>

                <View style={styles.pleaseView} >
                    <Text style={styles.please} >Please enable location to be able to find parking near you.</Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.button} underlayColor={'rgba(13,64,255,0.4)'} activeOpacity={1} 
                    onPress={this.getLocation}>
                        <Text style={styles.buttonText} >ENABLE LOCATION</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.noView} >
                    <TouchableHighlight style={styles.no} onPress={this.doNot} underlayColor={'#FFFFFF'} activeOpacity={.3} >
                        <Text style={styles.noText}>Do not allow</Text>
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
        justifyContent: 'center',
    },
    parkmeView: {
        flex: 1,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    parkme: {
        color: '#0D40FF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    accessView: {
        flex: 1,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    access: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 24
    },
    imageView: {
        flex: 2,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: 150,
        height: 144
    },
    pleaseView: {
        flex: 1,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: screenSize.width*.05,
        marginRight: screenSize.width*.05
    },
    please: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center'
    },
    buttonView: {
        flex: .7,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    button: {
        width: screenSize.width * .9,
        height: 62,
        backgroundColor: '#0D40FF',
        borderRadius: 30,
        shadowColor: 'rgba(13,64,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 17
    },
    noView: {
        flex: .7,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    no: {

    },
    noText: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 18
    }
})