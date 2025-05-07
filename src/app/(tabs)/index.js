import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../store/features/basic/actions';

const Home = () => {
     const router = useRouter();
     const dispatch = useDispatch();
     const { basic, loading } = useSelector((state) => state.Basic);

     return (
          <View style={styles.container}>
               <Text>Home</Text>
               <Link href="/users/1" push>Go to user 1</Link>
               <Pressable onPress={() => router.push("/users/2")}>
                    <Text>Go to users 2</Text>
               </Pressable>

               <Pressable style={styles.button} onPress={() => dispatch(setName())}>
                    <Text style={styles.buttonText}>
                         {loading ? 'Loading...' : 'Set Static Name'}
                    </Text>
               </Pressable>

               {basic && (
                    <Text style={styles.name}>Stored Name: {basic}</Text>
               )}
          </View>
     );
}


const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
     },
     heading: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
     },
     link: {
          fontSize: 16,
          color: 'blue',
          marginVertical: 10,
     },
     button: {
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: 'green',
          borderRadius: 5,
     },
     buttonText: {
          color: 'white',
          fontSize: 16,
     },
     name: {
          marginTop: 20,
          fontSize: 18,
          fontWeight: '500',
     },
});

export default Home;