import React, {useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Video from 'react-native-video';

const height = Dimensions.get('window').height;

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
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
    //flex: 1,
  },
  videoTouchable: {},
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
