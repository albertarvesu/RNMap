import React, { PropTypes } from 'react'

import {
  Dimensions,
} from 'react-native'

import Carousel from 'react-native-snap-carousel'

import { itemWidth } from './SliderEntry.style'
import SliderEntry from './SliderEntry'
import sliderStyles from './Slider.style'

const { width: viewWidth } = Dimensions.get('window')

const Slider = ({ items, style, onSnapToItem }) => (
  <Carousel
    items={items}
    firstItem={Math.floor(items.length / 2)}
    inactiveSlideScale={0.80}
    inactiveSlideOpacity={0.5}
    renderItem={entry => (<SliderEntry {...entry} />)}
    sliderWidth={viewWidth}
    itemWidth={itemWidth}
    slideStyle={sliderStyles.slide}
    containerCustomStyle={[style, sliderStyles.slider]}
    contentContainerCustomStyle={sliderStyles.sliderContainer}
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={false}
    snapOnAndroid
    onSnapToItem={onSnapToItem}
  />
)

Slider.propTypes = {
  items: PropTypes.array,
  onSnapToItem: PropTypes.func,
  style: PropTypes.ob,
}

export default Slider
