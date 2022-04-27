/**
 * @format
 */

import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import App from './src/navigation/App'
import { HomeScreen, ProfileScreen, ReelsScreen, SearchScreen, ShopScreen } from './src/features'

AppRegistry.registerComponent(appName, () => () => <App />)