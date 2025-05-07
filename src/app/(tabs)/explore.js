import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';

const Explore = () => {
     const router = useRouter();
     return (
          <View style={styles.container}>
               <Text>Explore</Text>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     }
});

export default Explore;