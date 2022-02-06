import React from "react";
// import GoogleMapReact from "google-map-react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapMarker from "../MapMarker/MapMarker";
import "./Map.css";

const containerStyle = {
  height: "50vh",
  width: "40vw",
};

const center = {
  lat: 37.85813255424837,
  lng: -122.46768748944913,
};

const location = {
  lat: 37.7896664,
  lng: -122.4326249,
};

const Map = () => (
  <div className="map-border">
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        clickableIcons={false}
        zoom={9}
      >
        <MapMarker location={location} />
      </GoogleMap>
    </LoadScript>
  </div>
);

export default Map;
