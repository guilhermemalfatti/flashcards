import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

class NewDeck extends Component {

    render() {
        const { status, coords, direction, navigation } = this.props


        return (
            <View>
                <Text >New deck</Text>
            </View>
        )
    }
}



  export default connect()(NewDeck)