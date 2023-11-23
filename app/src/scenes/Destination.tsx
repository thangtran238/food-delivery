import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

const Destination = () => {
  const [searchText, setSearchText] = useState("");
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825, 
    longitude: -122.4324, 
  });
  const [showSetLocationButton, setShowSetLocationButton] = useState(true); 

  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  const markerCoordinate = {
    latitude: 37.8,
    longitude: -122.4324, 
  };

  const handleSetLocation = () => {
    const lineCoordinates = [
      {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
      },
      {
        latitude: markerCoordinate.latitude,
        longitude: markerCoordinate.longitude,
      },
    ];

    setCoordinates(lineCoordinates);

    setShowSetLocationButton(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={markerCoordinate}
          title="Đây là đánh dấu"
          description="Vị trí cụ thể"
          image={require("../../assets/images/lct.png")}
        />
        <Marker
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          title="Vị trí hiện tại của bạn"
          description="Bạn đang ở đây"
        />
        {coordinates.length > 0 && (
          <Polyline
            coordinates={coordinates}
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
      </MapView>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
      {showSetLocationButton && (
        <TouchableOpacity
          style={styles.setLocationButton}
          onPress={handleSetLocation}
        >
          <Text style={styles.setLocationButtonText}>Set Location</Text>
        </TouchableOpacity>
      )}
      {/* Phần khác thay thế nút "Set Location" */}
      {!showSetLocationButton && (
        <View style={styles.replacementContent}>
          <Text style={{ marginBottom: 15, fontWeight: "bold" }}>
            Track Orders
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              height: 80,
              borderRadius: 20,
            }}
          >
            <View>
              <Image source={require("../../assets/images/Klein.png")} />
            </View>
            <View style={{}}>
              <Text style={{ fontWeight: "bold" }}>Mr Kemplas</Text>
              <Text style={{ color: "#22242E" }}>25 minutes on the way</Text>
            </View>
          </View>
          <View style={{flexDirection:"row"}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                width: 300,
                top: 10,
                height: 40,
                borderRadius: 10,
              }}
            >
              <View>
                <Image source={require("../../assets/icons/call.png")} />
              </View>
              <View>
                <Text style={{ left: 10 }}>Call</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#6B50F6",
                width: 90,
                top: 10,
                left:10,
                height: 40,
                borderRadius: 10,
              }}
            >
              <View>
                <Image source={require("../../assets/icons/mess.png")} />
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: "absolute",
    top: 100,
    left: 10,
    right: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    zIndex: 1,
  },
  input: {
    height: 40,
  },
  setLocationButton: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: "#6B50F6",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  setLocationButtonText: {
    color: "white",
    fontSize: 16,
  },
  replacementContent: {
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 20,
    height: 190,
  },
});

export default Destination;