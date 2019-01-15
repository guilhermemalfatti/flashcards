import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as css from "../utils/styles";
import { MaterialIcons } from '@expo/vector-icons'
import _ from 'lodash'
import { connect } from 'react-redux'

const titleAndIcon = (title) =>
    (<View style={css.header.container}>
        <MaterialIcons size={30} name="question-answer" color={css.colors.text_light} />
        <Text style={css.header.text}>{title} Quiz</Text>
    </View>);

class Deck extends Component {
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
        const { title, questions, deckId } = this.props.navigation.state.params;
        this.setState(() => ({
            id: deckId
        }));

    }
    getCurrentDeck = (id, decks) => {
        if (decks) {
            return decks.filter((item) => {
                return item.id === id;
            })
        } else {
            return { 1: 1 }
        }

    }

    render() {
        let { id } = this.state;
        let { navigation, decks } = this.props;

        let deck = this.getCurrentDeck(id, decks);
        let questions = deck[0] && deck[0].questions
        let disabled = questions && questions.length > 0;

        return (
            <View style={css.deck.container}>
                <View style={css.deck.containerRow}>
                    <View style={css.deck.containerDesc}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[css.deck.text, { fontSize: 20 }, { fontWeight: "bold" }]}>{deck[0] && deck[0].title}</Text>
                            <Text style={[css.deck.text, { color: css.colors.text_medium }]}>{_.size(deck[0] && deck[0].questions)} questions</Text>
                        </View>
                    </View>
                </View>
                <View style={css.deck.containerRow}>
                    <View style={css.deck.containerBtnk}>
                        <TouchableOpacity style={[css.deck.button]} onPress={() => navigation.navigate(
                            'NewQuestions',
                            {
                                id: id,
                                title: deck[0] && deck[0].title
                            }
                        )}>
                            <Text>Add card</Text>
                        </TouchableOpacity>
                        {disabled &&
                            <TouchableOpacity style={css.deck.button} onPress={() => navigation.navigate(
                                'Quiz',
                                {
                                    questions: deck[0] && deck[0].questions
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

export default connect((state) => ({
    decks: state.decks
}))(Deck)