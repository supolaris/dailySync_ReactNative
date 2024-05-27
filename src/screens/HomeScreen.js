import React from 'react';
import {View, StatusBar, StyleSheet, FlatList, Dimensions} from 'react-native';

import Post from '../components/posts/Post';
import {PostsData} from '../assets/data/PostsData';

const height = Dimensions.get('window').height;
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <FlatList
        data={PostsData}
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({item}) => <Post post={item} />}
      />
      <Post post={PostsData} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
