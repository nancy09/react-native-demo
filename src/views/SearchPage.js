'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  }
});

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
    };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.description}>
            Search for houses to buy!
          </Text>
          <Text style={styles.description}>
            Search by place-name, postcode or search near your location.
          </Text>
        </View>

        <View style={styles.flowRight}>
          <TextInput style={styles.searchInput} placeholder='Search via name or postcode' 
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)} />
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <Image source={{uri: 'http://placehold.it/300x200'}} style={styles.image} />
      </View>
    );
  }

  onSearchTextChanged(event) {
    console.log('onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }
};
