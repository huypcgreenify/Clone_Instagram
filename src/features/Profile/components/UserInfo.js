import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const UserInfo = (props) => {

    const { user } = props

    return (
        <View style={styles.container}>
            <Text style={styles.textUsername}>{user.username}</Text>
            <Text style={styles.textAbout}>{user.about}</Text>
            <Text style={styles.textFollowedBy}>
                Followed by
                <Text style={styles.textBold}> {user.followedBy[0]} </Text>
                and
                <Text style={styles.textBold}> {user.followedBy[1]}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
    },
    textBold: {
        fontWeight: 'bold',
        color: 'black',
    },
    textUsername: {
        fontWeight: 'bold',
        color: 'black',
        paddingVertical: 5,
    },
    textFollowedBy: {
        marginTop: 5,
        marginBottom: 10,
    },
    textAbout: {
        color: 'black',
    }
})

export default UserInfo    