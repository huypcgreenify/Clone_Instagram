import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    profilePicture: '',
    followers: 100,
    following: 290,
    posts: 300,
    about: 'Giới thiệu về bản thân',
    followedBy: ['Thang', 'Duyen', 'Hieu']
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                username: action.payload.username,
                profilePicture: action.payload.profilePicture,
                followers: state.followers,
                following: state.following,
                posts: state.posts,
                about: state.about,
                followedBy: state.followedBy
            }
        },
        logout: (state) => {
            return {
                ...state,
                username: '',
                profilePicture: '',
                followers: 0,
                following: 0,
                posts: 0,
                about: '',
                followedBy: []
            }
        }
    }
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer