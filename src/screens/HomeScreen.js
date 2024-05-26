import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Post from '../components/posts/Post';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
