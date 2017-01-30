import React, { PropTypes, Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import MapView from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export class Map extends Component {

  render() {
    const { region, markers } = this.props
    return (
      <View style={styles.container}>
        <MapView
          ref={node => { this._mapView = node }}
          region={region}
          style={styles.map}
          showsIndoors={false}
          showsBuildings={false}
          showsCompass={false}
          showsScale={false}
          showsTraffic
          showsPointsOfInterest
          showsMyLocationButton
          showsUserLocation
          loadingEnabled
        >
          {markers.map(marker => (
            <MapView.Marker
              identifier={marker.id}
              key={marker.id}
              coordinate={marker}
            />
          ))}
        </MapView>
      </View>
    )
  }
}

Map.propTypes = {
  region: PropTypes.object,
  markers: PropTypes.array,
}

export default Map
