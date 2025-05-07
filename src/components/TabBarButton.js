import { Text, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEffect } from 'react';

const TabBarButton = ({onPress, onLongPress, isFocused, routeName, color, label, options}) => {
     const { colors } = useTheme();

     const scale = useSharedValue(0);

     useEffect(() => {
          scale.value = withSpring(
               typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused,
               {duration: 350}
          );
     }, [scale, isFocused]);

     const animatedTextStyle = useAnimatedStyle(() => {
          const opacity = interpolate(scale.value, [0, 1], [1, 0]);
          return {opacity};
     });

     const animatedIconStyle = useAnimatedStyle(() => {
          const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
          const top = interpolate(scale.value, [0, 1], [0, 9]);
          return {
               transform: [{
                    scale: scaleValue
               }],
               top: top
          };
     });

     return (
          <Pressable
               accessibilityRole="button"
               accessibilityState={isFocused ? { selected: true } : {}}
               accessibilityLabel={options.tabBarAccessibilityLabel}
               testID={options.tabBarTestID}
               onPress={onPress}
               onLongPress={onLongPress}
               style={styles.tabBarItem}
          >
                    <Animated.View style={animatedIconStyle}>
                         {options.tabBarIcon && options.tabBarIcon({
                              focused: isFocused,
                              color: isFocused ? '#fff' : colors.text,
                              size: 24,
                         })}
                    </Animated.View>
                    <Animated.Text style={[{ 
                         color: isFocused ? colors.primary : colors.text,
                         marginTop: 4,
                         fontSize: 12,
                         }, animatedTextStyle ]}
                    >
                         {label}
                    </Animated.Text>
          </Pressable>
     );
}

const styles = StyleSheet.create({
     tabBarItem: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
     }
})

export default TabBarButton;