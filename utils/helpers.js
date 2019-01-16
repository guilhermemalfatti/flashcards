import React from 'react'
import { View, StyleSheet, AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

const NOTIFICATION_KEY = 'FlashCards:notifications'

export function clearLocalNotification() {
  console.log('clear local notifications.');
  try {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationAsync)
  } catch (error) {
    console.log(error)
  }
}


function createNotification() {
  return {
    title: 'Do the Quiz!',
    body: "👋 don't forget to do the quiz!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification() {

  try {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                console.log('set local notification.');
                try {
                  Notifications.cancelAllScheduledNotificationsAsync()
                } catch (error) {
                  console.log(error)
                }

                let date = new Date()
                date.setDate(date.getDate())
                date.setHours(23)
                date.setMinutes(40)

                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: date,
                    repeat: 'day',
                  }
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  } catch (error) {
    console.log(error)
  }
}
