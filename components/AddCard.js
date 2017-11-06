import React from 'react'
import { Constants } from 'expo'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { gray, white, purple, lightGray } from '../utils/colors'
import { getTopics } from '../utils/helpers'

export default class AddCard extends React.Component {
    static navigationOptions = {
      title: 'Add a new Question',
    };
    
    state={
        question:'',
        answer:'',
        response:''
    }

    addQuestion = () => {
        const topic = this.props.navigation.state.params.topic        
        const newQuestion = this.state.question;
        const newAnswer = this.state.answer;
        const newResponse = this.state.response;
        const question = {
            question: newQuestion,
            answer: newAnswer,
            response: newResponse,
        };
        if (topic.questions === 'undefined') {
            topic.questions = [question]
        } else {
            topic.questions.push(question)
        }
        this.props.navigation.navigate('DeckCard', {topics: getTopics()})
        console.log(topic.questions)}
    
    render() {
      const topic = this.props.navigation.state.params.topic
      return (
          <View style={styles.container}>
            <View>
              <TextInput style={styles.Input} placeholder="Add Question" value={this.state.question} onChangeText={(text) => this.setState({question: text})}/>
            </View>
            <View>
              <TextInput style={styles.Input} placeholder="Add Answer" value={this.state.answer} onChangeText={(text) => this.setState({answer: text})}/>
            </View>
            <View>
              <TextInput style={styles.Input} placeholder="Specify Correct or Incorrect" value={this.state.response} onChangeText={(text) => this.setState({response: text})}/>
            </View>
            <View style={styles.SpaceViews}>
              <TouchableOpacity>
                <Text style={styles.Button} onPress={this.addQuestion}>Submit</Text>
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
        Text: {
          fontSize: 50,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        Button:{
          fontSize: 22,
          marginBottom:20,
        },
        SpaceViews:{
          paddingTop:30
        },
        Subtitle:{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        },
        Input:{
          paddingTop: 20
        }
      })