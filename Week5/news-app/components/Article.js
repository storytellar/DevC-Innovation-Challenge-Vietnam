import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import moment from 'moment';
import { Card, Button, Icon } from 'react-native-elements';

const Article = (props) => {
    const item = props.data;
    return (
        // <Card title={item.title} image={{ uri: item.urlToImage }}>
        //     <View style={styles.row}>
        //         <Text style={styles.label}>Source</Text>
        //         <Text style={styles.info}>{item.source.name}</Text>
        //     </View>
        //     <Text style={{ marginBottom: 10 }}>{item.content}</Text>
        //     <View style={styles.row}>
        //         <Text style={styles.label}>Published</Text>
        //         <Text style={styles.info}>{moment(item.publishedAt).startOf('hour').fromNow()}</Text>
        //     </View>
        //     <Button
        //         icon={<Icon name='book' color='#ffffff' />}
        //         title="Read more"
        //         buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        //         onPress={() => props.onPressArticle(item.url)}
        //     />
        // </Card>

        <TouchableOpacity
            onPress={() => props.onPressArticle(item.url)}
            style={styles.articleWrapper}
        >
            <View style={styles.article}>
                <Image style={styles.imageWrapper} source={{ uri: item.urlToImage }} />
                <View style={styles.layer}>
                    <Text style={styles.publisher}>{item.source.name}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.info}>{moment(item.publishedAt).startOf('hour').fromNow()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    articleWrapper: {
        // backgroundColor: 'blue',
        width: 370,
        height: 370,

        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    article: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 10,
        width: 320,
        height: 320,
    },
    imageWrapper: {
        position: 'absolute',
        zIndex: 0,
        borderRadius: 20,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    layer: {
        width: '100%',
        backgroundColor: 'rgba(47, 47, 47, 0.6)',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d7edfc',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    publisher: {
        fontSize: 16,
        fontWeight: '400',
        color: '#d7edfc',
        paddingTop: 10,
        paddingHorizontal: 20,
    },
    info: {
        fontSize: 14,
        fontWeight: '300',
        color: '#d7edfc',
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
})


export default Article
