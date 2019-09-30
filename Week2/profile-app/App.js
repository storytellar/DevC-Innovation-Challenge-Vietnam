import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { blue } from 'ansi-colors';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/photos/sample_1.jpg') },
  { id: 2, imgSource: require('./assets/photos/sample_2.jpg') },
  { id: 3, imgSource: require('./assets/photos/sample_3.jpg') },
  { id: 4, imgSource: require('./assets/photos/sample_4.jpg') },
  { id: 5, imgSource: require('./assets/photos/sample_5.jpg') },
  { id: 6, imgSource: require('./assets/photos/sample_6.jpg') },
  { id: 7, imgSource: require('./assets/photos/sample_7.jpg') },
  { id: 8, imgSource: require('./assets/photos/sample_8.jpg') },
];
const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TOP}>
        <TouchableOpacity><FontAwesome name="arrow-left" color='#bbb' size={25} /></TouchableOpacity>
        <TouchableOpacity><FontAwesome name="th-large" color='#bbb' size={25} /></TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require('./assets/avatar.png')}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Lê Hồng Thái</Text>
          <Text style={styles.userJobTitle}>Developer</Text>
          <View style={styles.btnWrapper}>
            <TouchableOpacity onPress={() => { alert('Followed!'); }}>
              <View style={[styles.btn, styles.followBtn]}>
                <Text style={styles.btnLabel}>Follow</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert('Sent!'); }}>
              <View style={[styles.btn, styles.sendBtn]}>
                <FontAwesome name="send-o" color='white' size={16} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View style={styles.countBox}>
          <Text style={styles.countText}>641</Text>
          <Text style={styles.countLabelText}>Photos</Text>
        </View>
        <View style={styles.countBox}>
          <Text style={styles.countText}>15k</Text>
          <Text style={styles.countLabelText}>Followers</Text>
        </View>
        <View style={styles.countBox}>
          <Text style={styles.countText}>972</Text>
          <Text style={styles.countLabelText}>Following</Text>
        </View>
      </View>
      <View style={styles.imagesAreaBox}>
        <ScrollView contentContainerStyle={styles.imagesArea} >
          <View >
            {imgData.slice(0, centerImgData).map(item => {
              if (item.id % 2 === 0)
                return <Image style={[styles.image, styles.imageHighlights]} source={item.imgSource} key={item.id}></Image>
              else {
                return <Image style={styles.image} source={item.imgSource} key={item.id}></Image>
              }
            })}
          </View>
          <View >
            {imgData.slice(centerImgData).map(item => {
              if (item.id % 2 !== 0)
                return <Image style={[styles.image, styles.imageHighlights]} source={item.imgSource} key={item.id}></Image>
              else {
                return <Image style={styles.image} source={item.imgSource} key={item.id}></Image>
              }
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.BOTTOM}>
        <TouchableOpacity><FontAwesome name="bell-o" color='#888' size={23} /></TouchableOpacity>
        <TouchableOpacity><FontAwesome name="plus-circle" color={FOLLOW_COLOR} size={28} /></TouchableOpacity>
        <TouchableOpacity><FontAwesome name="user-o" color='#888' size={23} /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TOP: {
    flex: 0.1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 20,
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
  },
  avatarWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  userInfo: {
    flex: 0.6,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  userJobTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#aaa',
    paddingTop: 3,
  },
  btn: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnWrapper: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  followBtn: {
    width: 120,
    backgroundColor: FOLLOW_COLOR,
  },
  sendBtn: {
    width: 50,
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 10,
  },
  btnLabel: {
    color: 'white',
    fontSize: 16,
  },
  countArea: {
    flex: 0.25,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: '600',
  },
  countLabelText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#888',
  },
  imagesAreaBox: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  imagesArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,

    marginBottom: 15,
  },
  imageHighlights: {
    height: 220,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#bbb',
    borderWidth: 0.5,
  },
  BOTTOM: {
    flex: 0.1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 80,
    marginRight: 80,
  },
});
