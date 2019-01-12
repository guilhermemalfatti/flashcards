import React, { Component } from 'react'
import { View, Text, FlatList, AsyncStorage, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'
import * as css from "../utils/styles";
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import _ from 'lodash'

class Decks extends Component {
    state = { list: [] };

    componentDidMount() {

        fetchDecks().then((data)=>{
            //console.log(JSON.parse(data)[0].id)
            this.setState(() => ({ list: JSON.parse(data) }))
        });

    }

    _renderItem = ({ item }) => {
        let actualRowComponent =
            <View  style={css.home_screen_list.row}>
                <View style={css.home_screen_list.row_cell}>
                    <Text style={css.home_screen_list.row_deck}>{item.title}</Text>
                </View>
                <Text style={css.home_screen_list.row_cell_count}>{_.size(item.questions)}</Text>
            </View>;
        return actualRowComponent;
    }

    render() {
        const { decks } = this.props;


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