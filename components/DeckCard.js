import React, {Component} from 'react'
import { getTopics } from '../utils/helpers'
import { gray, white, purple, lightGray } from '../utils/colors'
import { View, Text, Platform, StatusBar, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

export default class DeckCard extends Component {

    renderItem = ({item}) => {
        return(
            <View>
                <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Topics', { topic: item })}>
                    <Text style={styles.DeckText}>{item.title}</Text>
                    <Text>{item.questions.length} Cards</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() { 
        const topics = this.props.screenProps.topics
        const topicList = Object.keys(topics).map((key) => {
            return topics[key]
        })
        return(
            <View>
                <FlatList
                    data={topicList}
                    renderItem={this.renderItem}/> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin:10,
        backgroundColor: lightGray,
    },
    DeckText: {
        fontSize: 22,
        textAlign: 'center',
    }
})
