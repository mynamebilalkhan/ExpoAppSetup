import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';

const Profile = () => {
     const router = useRouter();
     return (
          <View style={styles.container}>
               <Text>Profile</Text>
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

export default Profile;