import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
    render() {
        return (
            <View>
                <Text >deck</Text>
            </View>
        )
    }
}



export default connect()(Deck)