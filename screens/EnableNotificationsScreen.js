import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Button, Image } from 'react-native';

export default class EnableNotificationsScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    enable() {
        console.log('Enabled')
    }

    doNot() {
        console.log('Do not allow')
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.parkmeView} >
                    <Text style={styles.parkme} >parkme</Text>
                </View>

                <View style={styles.accessView} >
                    <Text style={styles.access} >CAN WE NOTIFY YOU?</Text>
                </View>

                <View style={styles.imageView} >
                    <Image style={styles.image} source={require('../images/notifications.png')} />
                </View>

                <View style={styles.pleaseView} >
                    <Text style={styles.please} >Please enable location to be able to find parking near you.</Text>
                </View>

                <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.button} onPress={this.enable} underlayColor={'rgba(13,64,255,0.4)'} activeOpacity={1} >
                        <Text style={styles.buttonText} >ENABLE NOTIFICATIONS</Text>
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
        width: 200,
        height: 200
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