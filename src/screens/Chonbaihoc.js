import React, {useState, useRef, Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';

const defBg = '#000';
const defColor = '#fff';
const data = [
  {
    bg: defBg,
    color: defColor,
    category: 'Basic C++',
    subCategories: ['Basic infomations'],
  },
  {
    bg: defBg,
    color: defColor,
    category: 'Condition & loop',
    subCategories: ['Basic infomations'],
  },
  {
    bg: defBg,
    color: defColor,
    category: 'Data types, Arrays, Pointers',
    subCategories: ['Basic infomations'],
  },
  {
    bg: defBg,
    color: defColor,
    category: 'Functions',
    subCategories: ['Basic infomations'],
  },
  {
    bg: defBg,
    color: defColor,
    category: 'Classes & Objects',
    subCategories: ['Basic infomations'],
  },
  {
    bg: defBg,
    color: defColor,
    category: 'Advanced',
    subCategories: ['Basic infomations'],
  },
];

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default class App extends Component {
  render() {
    const [currentIndex, setCurrentIndex] = React.useState < any |null > (null);
    const ref = useRef();

    return (
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}>
        {data.map(({bg, color, category, subCategories}, index) => {
          return (
            <TouchableOpacity
              key="category"
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              style={styles.cardContainer}
              activeOpacity={0.9}>
              <View style={[styles.card, {backgroundColor: bg}]}>
                <Text style={[styles.heading, {color}]}>{category}</Text>
                {index === currentIndex && (
                  <View style={styles.subCategoriesList}>
                    {subCategories.map((subCategory, index) => (
                      <Text key={index} style={[styles.body, {color}]}>
                        {subCategory}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </Transitioning.View>
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
