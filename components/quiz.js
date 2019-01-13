import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'
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
        isAnswer: false,
        questions: null,
        questionIndex: 0,
        bounceValue: new Animated.Value(0),
    }

    componentDidMount() {
        const { questions } = this.props.navigation.state.params;

        this.setState(() => ({ questions: questions }));

        this.animate();
    }

    animate = () => {
        const { bounceValue } = this.state;
        bounceValue.setValue(0);

        Animated.timing(bounceValue, { duration: 700, toValue: 1 }).start();
    }

    showAnswer = () => {
        this.setState(() => ({ isAnswer: true }));
        this.animate();
    }

    correctAnswer = () => {
        this.setState((state) => ({
            score: state.score + 1,
            questionIndex: state.questionIndex + 1,
            isDone: state.questions.length - 1 === state.questionIndex,
            isAnswer: false
        }));
    }

    incorrectAnswer = () => {
        this.setState((state) => ({
            questionIndex: state.questionIndex + 1,
            isDone: state.questions.length - 1 === state.questionIndex,
            isAnswer: false
        }));
    }

    render() {
        const { status, coords, direction, navigation } = this.props
        const { bounceValue, isAnswer, questionIndex, questions, isDone, score } = this.state;

        if (isDone) {
            return (
                <View>
                    <Text>Your score is: {score}</Text>
                </View>
            )
        }


        if (isAnswer) {
            return (
                <View>
                    <Animated.View onPress={() => { this.animate() }}
                        style={[{ transform: [{ scale: bounceValue }] }]}>
                        <Text>
                            {questions && questions[questionIndex].answer}
                        </Text>
                        <Text>
                            Question
                        </Text>
                    </Animated.View >
                    <View>
                        <TouchableOpacity style={[css.deck.button]} onPress={() => this.correctAnswer()}>
                            <Text>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.deck.button} onPress={() => this.incorrectAnswer()}>
                            <Text>Incorrect</Text>
                        </TouchableOpacity>
                        <Text>{JSON.stringify(this.state)}</Text>
                    </View>
                </View>
            )
        }

        const quizStyle = {
            opacity: this.state.bounceValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
            transform: [
                {
                    scale: this.state.bounceValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1.1, 1],
                    }),
                },
            ],
        };

        return (
            <Animated.View style={quizStyle} >
                <Text>
                    {questions && questions[questionIndex].question}
                </Text>
                <TouchableOpacity onPress={() => console.log(2)}>
                    <Text onPress={() => { this.showAnswer() }}>Answer</Text>
                </TouchableOpacity>
            </Animated.View >
        )
    }
}



const styles = StyleSheet.create({
    direction: {
        textAlign: 'center',
    }
})
