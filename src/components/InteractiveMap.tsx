"use client";

import Map, {
  GeolocateControl,
  NavigationControl,
  type MapRef,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTernaryDarkMode } from "usehooks-ts";
import { env } from "~/env.mjs";
import { useMapStore } from "~/lib/stores/map";

import { cities } from "./data/cities";

type DisplayCity = {
  name: string;
  latitude: number;
  longitude: number;
  zoom: number;
} & Record<string, unknown>;

const TRANSITION_DURATION = 7000;

export default function InteractiveMap() {
  const mapRef = useRef<MapRef>(null);
  const { isDarkMode } = useTernaryDarkMode();
  const { viewState, cycleDestinations, setCycleStatus, setViewState } =
    useMapStore();
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedCity, setSelectedCity] = useState<DisplayCity>({
    name: "San Francisco",
    latitude: 37.787804,
    longitude: -122.4075,
    zoom: 2,
  });

  useEffect(() => {
    if (!mapLoaded) return;
    mapRef.current?.flyTo({
      center: [selectedCity.longitude, selectedCity.latitude],
      zoom: selectedCity.zoom,
      duration: TRANSITION_DURATION,
    });
  }, [mapLoaded, selectedCity]);

  useEffect(() => {
    if (!cycleDestinations) {
      clearInterval(0);
      return;
    }
    let count = 0;
    setInterval(() => {
      setSelectedCity({
        ...cities[count % cities.length],
        zoom: 4,
      } as DisplayCity);
      count++;
    }, TRANSITION_DURATION * 2);
  }, [cycleDestinations]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: mapLoaded ? 1 : 0 }}
    >
      <Map
        {...viewState}
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        ref={mapRef}
        projection="globe"
        onMove={(evt) => setViewState(evt.viewState)}
        onLoad={() => setMapLoaded(true)}
        mapStyle={
          isDarkMode
            ? "mapbox://styles/ianyimi/clj9twzbr003f01pwf5r148kk"
            : "mapbox://styles/haxzie/cjxg35uth252i1cmu2r0gomx7"
        }
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        attributionControl={false}
      >
        {/* <AttributionControl compact /> */}
        {/* <NavigationControl position="bottom-right" visualizePitch /> */}
        {/* <GeolocateControl
          ref={geolocateControlRef}
          position="bottom-right"
          trackUserLocation
          showUserHeading
        /> */}
      </Map>
    </motion.div>
  );
}
