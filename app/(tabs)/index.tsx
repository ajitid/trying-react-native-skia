import { StyleSheet } from 'react-native'

import { Canvas, Circle, RoundedRect } from '@shopify/react-native-skia'

export default function HomeScreen() {
  return (
    <Canvas style={{ flex: 1, backgroundColor: 'white' }}>
      <Circle c={{ x: 100, y: 100 }} r={30} color="blue" />
      <RoundedRect
        height={200}
        width={200}
        x={200}
        y={200}
        r={15}
        style={'stroke'}
        color={'red'}
      />
    </Canvas>
  )
}

/*
probably can be uses as a wrapper:
<ThemedView style={styles.optionallySomeStyle}>
  <Canvas>...
</ThemedView>
I noticed that adding ThemedView changes black background to something else. I think to do a vvvv Clear, 
I'd need to mark Canvas as `opaque` and then optionally set a background color.
For some reason, while listed https://shopify.github.io/react-native-skia/docs/canvas/overview, opaque property isn't available to me
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
