import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { FakePostData } from './FakePostData'
import Icon from 'react-native-vector-icons/FontAwesome5'

const PostListHome = (props) => {

    const [selectedHeart, setSelectedHeart] = useState(false);
    const [selectedFavor, setSelectedFavor] = useState(false);

    const Story = (props) => {
        return (
            <View>
                <View style={styles.viewImgTxtUserIcon}>
                    <View style={styles.viewImgTxtUser}>
                        <Image style={styles.homePictureUser} source={{ uri: props.image }} />
                        <Text style={styles.textUsername}>{props.username}</Text>
                    </View>
                    <Icon name={'ellipsis-h'} size={20} color={'black'} />
                </View>

                <View>
                    <Image style={styles.homePicture} source={{ uri: props.image }} />
                </View>

                <View style={styles.viewIcon}>
                    <View style={styles.viewThreeIcon}>
                        <TouchableOpacity
                            onPress={() => setSelectedHeart(!selectedHeart)}
                        >
                            {
                                selectedHeart ? <Icon name={'heart'} size={24} color={'black'} style={styles.iconInThree} solid />
                                    : <Icon name={'heart'} size={24} color={'black'} style={styles.iconInThree} />
                            }
                        </TouchableOpacity>
                        <Icon name={'comment-dots'} size={24} color={'black'} style={styles.iconInThree} />
                        <Icon name={'paper-plane'} size={24} color={'black'} style={styles.iconInThree} />
                    </View>
                    <TouchableOpacity
                        onPress={() => setSelectedFavor(!selectedFavor)}
                    >
                        {
                            selectedFavor ? <Icon name={'bookmark'} size={24} color={'black'} style={styles.iconIn} solid />
                                : <Icon name={'bookmark'} size={24} color={'black'} style={styles.iconIn} />
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.txtLike}>{props.likes} Likes</Text>
                    <Text style={styles.txtTitle}>{props.title}</Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={FakePostData}
                renderItem={({ item }) => <Story image={item.image} title={item.title} likes={item.likes} username={item.user.first_name} />}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    viewImgTxtUserIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    viewImgTxtUser: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    homePictureUser: {
        width: 30,
        height: 30,
        borderRadius: 20
    },
    textUsername: {
        marginLeft: 10,
        fontWeight: 'bold'
    },
    homePicture: {
        width: width,
        height: 400,
        resizeMode: 'cover'
    },
    viewIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    viewThreeIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconInThree: {
        marginLeft: 10,
    },
    iconIn: {
        marginRight: 10,
    },
    txtLike: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
    },
    txtTitle: {
        marginLeft: 10,
        marginBottom: 15,
    }
})

export default PostListHome