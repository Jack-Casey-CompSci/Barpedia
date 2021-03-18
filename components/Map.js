import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity }  from 'react-native';
import StoreMarkers from "../data/stores.json";
import BeerPic from "../assets/beer.png";
import logo from "../assets/Barpedia_logo.png";
import { Container} from 'native-base';

export default class Map extends React.Component {
  render() {
    return (
      <Container>
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
        />
        ))}
        </MapView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    marginBottom: 110
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonBox: {
    flexDirection: "row",
    height: 50,
    width: Dimensions.get('window').width,
  },
  button1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccff",
    width: Dimensions.get('window').width/2
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff9999",
    width: Dimensions.get('window').width/2
  },
  logo: {
    width: Dimensions.get('window').width - 40,
    height: 200,
    marginLeft: 20,
  },
  btnText: {
    fontSize: 22,
    fontWeight: "700"
  }

}
);