import React, { useRef, useEffect } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import '@esri/calcite-components/dist/components/calcite-shell';
// Local assets
setAssetPath(window.location.href);

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

  return (
  <calcite-shell content-behind>
    <div slot="header" class="custom-header">
    <h2 slot="header" id="header-title">
    <span class="custom-header-title-main">Utah Geological Survey</span>
    <span class="custom-header-title-divider hidden-xs"></span>
        <span class="custom-header-title-sub hidden-xs">Utah Geological Survey</span>
    </h2>
    </div>
  <calcite-shell-panel slot="panel-start" detached>

  <calcite-action-bar slot="action-bar">
          <calcite-action data-action-id="basemaps" icon="basemap" text="Basemaps"></calcite-action>
          <calcite-action data-action-id="legend" icon="legend" text="Legend"></calcite-action>
          <calcite-action data-action-id="bookmarks" icon="bookmark" text="Bookmarks"></calcite-action>
          <calcite-action data-action-id="information" icon="information" text="Information"></calcite-action>
  </calcite-action-bar>

        <calcite-panel heading="Basemaps" height-scale="l" data-panel-id="basemaps" hidden>
          <div id="basemaps-container"></div>
        </calcite-panel>
        <calcite-panel heading="Legend" height-scale="l" data-panel-id="legend" hidden>
          <div id="legend-container"></div>
        </calcite-panel>
        <calcite-panel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" hidden>
          <div id="bookmarks-container"></div>
        </calcite-panel>
        <calcite-panel heading="Details" data-panel-id="information" hidden>
          <div id="info-content">
          </div>
        </calcite-panel>
  </calcite-shell-panel>
  <div className="mapDiv" ref={mapDiv}></div>
  </calcite-shell>
)}

export default App;
