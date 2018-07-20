import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { GameRow, Board } from './common'
import { connect } from 'react-redux'
import { newGame } from '../actions'

const mapStateToProps = state => {
    return {
        result: state.game.result
    }
}

export default connect(mapStateToProps, { newGame })(
class Game extends Component {

    componentWillMount() {
        this.props.newGame()
    }
  render() {
    return (
      <View>
        <Text>{this.props.result}</Text>
        <Board>
            <GameRow />
            <GameRow row='1' />
            <GameRow row='2' />
        </Board>


      </View>
    )
  }
})