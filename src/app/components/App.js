import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native'
import get from 'lodash.get'

import Map from './Map/Map'
import Slider from './Slider/Slider'

import data from './../mock.data'

import {
  getCurrentPosition,
} from './shared/scripts/location'

const {
  width: viewportWidth,
  height: viewportHeight,
} = Dimensions.get('window')

const ASPECT_RATIO = viewportWidth / viewportHeight
const LATITUDE = 0
const LONGITUDE = 0
const LATITUDE_DELTA = 0.003658
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  slider: {
    position: 'absolute',
    bottom: 10,
  },
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this._onReceivedLocation = this._onReceivedLocation.bind(this)
    this._onSnapToItem = this._onSnapToItem.bind(this)
  }

  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    markers: data,
  }

  componentDidMount() {
    getCurrentPosition(this._onReceivedLocation)
  }

  _onReceivedLocation(position) {
    this.setState(prevState => ({
      region: {
        ...prevState.region,
        latitude: get(position, 'coords.latitude'),
        longitude: get(position, 'coords.longitude'),
      },
    }))

    const _mapView = get(this._map, '_mapView', false)
    if (_mapView) {
      _mapView.fitToElements(true)
    }
  }

  _onSnapToItem(key, item) {
    setTimeout(() => {
      const _mapView = get(this._map, '_mapView', false)
      _mapView.fitToSuppliedMarkers([item.id], true)
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Map
          ref={node => { this._map = node }}
          region={this.state.region}
          markers={data}
        />
        <Slider
          style={styles.slider}
          onSnapToItem={this._onSnapToItem}
          items={data}
        />
      </View>
    )
  }
}
