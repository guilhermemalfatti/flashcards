import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStore, compose } from 'redux';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation'
import Decks from './components/decks'
import NewDeck from './components/newDeck'
import Deck from './components/deck'
import { purple, white, blue } from './utils/colors'
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers())

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    },
  },
  NewDecks: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add' size={30} color={tintColor} />
    },
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : blue,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? blue : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  });

const mainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: blue,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
});

const AppContianer = createAppContainer(mainNavigator);

export default class App extends React.Component {



  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContianer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
});
