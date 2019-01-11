import { RECEIVE_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions'

const INITIAL_STATE = [];


export default function decks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case REMOVE_DECK:
      var newStae =state.filter((item) => item.id !== action.deck.it);
      return {
        ...state,
        newStae
      }
    case ADD_CARD:
      return {
        ...state,
        ...action.card//TODO, add card in a specif deck
      }
    default:
      return state
  }
}
