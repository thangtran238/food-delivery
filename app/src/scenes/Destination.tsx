import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

// create a component
const Destination = () => {

  return (
    <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
  {this.state.markers.map((marker, index) => (
    <Marker
      key={index}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}
</MapView>;
  );
};

// define your styles
const styles = StyleSheet.create({
  map: {
  },
});

//make this component available to the app
export default Destination;
