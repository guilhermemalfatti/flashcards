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
        score: 0,
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
        return (
            <View style={style.container}>
                <View style={style.containerRow}>
                    <View style={style.containerDesc}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[style.text, { fontSize: 20 }, { fontWeight: "bold" }]}>{title}</Text>
                            <Text style={[style.text, { color: css.colors.text_medium }]}>{_.size(questions)}</Text>
                        </View>
                    </View>
                </View>
                <View style={style.containerRow}>
                    <View style={style.containerBtnk}>
                        <TouchableOpacity style={[style.button]} onPress={() => navigation.navigate(
                            'Quiz',
                            {
                                questions: this.state.questions
                            }
                        )}>
                            <Text>Add card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.button} onPress={() => navigation.navigate(
                            'Quiz',
                            {
                                questions: this.state.questions
                            }
                        )}>
                            <Text>Start Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    containerRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ontainerDesc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    containerBtn: {
        flex: 1,
    },
    text: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 7,
        margin: 6 //TODO, add only border bottom
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 19,
        borderRadius: 10,
        width: 300,
        margin: 2
    }
}
);