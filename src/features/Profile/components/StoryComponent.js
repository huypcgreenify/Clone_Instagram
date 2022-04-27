import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { FakePicturesData } from './FakePicturesData'

const StoryComponent = (props) => {

    const Story = (props) => {
        return (
            <TouchableOpacity style={styles.tboStory}>
                <View style={styles.viewStory} >
                    <Image source={{ uri: props.image }} style={styles.imageStory} />
                </View>
                <Text style={styles.textStory}>{props.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            data={FakePicturesData}
            renderItem={({ item }) => <Story image={item.url} name={item.name} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false} />
    )
}

const styles = StyleSheet.create({
    tboStory: {
        width: 60,
        height: 76,
        marginLeft: 15,
        marginVertical: 15,
    },
    viewStory: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#00000050',
        borderRadius: 50,
    },
    imageStory: {
        width: 52,
        height: 52,
        borderRadius: 26,
        top: 3,
        left: 3,
    },
    textStory: {
        color: 'black',
        textAlign: 'center',
    }
})

export default StoryComponent    