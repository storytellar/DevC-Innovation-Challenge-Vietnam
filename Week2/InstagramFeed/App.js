import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from 'react-native';
import Icon from '@expo/vector-icons/Feather';
import Post from './Post';

export default class App extends React.Component {
  renderItem = item => {
    const { key ,avatar, name, imageurl, likes } = item;

    return <Post key={key} avatar={avatar} name={name} imageurl={imageurl} likes={likes} />
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
            }}
            style={{
              flex: 1,
              width: null,
              height: 50
            }}
            resizeMode="contain"
          />
          <Icon name="inbox" size={28} style={{ right: 15, position: 'absolute', bottom: 15 }} />
        </View>
        <View style={styles.body}>
          <FlatList data={mockData} renderItem={({ item })  => this.renderItem(item)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#eee',
  },
  body: {
    flexGrow: 1,
  }
});

const mockData = [
  {
    key: '1',
    avatar: require('./assets/x1.jpg'),
    name: 'Daniel',
    imageurl: require('./assets/x2.jpg'),
    likes: 120
  },
  {
    key: '2',
    avatar: require('./assets/x1.jpg'),
    name: 'James',
    imageurl: require('./assets/x3.jpg'),
    likes: 120
  },
  {
    key: '3',
    avatar: require('./assets/x1.jpg'),
    name: 'Thai',
    imageurl: require('./assets/x2.jpg'),
    likes: 120
  },
];

