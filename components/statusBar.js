import React from 'react'
import { Text, StatusBar, View } from 'react-native'
import { Constants } from 'expo'


export default function CustomStatusBar({ backgroundColor, ...props }) {
    return (
      <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    )
  }