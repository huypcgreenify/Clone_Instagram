import React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { useSelector } from "react-redux"
import UserPictureAndFollows from '../components/UserPictureAndFollows'
import UserInfo from "../components/UserInfo"
import ButtonComponent from "../../../components/ButtonComponent"
import StoryComponent from "../components/StoryComponent"
import UserPostProfile from "../components/UserPostProfile"

const ProfileScreen = (props) => {

    const user = useSelector(state => state.user)

    return (
        <ScrollView style={styles.container}>
            <UserPictureAndFollows user={user} />
            <UserInfo user={user} />
            <ButtonComponent buttonName={'Edit Profile'} />
            <StoryComponent />
            <UserPostProfile />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

})

export default ProfileScreen