import React, { Component } from 'react'
import { View, Text, Animated, Share, TouchableOpacity, StyleSheet } from 'react-native'
import * as css from "../utils/styles";
import { clearLocalNotification } from '../utils/helpers'

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

    onShare() {
        Share.share({
            message: 'My score was ' + this.state.score,
            url: 'https://www.udacity.com/',
            title: 'Flash cards app'
        }, {
                dialogTitle: 'Share FlashCards results'
            })
    }

    componentDidMount() {
        const { questions } = this.props.navigation.state.params;

        this.setState(() => ({ questions: questions }));

        this.animate();
        clearLocalNotification();
    }

    animate = () => {
        const { bounceValue } = this.state;
        bounceValue.setValue(0);

        Animated.timing(bounceValue, { duration: 700, toValue: 1 }).start();
    }

    showAnswer = () => {
        this.setState(() => ({ isAnswer: true }));
    }

    showQuestion = () => {
        this.setState(() => ({ isAnswer: false }));
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
        const { navigation } = this.props
        const { isAnswer, questionIndex, questions, isDone, score } = this.state;

        if (isDone) {
            return (
                <View style={css.quiz.containerBtn}>
                    <View style={css.quiz.container}>
                        <Text>Your score is: {score} of {questions.length}</Text>
                    </View>
                    <View style={[{ alignSelf: 'center' }, { marginBottom: 10 }]}>
                        <TouchableOpacity style={[css.deck.button]} onPress={() => navigation.goBack()}>
                            <Text>Back to the deck</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.deck.button} onPress={() => navigation.goBack()}>
                            <Text>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={css.deck.button} onPress={() => this.onShare()}>
                            <Text>Share results</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }


        if (isAnswer) {
            return (
                <View style={css.quiz.containerBtn}>
                    <View onPress={() => { this.animate() }} style={css.quiz.container}>
                        <Text style={css.quiz.text}>
                            {questions && questions[questionIndex].answer}
                        </Text>
                        <Text style={css.quiz.textQuestion} onPress={() => this.showQuestion()}>
                            Question
                        </Text>
                    </View >
                    <View style={style.container}>
                        <TouchableOpacity style={[css.quiz.button, { backgroundColor: 'green' }]} onPress={() => this.correctAnswer()}>
                            <Text>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ backgroundColor: 'red' }, css.quiz.button]} onPress={() => this.incorrectAnswer()}>
                            <Text>Incorrect</Text>
                        </TouchableOpacity>
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
            <Animated.View style={[quizStyle]} >
                <View style={css.quiz.container}>
                    <Text>
                        {questionIndex + 1} of {questions && questions.length}
                    </Text>
                    <Text style={css.quiz.text}>
                        {questions && questions[questionIndex].question}
                    </Text>
                </View>
                <View style={css.quiz.containerAnswer}>
                    <TouchableOpacity onPress={() => console.log(2)}>
                        <Text style={css.quiz.textAnswer} onPress={() => { this.showAnswer() }}>Answer</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View >
        )
    }
}



const style = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginBottom: 10
    }
  })
