import React from 'react'
import { Constants } from 'expo'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import { gray, white, purple, lightGray } from '../utils/colors'
import TextButton from './TextButton'
import Button from './Button'

export default class Quiz extends React.Component {
    static navigationOptions = {
      title: 'Quiz',
    };
    state={
        index: 0,
        flag: false,
        end: false,
    }

    display = () => {  
        this.setState({flag: !this.state.flag})
    }

    go(topic, response, index) {
        if (!this.state.end) {
            if (index < topic.questions.length - 1) {
                this.setState({flag: false})
                const index = this.state.index + 1
                this.setState({index: index})
                this.props.navigation.navigate('Answer', { topic: topic, response: response, index: index - 1})
            }
            else {
                this.setState({end: true})
                this.props.navigation.navigate('Answer', { topic: topic, response: response, index: index})
            }
        }
    }
    
    render() {
      const topic = this.props.navigation.state.params.topic
      return (
          <View style={styles.container}>
            <View>
                <Text>Questions: {this.state.index + 1} / {topic.questions.length}</Text>
            </View>
            <View>
                <Text style={styles.text}>{topic.questions[this.state.index].question}</Text>
                <TextButton style={styles.subtitle} onPress={this.display}>
                    Answer
                </TextButton>
                <Text>{this.state.flag ? topic.questions[this.state.index].answer : ''}</Text>
            </View>
            <View>
                <Button style={styles.button} onPress={() => this.go(topic, 'Correct', this.state.index)}>Correct</Button>
            </View>
            <View>
                <Button style={styles.button} onPress={() => this.go(topic, 'Incorrect', this.state.index)}>Incorrect</Button>
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
        text: {
            fontSize: 50,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        button:{
            fontSize: 22,
            marginBottom:20,
        },
        spaceViews:{
            paddingTop:50
        },
        subtitle:{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }
      })