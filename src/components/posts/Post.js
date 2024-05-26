import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';

import Video from 'react-native-video';

import MusicIcon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/AntDesign';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ShareIcon from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Post = () => {
  const [playPause, setPlayPause] = useState();

  const onPayPausePressed = () => {
    //console.warn('paused');
    setPlayPause(!playPause);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.videoTouchable}
        onPress={onPayPausePressed}>
        <Video
          style={styles.video}
          source={require('../../assets/videos/reels/skateboarding.mp4')}
          onError={e => console.log('Error is: ', e)}
          resizeMode="cover"
          repeat={true}
          paused={playPause}
        />
      </TouchableWithoutFeedback>

      <View style={styles.functionalityButtonView}>
        <View style={styles.functionalityButtonRightView}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/isabellaGrace.jpg')}
          />

          <View style={styles.rightIconTextView}>
            <HeartIcon name="heart" size={30} color="white" />
            <Text style={styles.iconCounterText}>100</Text>
          </View>

          <View style={styles.rightIconTextView}>
            <MessageIcon name="message-processing" size={30} color="white" />
            <Text style={styles.iconCounterText}>120</Text>
          </View>

          <View style={styles.rightIconTextView}>
            <ShareIcon name="share-alt" size={30} color="white" />
            <Text style={styles.iconCounterText}>300</Text>
          </View>
        </View>

        <View style={styles.nameCommentSongView}>
          <Text style={styles.nameText}>@Isabella Grace</Text>
          <Text style={styles.commentText}>Cool!!! it is good practice</Text>

          <View style={styles.songView}>
            <View style={styles.songIconTextView}>
              <MusicIcon name="music" size={22} color="white" />
              <Text style={styles.songText}>Linkin Park - In the end</Text>
            </View>

            <Image
              style={styles.songImage}
              source={require('../../assets/images/isabellaGrace.jpg')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
  },
  videoTouchable: {},
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  functionalityButtonView: {
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  functionalityButtonRightView: {
    alignSelf: 'flex-end',
    height: 270,
    justifyContent: 'space-between',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginBottom: 8,
  },
  rightIconTextView: {
    alignItems: 'center',
  },
  iconCounterText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  nameCommentSongView: {
    paddingBottom: 10,
  },
  songView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songIconTextView: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 20,
    color: 'white',
  },
  commentText: {
    width: '80%',
    paddingVertical: 5,
    color: '#e1e1e1',
    fontSize: 17,
  },
  songNameImageView: {},
  songText: {
    color: 'white',
    paddingLeft: 10,
  },
  songImage: {
    height: 30,
    width: 30,
    marginRight: 10,
    borderRadius: 100,
  },
});
