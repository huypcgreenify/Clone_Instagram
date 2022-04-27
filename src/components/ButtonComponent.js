import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.textBtn}>{props.buttonName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    textBtn: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    }
})

export default ButtonComponent