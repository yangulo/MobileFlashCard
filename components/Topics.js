import React from 'react'
import { Constants } from 'expo'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import { gray, white, purple, lightGray } from '../utils/colors'

export default class Topics extends React.Component {
  static navigationOptions = {
    title: 'Topic',
  }

  startQuiz = (topic) => {
    console.log(topic.questions)
    if(topic.questions.length>0){
      this.props.navigation.navigate('Quiz', { topic: topic})
  }
}

  render() {
    const topic = this.props.navigation.state.params.topic
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.DeckText}>{topic.title}</Text>
            <View>
              <Text style={styles.Subtitle}>{topic.questions.length} Cards</Text>
            </View>
          </View>
          <View style={styles.SpaceViews}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard', { topic: topic })}>
              <Text style={styles.Button}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.startQuiz(topic)}}>
              <Text style={styles.Button}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
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
    DeckText: {
        fontSize: 50,
    },
    Button:{
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