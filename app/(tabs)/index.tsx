import { StyleSheet } from 'react-native'

import { Canvas, Circle } from '@shopify/react-native-skia'

export default function HomeScreen() {
  return (
    <Canvas style={{ flex: 1 }}>
      <Circle c={{ x: 100, y: 100 }} r={30} color="lightgreen" />
    </Canvas>
  )
}

/*
probably can be uses as a wrapper:
<ThemedView style={styles.optionallySomeStyle}>
  <Canvas>...
</ThemedView>
I noticed that adding ThemedView changes black background to something else. I think to do a vvvv Clear, I'd need to give a background color to Canvas
*/

const styles = StyleSheet.create({
  someContainerWithInvalidStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  anotherStyle: {},
})
