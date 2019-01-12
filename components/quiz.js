import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'
import * as css from "../utils/styles";

const titleAndIcon = (title) =>
    (<View style={css.header.container}>
        <Text style={css.header.text}>Quiz</Text>
    </View>);

export default class Quiz extends Component {
    static navigationOptions = ({ navigation }) => {
        //const { title } = navigation.state.params
        return {
            headerTitle: titleAndIcon(),
            ...css.header
        }
    }

    state = {
        score: 0,
        isDone: false,
        questions: [],
        bounceValue: new Animated.Value(0),
    }

    componentDidMount() {
        const { questions } = this.props.navigation.state.params;

        this.setState(() => ({ questions: questions }));
    }

    animate = ()=>{
        const { bounceValue } = this.state;
        bounceValue.setValue(0);
        //TODO, use it when click to see the answer
        Animated.timing(bounceValue, { duration: 700, toValue: 1 }).start();
        console.log(132);
    }

    render() {
        const { status, coords, direction, navigation } = this.props
        const { bounceValue } = this.state;
        return (
            <View>
                <Animated.Text
                    onPress={() => {this.animate()}}
                    style={[styles.direction, { transform: [{ scale: bounceValue }] }]}>
                    {JSON.stringify(this.state.questions)}
                </Animated.Text>
            </View >
        )
    }
}



const styles = StyleSheet.create({
    direction: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    }
})
