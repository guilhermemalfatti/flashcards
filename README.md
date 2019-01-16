### Flash cards

## Guilherme Malfatti - Udacity

This project builds a mobile application (Android or iOS) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks and check the score of the quiz. Once the score is done the user can share the content on social network media.

### Project Requirements

| Requirement | Description
| ------ | ------
| [REQ-001](#install) |  Application easy to install and start |
| [REQ-002](#readme) |  Application include README with clear installation and launch instructions |
| [REQ-003](#initial) | Initial view a Deck List view |
| [REQ-004](#deck) | The Deck List view function correctly |
| [REQ-005](#individual) | The Individual Deck view display the correct information? |
| [REQ-006](#question) | The New Question view function correctly |
| [REQ-007](#quiz) | The Quiz View function correctly |
| [REQ-008](#new) | The New Deck view work correctly |
| [REQ-009](#notification) | The user receive a notification at a particular time if they haven't studied that day |
| [REQ-010](#app) | The app function correctly in either Android or iOS |

## The following libraries are used in this project:

- **react**: [React](https://reactjs.org/)
- **lodash**: [Lodash](https://lodash.com/)
- **redux**: [Redux](https://redux.js.org/)
- **react-native**: [react-native](https://facebook.github.io/react-native/)
- **uuid**: [uuid](https://www.npmjs.com/package/uuid)

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and [Git](https://git-scm.com/) installed.

# Android Simulator
In order to install the android simulator, follow the [user guide](https://developer.android.com/studio/intro/?hl=pt-br).

You have a choice of either using the Android Studio Emulator or [Genymotion as your simulator](https://www.genymotion.com/). Do not need to install both.

After the environment configured, follow the instructions to start the APP locally.

```sh
# start the emulator

$ git clone git@github.com:guilhermemalfatti/flashcards.git # or clone your own fork
$ cd flashcards
$ npm install
$ yarn start

```
* Create React Native App does not currently work well with NPM, due to [bugs in NPM](https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103). I suggest use yarn to be safe

Your app should now be running on the emulator.

## References

For more information about using Node.js and React-native, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [React-native](https://facebook.github.io/react-native)
- [react-redux](https://redux.js.org/basics/usagewithreact)

## TODO
- Unit Tests (coverage > 80%)
