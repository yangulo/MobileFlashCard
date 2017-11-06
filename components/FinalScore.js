import React from 'react'
import { Constants } from 'expo'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import { gray, white, purple, lightGray } from '../utils/colors'
import Button from './Button'
import { NavigationActions } from 'react-navigation'

export default class FinalScore extends React.Component {
  static navigationOptions = {
    title: 'Final Score',
  };
  
    toHome = () => {
        const topic = this.props.navigation.state.params.topic
        topic.score = 0
        this.props.navigation.navigate('DeckCard') 
    }

    toQuiz = () => {
        const topic = this.props.navigation.state.params.topic
        topic.score = 0
        this.props.navigation.navigate('Quiz', { topic: topic }) 
    }

    render() {
        const topic = this.props.navigation.state.params.topic
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>Final Score</Text>
                <Text tyle={styles.Subtitle}>Your final score is {topic.score} out of {topic.questions.length}</Text>
                <View>
                    <Button style={styles.button} onPress={this.toQuiz}>Restart Quiz</Button>
                </View>
                <View>
                    <Button style={styles.button} onPress={this.toHome}>Back to {topic.title}</Button>
                </View>
            </View>
        )
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: lightGray,
        },
        Text: {
            fontSize: 50,
        },
        button:{
            fontSize: 22,
            marginBottom:20,
        },
        SpaceViews:{
            paddingTop:50
        },
        Subtitle:{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }
    })