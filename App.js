/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Juego from './Juego';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Juego: {screen: Juego},
});

class App extends React.Component{
  render(){
    return(
      <>
        <AppNavigator />
      </>
    );
  }
}

export default App;
