import React, { useEffect, useRef } from "react";

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    icon1:
      "https://cdn2.iconfinder.com/data/icons/travels-tours-flat-vol-1/132/board__road__sign__bus__vehicle-512.png",
    icon2:
      "https://cdn1.iconfinder.com/data/icons/transportation-filled-line-1/128/03_Stop_Sign-512.png",
    icon3:
      "https://cdn0.iconfinder.com/data/icons/road-sign-2/512/g25063-512.png",
    icon4:
      "https://cdn2.iconfinder.com/data/icons/transportation-flat/2048/1238_-_Pedestrian_Sign-512.png",
  };

  // list of the marker object along with icon
  const markerList = [
    { lat: 7.29632, lng: 81.8484, icon: iconList.icon1 },
    { lat: 7.40338, lng: 81.8315, icon: iconList.icon1 },
    { lat: 7.40819, lng: 81.8303, icon: iconList.icon2 },
    { lat: 7.39097, lng: 81.8353, icon: iconList.icon3 },
    { lat: 7.40097, lng: 81.8321, icon: iconList.icon3 },
    { lat: 7.40381, lng: 81.8316, icon: iconList.icon3 },
    { lat: 7.40097, lng: 81.83217, icon: iconList.icon3 },
    { lat: 7.38987, lng: 81.83526, icon: iconList.icon3 },
    { lat: 7.38127, lng: 81.83812, icon: iconList.icon3 },
    { lat: 7.21928, lng: 81.8497, icon: iconList.icon4 },
    { lat: 7.40381, lng: 81.8313, icon: iconList.icon4 },
    { lat: 7.387, lng: 81.83645, icon: iconList.icon4 },
    { lat: 7.32849, lng: 81.84698, icon: iconList.icon4 },
  ];

  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map((x) => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);

  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 7.29705, lng: 81.8483 },
      zoom: 8,
    });
  };

  // create marker on google map
  const createMarker = (markerObj) =>
    new window.google.maps.Marker({
      position: { lat: markerObj.lat, lng: markerObj.lng },
      map: googleMap,
      icon: {
        url: markerObj.icon,
        // set marker width and height
        scaledSize: new window.google.maps.Size(50, 50),
      },
    });

  return <div ref={googleMapRef} style={{ width: 1420, height: 650 }} />;
};

export default GMap;
