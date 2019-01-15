import React, { Component } from 'react'
import { View, Text, MaterialIcons, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as css from "../utils/styles";
import { fetchDecks } from '../utils/api'
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
    state = { list: [] };

    componentDidMount() {
        const { dispatch } = this.props;
    }


    render() {
        const { decks } = this.props;

        return (
            <View style={css.home_screen.v_container}>
                <Text>new question component</Text>
            </View>
        )
    }
}

export default connect()(NewQuestions)