import React from 'react';
import { Image, Linking, Platform, ScrollView, StyleSheet, View, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { directory } from '../constants/directory';

/* TODO:  
  Build list of links with descriptions, icons, & initiating phone calls to designated numbers
  Store numbers in constants, store list of objects here ?
  Directory page
  About/help page
  Test in iOS/android

  https://twitter.com/DowntownCLE/status/1083725376654848001/photo/1
*/

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  callList = [
    {
      imageSrc: require('../assets/images/trafficlight.png'),
      issue: 'Broken Street Light or Street Base',
      contact: directory.CPP,
    },
    {
      imageSrc: require('../assets/images/streetlight.png'),
      issue: 'Broken or Inoperable Traffic Light',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/graffiti.png'),
      issue: 'Graffiti',
      contact: directory.DCA,
    },
    {
      imageSrc: require('../assets/images/dumpster.png'),
      issue: 'Overflowing Dumpster',
      altText: 'Contact Property Owner',
    },
    {
      imageSrc: require('../assets/images/tree.png'),
      issue: 'Broken Tree Limb',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/sidewalk.png'),
      issue: 'Lifted Sidewalk',
      contact: directory.BOS,
    },
    {
      imageSrc: require('../assets/images/litter.png'),
      issue: 'Litter on Sidewalk',
      contact: directory.DCA,
    },
    {
      imageSrc: require('../assets/images/mailbox.png'),
      issue: 'Damaged Mailbox',
      contact: directory.USPS,
    },
    {
      imageSrc: require('../assets/images/utilitybox.png'),
      issue: 'Damaged or Vandalized Utility Box',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/hydrant.png'),
      issue: 'Leaking Fire Hydrant',
      contact: directory.WD,
    },
    {
      imageSrc: require('../assets/images/streettrash.png'),
      issue: 'Trash in Streets',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/trashcan.png'),
      issue: 'Overflowing Trash Can',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/parkingmeter.png'),
      issue: 'Broken Parking Meter',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/busshelter.png'),
      issue: 'Damaged Bus Shelter',
      contact: directory.RTA,
    },
    {
      imageSrc: require('../assets/images/streetsign.png'),
      issue: 'Damaged or Missing Street Sign',
      contact: directory.CLE,
    },
    {
      imageSrc: require('../assets/images/banner.png'),
      issue: 'Damaged Banner',
      contact: directory.DCA,
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.listContainer}>{this.renderListElements()}</ScrollView>
      </View>
    );
  }

  renderListElements() {
    return this.callList.map((item, index) => (
      <ListItem
        onPress={item.contact ? () => this._handleCall(item.contact.phone) : () => {}}
        key={index}
        leftElement={
          <Image
            resizeMode="contain"
            source={item.imageSrc ? item.imageSrc : require('../assets/images/oh311.png')}
            style={styles.thumbnail}
          />
        }
        title={item.issue}
        rightElement={
          item.contact ? (
            <Icon name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} type="ionicon" color="#2e78b7" />
          ) : (
            <Text>{item.altText}</Text>
          )
        }
      />
    ));
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return <Text>DEV MODE</Text>;
    }
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
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'stretch',
    paddingTop: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  issueText: {
    fontSize: 14,
    color: '#000',
  },
  altText: {
    textAlignVertical: 'center',
    height: 45,
    fontSize: 14,
    color: '#2e78b7',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});
