import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import StoreMarkers from "../data/stores.json";
import BeerPic from "../assets/beer.png";

export default class Map extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
      latitude: 40.79331567231344, 
      longitude: -77.86254004954345,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    {StoreMarkers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.name}
      description={marker.description}
      image={BeerPic}
    />
    ))}
    </MapView>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});