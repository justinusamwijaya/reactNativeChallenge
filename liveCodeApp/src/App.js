import React, { Component } from 'react';
import { View } from 'react-native';
import { Navbar } from './components/static/navbar'
import Game from './components/Game.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers, {}, applyMiddleware(reduxThunk)) }>
        <View>
          <Navbar label="Tic Tac Toe" />
          <Game/>
        </View>
      </Provider>
    );
  }
}
