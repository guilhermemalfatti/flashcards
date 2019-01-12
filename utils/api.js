import { AsyncStorage } from 'react-native'
import  dummyData  from '../config/dummyData';
export const DECKS_STORAGE_KEY = 'Udacity:decks'

export async function fetchDecks() {
  console.log('call fetchDecks');
  let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  if (!data) {
    console.log('dummy data: ');
    setDummydata(dummyData);
    return JSON.stringify(dummyData);
  } else {
    console.log('data: ');
    return data;
  }

}
export function fetchDeck(deckId) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) => {
      filterDeck(decks, deckId);
    })
}
export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title
    }
  }))
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