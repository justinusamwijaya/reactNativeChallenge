import React from 'react'
import { View, Text } from 'react-native'

const style = {
    buttonStyle: {
        borderWidth: 1,
        width: 50,
        height: 50,
        margin: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color:'white',
        fontSize: 25,
    }
}

export const Markedpos = ({ children }) => {
    return (
        <View style={style.buttonStyle}>
            <Text style={style.textStyle}>    
            { children }
            </Text>
        </View>
    )
}