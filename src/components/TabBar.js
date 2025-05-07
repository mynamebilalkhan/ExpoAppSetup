import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import TabBarButton from './TabBarButton';
import { useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export const TabBar = ({ state, descriptors, navigation }) => {
     const { colors } = useTheme();

     const [dimensions, setDimensions] = useState({height: 20, width: 100});

     const buttonWidth = dimensions.width / state.routes.length;

     const onTabbarLayout = (e) => {
          setDimensions({
               height: e.nativeEvent.layout.height,
               width: e.nativeEvent.layout.width,
          })
     };

     const tabPositionX = useSharedValue(0);

     const animatedStyle = useAnimatedStyle(() => {
          return {
               transform: [{translateX: tabPositionX.value}],
          };
     });

     return (
          <View onLayout={onTabbarLayout} style={styles.tabbar}>
               <Animated.View style={[animatedStyle, {
                    position: 'absolute',
                    backgroundColor: '#723FEB',
                    borderRadius: 30,
                    marginHorizontal: 12,
                    height: dimensions.height - 15,
                    width: buttonWidth - 25,
                    left: 0,
               }]} />
               {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                         options.tabBarLabel !== undefined
                         ? options.tabBarLabel
                         : options.title !== undefined
                         ? options.title
                         : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                         
                         tabPositionX.value = withSpring(buttonWidth * index, {duration: 1500} );

                         const event = navigation.emit({
                              type: 'tabPress',
                              target: route.key,
                              canPreventDefault: true,
                         });

                         if (!isFocused && !event.defaultPrevented) {
                              navigation.navigate(route.name);
                         }
                    };

                    const onLongPress = () => {
                         navigation.emit({
                              type: 'tabLongPress',
                              target: route.key,
                         });
                    };

                    return (
                         <TabBarButton 
                              key={route.name}
                              onPress={onPress} 
                              onLongPress={onLongPress} 
                              isFocused={isFocused}
                              routeName={route.name}
                              color={isFocused ? colors.primary : colors.text}
                              label={label}
                              options={options}
                         />
                    );
               })}
          </View>
     );
};

const styles = StyleSheet.create({
     tabbar: {
          position: 'absolute',
          bottom: 50,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          marginHorizontal: 80,
          paddingVertical: 15,
          borderRadius: 35,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 20},
          shadowRadius: 20,
          shadowOpacity: 0.9,
     }
})