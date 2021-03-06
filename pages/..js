import React, { useState, useEffect } from "react";
import GMap from "./GMap";

// API key of the google map
const GOOGLE_MAP_API_KEY = "AIzaSyBzSH3YoRduSZQ842Q6Io2jLF9uOnLLvjs";

// load google map script
const loadGoogleMapScript = (callback) => {
  if (
    typeof window.google === "object" &&
    typeof window.google.maps === "object"
  ) {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
};

const App = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true);
    });
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Road Sign Detection and Identification using GSV Images
      </h1>
      <br />

      {!loadMap ? <div>Loading...</div> : <GMap />}
    </div>
  );
};

export default App;
