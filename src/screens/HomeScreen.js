import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

import Post from '../components/posts/Post';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Post />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
