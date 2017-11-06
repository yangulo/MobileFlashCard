import React from 'react'
import { Constants } from 'expo'
import { View, Text, Platform, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import { gray, white, purple, lightGray } from '../utils/colors'
import TextButton from './TextButton'
import Button from './Button'
import Quiz from './Quiz'
import { NavigationActions } from 'react-navigation'

export default class Answer extends React.Component {
    static navigationOptions = {
      title: 'Answer',
    };
    state={
        flag: false,
        end: false,
    }

    display = () => {  
        this.setState({flag: !this.state.flag})
    }

    toHome = () => {
        const topic = this.props.navigation.state.params.topic
        const index = this.props.navigation.state.params.index
        if (index < topic.questions.length - 1) {
            this.props.navigation.dispatch(NavigationActions.back())
        } else {
            this.props.navigation.navigate('FinalScore', { topic: topic})
        } 
    }

    score = (answer, response, topic) => {      
        if (answer === response) {
            topic.score = topic.score + 1 
            return <Text style={styles.text}>Yes</Text>
        }
        else{
            return <Text style={styles.text}>Nop</Text>
        }
    }

    render() {
      const topic = this.props.navigation.state.params.topic
      const response = this.props.navigation.state.params.response
      const index = this.props.navigation.state.params.index
      const answer = this.props.navigation.state.params.topic.questions[index].response
      return (
          <View style={styles.container}>
            <View>
                {this.score(answer, response, topic)}
                <TextButton style={styles.subtitle} onPress={this.display}>
                    Question
                </TextButton>
                <Text>{this.state.flag ? topic.questions[index].question : ''}</Text>
            </View>
            <View>
                <Button style={styles.button} onPress={this.toHome}>Next</Button>
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