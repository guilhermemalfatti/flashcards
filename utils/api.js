import { AsyncStorage } from 'react-native'
import { formatCalendarResults, CALENDAR_STORAGE_KEY } from './_calendar'

export const DECKS_STORAGE_KEY = 'Udacity:decks'

export function getDecks(){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatCalendarResults)
}
export function getDeck(deckId){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks)=>{
      functionFilterDeck(decks, deckId);
    })
}
export function saveDeckTitle(title){
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title
    }
  }))
}
export function addCardToDeck(title, card){
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title].questions.push(card)
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

function functionFilterDeck(decks, deckId){
  decks.filter((item) => item.id === deckId)
}