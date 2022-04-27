import React from "react"
import { StyleSheet, Text, View } from "react-native"

const ShopScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>ShopScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default ShopScreen