import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const Navbar = ({label}) => {
    return (
        <View  style={styles.container}>
            <Text style={styles.welcome}>{ label ? label : 'this is just some trial stuff' }</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginBottom: 15,
      paddingTop: 25,
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
  });