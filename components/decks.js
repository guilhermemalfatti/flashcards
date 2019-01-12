import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import * as css from "../utils/styles";
import { fetchDecks } from '../utils/api'
import _ from 'lodash'

class Decks extends Component {
    state = { list: [] };

    componentDidMount() {

        fetchDecks().then((data) => {
            //console.log(JSON.parse(data)[0].id)
            this.setState(() => ({ list: JSON.parse(data) }))
        });

    }

    _renderItem = ({ item }) => {
        let actualRowComponent =
            <TouchableOpacity onPress={() => this.props.navigation.navigate(
                'Deck',
                {
                    deckId: item.id,
                    title: item.title,
                    questions: item.questions
                }
            )}>
                <View style={css.home_screen_list.row}>
                    <View style={css.home_screen_list.row_cell}>
                        <Text style={css.home_screen_list.row_deck}>{item.title}</Text>
                    </View>
                    <Text style={css.home_screen_list.row_cell_count}>{_.size(item.questions)}</Text>
                </View>
            </TouchableOpacity>;
        return actualRowComponent;
    }

    render() {
        return (
            <View style={css.home_screen.v_container}>
                <FlatList
                    style={css.home_screen_list.container}
                    data={this.state.list}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

export default connect((state) => ({
    decks: state.decks
}))(Decks)