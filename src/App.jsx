import React, { useRef, useEffect } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

import "./App.css";

function App() {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new Map({
        basemap: "topo-vector"
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        zoom: 7,
        center: [-111, 39.7]
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}

export default App;
