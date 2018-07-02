import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ModalScreen from './screens/ModalScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Dimensions } from 'react-native';
import AddNameScreen from './screens/AddNameScreen';
import EnableLocationScreen from './screens/EnableLocationScreen';
import EnableNotificationsScreen from './screens/EnableNotificationsScreen';


const screenSize = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    AddName: {
      screen: AddNameScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 0
        },
        headerTintColor: '#0D40FF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    },
    EnableLocation: {
      screen: EnableLocationScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 0,
          height: 1
        },
        headerTintColor: '#FFFFFF',
      },
    },
    EnableNotifications: {
      screen: EnableNotificationsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#FFFFFF',
          borderBottomWidth: 0,
          height: 1
        },
        headerTintColor: '#FFFFFF',
      },
    },
    Welcome: {
      screen: WelcomeScreen,
    },
  },
  {
    initialRouteName: 'Welcome', //Welcome goes hereg
    navigationOptions: {
      headerStyle: {
        display: 'none'
      },
    },
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}