import React from 'react';
import { Text, View, Platform } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import * as css from "../utils/styles";
import Decks from '../components/decks'
import NewDeck from '../components/newDeck'
import Deck from '../components/deck'
import Quiz from '../components/quiz'
import NewQuestions from '../components/newQuestion'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { blue, purple } from '../utils/colors'

const titleAndIcon =
<View style={css.header.container}>
  <MaterialCommunityIcons size={30} name="cards" color={css.colors.text_light} />
  <Text style={css.header.text}>Flash cards</Text>
</View>;

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
    headerTitle: titleAndIcon,
    ...css.header,
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
Deck: {
  screen: Deck
},
Quiz: {
  screen: Quiz
},
NewQuestions: {
  screen: NewQuestions
}
});

export const AppContainer = createAppContainer(mainNavigator);