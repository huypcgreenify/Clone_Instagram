import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UIBottomsTabView from './UIBottomsTabView'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

const App = (props) => {
    return (
        <NavigationContainer >
            <Provider store={store}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={'UIBottomsTabView'} component={UIBottomsTabView}></Stack.Screen>
                </Stack.Navigator>
            </Provider>
        </NavigationContainer >
    )
}

export default App