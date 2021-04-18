import {StatusBar} from 'expo-status-bar';
import React, {useState, useRef, Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';
import data from '../components/data';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default class App extends Component {
  render() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const ref = useRef();
    return (
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}></Transitioning.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#242424',
    borderWidth: 0.25,
  },
  heading: {
    fontSize: 30,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: -2,
  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
  },
  subCategoriesList: {},
});
