import React, { useEffect } from "react"
import { StyleSheet, Text, ScrollView } from "react-native"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from "../../../redux/slices/UserSlice"
import StoryComponent from "../../Profile/components/StoryComponent"
import PostListHome from "../components/PostListHome"

const HomeScreen = (props) => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const user = await axios.get('https://randomuser.me/api/')
        const newUser = {
            username: user.data.results[0].login.username,
            profilePicture: user.data.results[0].picture.large
        }
        console.log(newUser)
        dispatch(setUser(newUser))
    }

    return (
        <ScrollView style={styles.container}>
            <StoryComponent />
            <PostListHome />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

})

export default HomeScreen