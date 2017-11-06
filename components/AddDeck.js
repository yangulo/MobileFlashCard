import React from 'react'
import { View, Text, Platform, StatusBar, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { gray, white, purple, lightGray } from '../utils/colors'
import { getTopics } from '../utils/helpers'

export default class AddDeck extends React.Component {
  state={
    title:''
  }

  addTopicToDeck = () => {
    const titleAdded = this.state.title
    getTopics()[titleAdded] = {
      title: titleAdded, 
      score: 0, 
      questions: []
    }
    this.props.navigation.navigate('DeckCard', {topics: getTopics()})
  }

  render() {
      return (
          <View style={styles.container}>
            <View >
              <Text style={styles.Text}>What is the title of your new deck?</Text>
            </View>
            <View>
              <TextInput style={styles.Input} placeholder="Deck title" value={this.state.title} onChangeText={(text) => this.setState({title: text})}/>
            </View>
            <View style={styles.SpaceViews}>
              <TouchableOpacity onPress={this.addTopicToDeck}>
                <Text style={styles.Button}>Submit</Text>
              </TouchableOpacity>
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
