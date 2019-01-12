import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { directory } from '../constants/directory';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'City Services Directory',
  };

  render() {
    return (
      <View style={styles.container}>
        {Object.values(directory).map((entry, index) => (
          <View style={styles.helpLink} key={index}>
            <Text>{entry.name}</Text>
            <TouchableOpacity onPress={() => this._handleCall(entry.phone)}>
              <Text style={styles.helpLinkText}>{entry.phone}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }

  _handleCall(number) {
    const url = `tel:${number}`;
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    margin: 10,
    backgroundColor: '#fff',
  },
  helpLink: {
    paddingVertical: 8,
    fontSize: 18,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
