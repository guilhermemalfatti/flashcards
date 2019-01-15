import { AsyncStorage } from 'react-native'
import dummyData from '../config/dummyData';

export const DECKS_STORAGE_KEY = 'Udacity:decks'
const uuidv4 = require('uuid/v4');


export async function fetchDecks() {
  console.log('call fetchDecks');
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

  if (!data) {
    setDummydata(dummyData);
    return dummyData;
  } else {
    //setDummydata(dummyData);
    return JSON.parse(data);
  }

}
export function fetchDeck(deckId) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      filterDeck(decks, deckId);
    })
}
export async function saveDeckTitle(title) {
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  let id = uuidv4();

  let newDeck = {
    title: title,
    id: id,
    questions: []
  };

  data = JSON.parse(data)
  data.push(newDeck)

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))

  return {id: id, list: data};
}
export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title].questions.push(card)
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

function filterDeck(decks, deckId) {
  decks.filter((item) => item.id === deckId)
}

function setDummydata(data) {
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
}