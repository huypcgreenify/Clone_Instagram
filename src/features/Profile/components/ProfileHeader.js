import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useSelector } from 'react-redux'

const ProfileHeader = (props) => {

    const user = useSelector(state => state.user)

    return (
        <View style={styles.container}>
            <Text style={styles.titleUserName}>{user.username}</Text>
            <View style={styles.iconPlusAndBars}>
                <Icon name='plus-square' size={26} style={styles.iconPlusSquare} color={'black'} />
                <Icon name='bars' size={26} style={styles.iconBars} color={'black'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleUserName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },
    iconPlusSquare: {
        marginRight: 30,
    },
    iconPlusAndBars: {
        flexDirection: 'row',
    }

})

export default ProfileHeader