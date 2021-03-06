import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebBrowser } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBlock}>
          <Text>
            This app is an open source project written in 24 hours to help residents connect with and improve the City
            of Cleveland.
          </Text>
          <Text />
          <Text>It is not built in association with the city or any of its affiliated organizations.</Text>
        </View>
        <View style={styles.textBlock}>
          <Text
            style={styles.helpLinkText}
            onPress={() => this._handleLinkPress('https://twitter.com/DowntownCLE/status/1083725376654848001')}
          >
            Image, contact information and inspiration from this @DowntownCLE tweet
          </Text>
        </View>
        <View style={styles.textBlock}>
          <Text
            style={styles.helpLinkText}
            onPress={() => this._handleLinkPress('https://github.com/stahlscott/cle311')}
          >
            Source code @ github
          </Text>
        </View>
        <View style={styles.textBlock}>
          <Text>Scott Stahl, 2019</Text>
          <Text style={styles.helpLinkText} onPress={() => this._handleLinkPress('https://twitter.com/stahlish')}>
            @stahlish on twitter
          </Text>
        </View>
      </View>
    );
  }

  _handleLinkPress(link) {
    WebBrowser.openBrowserAsync(link);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    margin: 10,
    backgroundColor: '#fff',
  },
  textBlock: {
    marginBottom: 40,
  },
  helpLink: {
    paddingVertical: 8,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
