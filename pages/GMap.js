import React, { useEffect, useRef } from "react";

const GMap = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    bushalt:
      "https://cdn2.iconfinder.com/data/icons/travels-tours-flat-vol-1/132/board__road__sign__bus__vehicle-512.png", //Bus halt
    stopsign:
      "https://cdn1.iconfinder.com/data/icons/transportation-filled-line-1/128/03_Stop_Sign-512.png", //Stop sign
    pedestrianblue:
      "https://cdn0.iconfinder.com/data/icons/road-sign-2/512/g25063-512.png", //Pedestrian crossing blue
    pedestrianyellow:
      "https://cdn2.iconfinder.com/data/icons/transportation-flat/2048/1238_-_Pedestrian_Sign-512.png", //Pedestrian crossing yellow
    roundabout: "https://cdn-icons-png.flaticon.com/512/3753/3753186.png",
    pedestrianchildren:
      "https://cdn-icons-png.flaticon.com/512/2167/2167451.png",
    speedlimit60: "https://cdn-icons-png.flaticon.com/512/1340/1340323.png",
    rightbend: "https://cdn-icons-png.flaticon.com/512/3680/3680354.png",
    leftmergeahed:
      "https://cdn-icons.flaticon.com/png/512/5119/premium/5119631.png?token=exp=1656616491~hmac=a6c28f54f114358b6d5465d5e6073fde",
  };

  // list of the marker object along with icon
  const markerList = [
    //////////////////
    { lat: 7.40824, lng: 81.8302, icon: iconList.pedestrianblue },
    { lat: 7.40815, lng: 81.8303, icon: iconList.pedestrianblue },
    { lat: 7.40381, lng: 81.8313, icon: iconList.pedestrianblue },
    { lat: 7.40097, lng: 81.9321, icon: iconList.pedestrianblue },
    { lat: 7.39097, lng: 81.8353, icon: iconList.pedestrianblue },
    { lat: 7.38987, lng: 81.8352, icon: iconList.pedestrianblue },
    { lat: 7.38161, lng: 81.838, icon: iconList.pedestrianblue },
    { lat: 7.38127, lng: 81.8381, icon: iconList.pedestrianblue },
    { lat: 7.29632, lng: 81.8484, icon: iconList.pedestrianblue },
    { lat: 7.2445, lng: 81.8542, icon: iconList.pedestrianblue },
    { lat: 7.40792, lng: 81.8303, icon: iconList.pedestrianblue },
    { lat: 7.40669, lng: 81.8308, icon: iconList.pedestrianblue },
    //  { lat: 7.39751, lng: 81.833, icon: iconList.pedestrianblue },
    { lat: 7.24928, lng: 81.8544, icon: iconList.pedestrianblue },
    ///////////////////////////////////////////////////////////
    { lat: 7.40338, lng: 81.8315, icon: iconList.bushalt },
    { lat: 7.3763, lng: 81.839, icon: iconList.bushalt },
    { lat: 7.29632, lng: 81.8484, icon: iconList.bushalt },
    { lat: 7.23239, lng: 81.8514, icon: iconList.bushalt },
    { lat: 7.3763, lng: 81.839, icon: iconList.bushalt },
    //////////////////////////////////////////////////////////
    { lat: 7.40819, lng: 81.8303, icon: iconList.stopsign },
    //////////////////////////////////////////////////////////
    { lat: 7.4084, lng: 81.8302, icon: iconList.pedestrianyellow },
    { lat: 7.40617, lng: 81.8311, icon: iconList.pedestrianyellow },
    { lat: 7.40608, lng: 81.8311, icon: iconList.pedestrianyellow },
    { lat: 7.40309, lng: 81.8316, icon: iconList.pedestrianyellow },
    { lat: 7.40153, lng: 81.8319, icon: iconList.pedestrianyellow },
    { lat: 7.39786, lng: 81.8329, icon: iconList.pedestrianyellow },
    { lat: 7.37705, lng: 81.8388, icon: iconList.pedestrianyellow },
    { lat: 7.29705, lng: 81.8483, icon: iconList.pedestrianyellow },
    { lat: 7.23785, lng: 81.8527, icon: iconList.pedestrianyellow },
    { lat: 7.21928, lng: 81.8497, icon: iconList.pedestrianyellow },
    { lat: 7.40857, lng: 81.8301, icon: iconList.pedestrianyellow },
    //{ lat: 7.39488, lng: 81.834, icon: iconList.pedestrianyellow },
    { lat: 7.37705, lng: 81.3888, icon: iconList.pedestrianyellow },
    { lat: 7.32849, lng: 81.8469, icon: iconList.pedestrianyellow },
    ///////////////////////////////////////////////////////////
    { lat: 7.37608, lng: 81.8391, icon: iconList.roundabout },
    //////////////////////////////////////////////////////////
    { lat: 7.38525, lng: 81.8371, icon: iconList.pedestrianchildren },
    { lat: 7.38524, lng: 81.8371, icon: iconList.pedestrianchildren },
    //////////////////////////////////////////////////////////
    { lat: 7.38392, lng: 81.8375, icon: iconList.speedlimit60 },
    //////////////////////////////////////////////////////////
    { lat: 7.38842, lng: 81.8357, icon: iconList.rightbend },
    //////////////////////////////////////////////////////////
    { lat: 7.399919, lng: 81.8327, icon: iconList.leftmergeahed },
    //////////////////////////////////////////////////////////
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
