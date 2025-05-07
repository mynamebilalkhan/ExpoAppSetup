import { Tabs } from 'expo-router';
import { TabBar } from '../../components/TabBar';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
     return (
          <Tabs
               screenOptions={{headerShown: false}}
               tabBar={(props) => <TabBar {...props} />}
          >
               <Tabs.Screen 
                    name="index" 
                    options={{
                         title: 'Home',
                         tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                    }} 
               />
               <Tabs.Screen 
                    name="explore" 
                    options={{
                         title: 'Explore',
                         tabBarIcon: ({ color }) => <MaterialIcons name="explore" size={24} color={color} />,
                    }} 
               />
               <Tabs.Screen 
                    name="profile" 
                    options={{
                         title: 'Profile',
                         tabBarIcon: ({ color }) => <AntDesign name="profile" size={24} color={color} />,
                    }} 
               />
          </Tabs>
     );
}