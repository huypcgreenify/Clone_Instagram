import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { FakePicturesData } from './FakePicturesData'

const UserPostProfile = (props) => {

    const Story = (props) => {
        return (
            <TouchableOpacity>
                <View>
                    <Image source={{ uri: props.image }} style={styles.imageStory} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={FakePicturesData}
            renderItem={({ item }) => <Story image={item.url} name={item.name} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3} />
    )
}

const styles = StyleSheet.create({
    tboStory: {
        width: 60,
        height: 76,
        marginLeft: 15,
    },
    viewStory: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#00000050',
        borderRadius: 50,
    },
    imageStory: {
        width: 130,
        height: 130,
    },
    textStory: {
        color: 'black',
        textAlign: 'center',
    }
})

export default UserPostProfile    