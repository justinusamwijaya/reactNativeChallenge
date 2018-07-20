import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const style = {
    buttonStyle: {
        borderWidth: 1,
        width: 50,
        height: 50,
        margin: 1,
    }
}

export const UnMarkedPos = ({ onPress }) => {
    return (
        <TouchableOpacity style={ style.buttonStyle } onPress={ onPress }>
        </TouchableOpacity>
    )
}