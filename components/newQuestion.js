import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as css from "../utils/styles";
import { addCardToDeck } from '../utils/api'
import _ from 'lodash'
import { receiveDecks } from '../actions'

const titleAndIcon = () =>
    (<View style={css.header.container}>
        <Text style={css.header.text}>Add card</Text>
    </View>);

class NewQuestions extends Component {
    static navigationOptions = ({ navigation }) => {
        //const { title } = navigation.state.params
        return {
            headerTitle: titleAndIcon(),
            ...css.header
        }
    }
    state = {
        question: '',
        answer: ''
    };

    componentDidMount() {
        const { dispatch } = this.props;
    }

    onSubmit = () => {
        let { dispatch } = this.props;
        let { question, answer } = this.state;
        const { id } = this.props.navigation.state.params;

        addCardToDeck(id, { question, answer }).then((data) => {
            dispatch(receiveDecks(data));
            console.log('card add success.')
        }).catch((err) => {
            console.log('Erro on save the deck: ', err)
        });
    }


    render() {
        const { question, answer } = this.state;

        return (
            <View style={[css.quiz.containerBtn, { padding: 20 }, { alignItems: 'center' }]}>
                <View>
                    <Text style={css.quiz.text}>Type the question</Text>
                </View>
                <View>
                    <TextInput
                        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 0.2 }}
                        onChangeText={(question) => this.setState({ question })}
                        value={question}
                    />
                </View><View>
                    <Text style={css.quiz.text}>Type the answer</Text>
                </View>
                <View>
                    <TextInput
                        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 0.2 }}
                        onChangeText={(answer) => this.setState({ answer })}
                        value={answer}
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

export default connect()(NewQuestions)