import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome';
import Icon2 from '@expo/vector-icons/Feather';
import Icon3 from '@expo/vector-icons/MaterialCommunityIcons';

function alertX(){
    // alert('hello');
}

const Post = (props) => {
    const { avatar, name, imageurl, likes } = props;
    const [like, setLike] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.avatarWrapper}>
                <Image style={styles.avatar}
                    source={avatar} />
                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: '500' }}>{name}</Text>
            </View>
            <Image style={styles.imageWrapper} source={imageurl} />
            <View style={styles.buttonsWrapper}>
                <Icon 
                    name={!like ? 'heart-o' : 'heart'} 
                    size={26} 
                    style={{ marginLeft: 10 }} 
                    onPress={() => setLike(true)}
                />
                <Icon3 name="comment-outline" size={26} style={{ marginLeft: 10, marginTop: 5 }} onPress={alertX}/>
                <Icon2 name="share" size={25} style={{ marginLeft: 10 }} onPress={alertX}/>
                
            </View>
            <View style={styles.buttonsWrapper}>
                <Icon name="heart" size={22} style={{ marginLeft: 10 }} />
                <Text style={{ marginLeft: 10 }}>{`${likes} likes`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: 400,
        width: '100%',
    },
    avatarWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 5,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    imageWrapper: {
        height: 250,
        width: '100%',
        resizeMode: 'cover',
    },
    buttonsWrapper: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }

})


export default Post
