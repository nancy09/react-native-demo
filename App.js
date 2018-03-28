import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';

import SearchPage from './src/views/SearchPage';


// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Openssss up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS style={styles.layout}
        initialRoute={{
          title: 'Hello World',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layout: {
    flex: 1
  }
});
