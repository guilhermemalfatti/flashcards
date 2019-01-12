import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Animated } from 'react-native'

export default class Quiz extends Component {

    render() {
        const { status, coords, direction, navigation } = this.props


        return (
            <View>
                <Text >Quiz</Text>
            </View>
        )
    }
}

