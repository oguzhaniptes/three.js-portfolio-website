import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const MapChart = () => {
  
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-24.0, -50.0, 0],
        center: [-5, -3],
        scale: 1800
      }}
      style={{
        width:'100%',
        height:'100%',
        
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#B492D6"
        stroke="#0B0037"
        strokeWidth={1}
      >
        {({ geographies }:any) =>
          geographies.map((geo:any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[32.3522, 38.8566]}
        dx={-40}
        dy={-20}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" y="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Konya"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
