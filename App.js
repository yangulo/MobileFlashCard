import React from 'react'
import { Constants } from 'expo'
import DeckCard from './components/DeckCard'
import AddDeck from './components/AddDeck'
import { gray, white, purple } from './utils/colors'
import { View, Text, Platform, StatusBar, StyleSheet, Button} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Topics from './components/Topics'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import Answer from './components/Answer'
import FinalScore from './components/FinalScore'
import { getTopics, setLocalNotification, listenForNotifications } from './utils/helpers'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const AppTabs = TabNavigator({
  DeckCard: {
    screen: DeckCard,
    navigationOptions: {
      tabBarLabel: 'Deck'
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Card'
    },
  },
  },{
    navigationOptions: {
      header: null
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: AppTabs,
    },
    Topics: {
      screen: Topics,
    },
    Quiz:{
      screen: Quiz,
    },
    AddCard:{
      screen: AddCard,
      navigationOptions: {
        tabBarLabel: 'Add Card'
      }
    },
    Answer:{
      screen: Answer,
      navigationOptions: {
        tabBarLabel: 'Add Card'
      }
    },
    FinalScore:{
      screen: FinalScore,
      navigationOptions: {
        tabBarLabel: 'Final Score'
      }
    },
})

async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

export default class App extends React.Component {

  componentDidMount() {
    getiOSNotificationPermission();
    setLocalNotification()
  }

  componentWillMount() {
    listenForNotifications();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={gray} barStyle="light-content" />
        <MainNavigator screenProps={{topics: getTopics()}}/>
      </View>
    )
  }
}




