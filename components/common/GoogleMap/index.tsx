import React from "react";
import GoogleMapReact from "google-map-react";
import Card from "components/common/Card";

const GoogleMap = (props) => {
  const mapInfo = {
    position: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  return (
    <Card>
      <div className={`rounded-[20px] overflow-hidden ${props.className}`}>
        <GoogleMapReact
          defaultCenter={mapInfo.position}
          defaultZoom={mapInfo.zoom}
        />
      </div>
    </Card>
  );
};

export default GoogleMap;
