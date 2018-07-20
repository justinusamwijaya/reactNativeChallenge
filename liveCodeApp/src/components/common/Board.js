import React from 'react'
import { View } from 'react-native'
import { GameRow, UnMarkedPos } from './index'

const style = {
    boardStyle: {
        // borderWidth: 1, 
        // borderRadius: 2,
        // padding: 10, 
        // marginRight: 5,
        // marginLeft: 5,
        // marginTop: 10,
    }
}

export const Board = ({ children }) => {
    return (
        <View style={style.boardStyle}>
            { children }
        </View>
    )
}