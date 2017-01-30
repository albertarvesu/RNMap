import { StyleSheet } from 'react-native'
import { itemHorizontalMargin, itemWidth } from './SliderEntry.style'

export default StyleSheet.create({
  slider: {
    marginBottom: 30,
  },
  sliderContainer: {
  },
  slide: {
    flexDirection: 'column',
    width: itemWidth,
    paddingHorizontal: itemHorizontalMargin,
  },
})
