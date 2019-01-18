import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { purple } from './utils/colors'

import CustomStatusBar from './components/statusBar'
import * as css from "./utils/styles";
import { setLocalNotification } from './utils/helpers';
import { store } from './config/store'
import { AppContainer } from './config/routes'


export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={css.home_screen.container}>
          <CustomStatusBar backgroundColor={purple} barStyle="light-content" />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
