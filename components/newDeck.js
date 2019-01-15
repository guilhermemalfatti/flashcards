import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as css from "../utils/styles";
import { saveDeckTitle } from '../utils/api'
import { receiveDecks } from '../actions'

class NewDeck extends Component {
    state = {
        text: ''
    };

    onSubmit = () => {
        let { dispatch } = this.props;
        saveDeckTitle(this.state.text).then((data) => {
            dispatch(receiveDecks(data.list));
            this.navigateToDeck(data);
        }).catch((err) => {
            console.log('Erro on save the deck: ', err)
        });
    }

    navigateToDeck = (data) => {
        this.props.navigation.navigate(
            'Deck',
            {
                deckId: data.id,
                title: this.state.text,
                questions: []
            }
        )
    }

    render() {
        const { status, coords, direction, navigation } = this.props


        return (
            <View style={[css.quiz.containerBtn, { padding: 20 }, { alignItems: 'center' }]}>
                <View>
                    <Text style={css.quiz.text}>What is the title of your deck?</Text>
                </View>
                <View>
                    <TextInput
                        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 0.2 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                </View>
                <View>
                    <TouchableOpacity style={css.deck.button} onPress={() => this.onSubmit()}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}



export default connect()(NewDeck)