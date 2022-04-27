import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, ProfileScreen, ReelsScreen, SearchScreen, ShopScreen } from '../features'
import ProfileHeader from '../features/Profile/components/ProfileHeader'
import HomeHeader from '../features/Home/components/HomeHeader'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()

const screenOptions = ({ route }) => ({
    tabBarStyle: {
        height: 50,
        paddingBottom: 5,
    },
    tabBarActiveTintColor: 'black',
    tabBarShowLabel: false,
    tabBarIcon: ({ focused, color, size }) => {
        let screenName = route.name
        let iconName = screenName === 'Home' ? 'home'
            : (screenName == 'Search' ? 'search'
                : (screenName == 'Reels' ? 'video'
                    : (screenName == 'Shop' ? 'heart'
                        : (screenName == 'Profile' ? 'user' : ''))))
        return <Icon name={iconName} size={size} color={color} />
    }
})

const UIBottomsTabView = (props) => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Home' component={HomeScreen}
                options={{
                    headerTitle: () => <HomeHeader />
                }} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Reels' component={ReelsScreen} />
            <Tab.Screen name='Shop' component={ShopScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={{
                    headerTitle: () => <ProfileHeader />
                }} />
        </Tab.Navigator>
    )
}

export default UIBottomsTabView