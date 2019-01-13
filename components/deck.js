import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as css from "../utils/styles";
import { MaterialIcons } from '@expo/vector-icons'
import _ from 'lodash'

const titleAndIcon = (title) =>
    (<View style={css.header.container}>
        <MaterialIcons size={30} name="question-answer" color={css.colors.text_light} />
        <Text style={css.header.text}>{title} Quiz</Text>
    </View>);

export default class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params
        return {
            headerTitle: titleAndIcon(title),
            ...css.header
        }
    }
    state = {
        title: "",
        questions: null
    }

    componentDidMount() {
        const { title, questions } = this.props.navigation.state.params;
        this.setState(() => ({
            title: title,
            questions: questions
        }));

    }

    render() {
        let { title, questions } = this.state;
        let { navigation } = this.props;
        let disabled = questions && questions.length > 0;

        return (
            <View style={css.deck.container}>
                <View style={css.deck.containerRow}>
                    <View style={css.deck.containerDesc}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[css.deck.text, { fontSize: 20 }, { fontWeight: "bold" }]}>{title}</Text>
                            <Text style={[css.deck.text, { color: css.colors.text_medium }]}>{_.size(questions)} questions</Text>
                        </View>
                    </View>
                </View>
                <View style={css.deck.containerRow}>
                    <View style={css.deck.containerBtnk}>
                        <TouchableOpacity style={[css.deck.button]} onPress={() => navigation.navigate(
                            'todo',
                            {
                                questions: questions
                            }
                        )}>
                            <Text>Add card</Text>
                        </TouchableOpacity>
                        {disabled &&
                        <TouchableOpacity  style={css.deck.button} onPress={() => navigation.navigate(
                            'Quiz',
                            {
                                questions: questions
                            }
                        )}>
                            <Text>Start Quiz</Text>
                        </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        )
    }
}