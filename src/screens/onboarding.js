import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const OnBoarding = () => {
  const width = useSharedValue(100);
  const translateX = useSharedValue(0);
  const handlePress = () => {
    width.value = withSpring(width.value + 50);
    translateX.value += 50;
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));
  return (
    <View style={styles.container}>
      <Animated.View
        style={Object.assign(Object.assign({}, styles.box), {width})}
      />
      <Animated.View style={[styles.box2, animatedStyles]} />
      <View style={{alignSelf: 'center'}}>
        <Button onPress={handlePress} title="Click Me" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
  box2: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 64,
  },
});
export default OnBoarding;
