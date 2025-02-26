import { StyleSheet } from 'react-native'
import { Canvas, Circle } from '@shopify/react-native-skia'

import Breathe from '@/components/Breathe'

export default function HomeScreen() {
  return <Breathe />
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
