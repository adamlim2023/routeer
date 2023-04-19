import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Card from "components/common/Card";

const GoogleMap = () => {
  const [zoom, setZoom] = useState(11);
  const mapInfo = {
    position: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom,
  };

  return (
    <Card className="p-4">
      <div className="w-full h-80 rounded-[10px] border border-cyanblue overflow-hidden mb-2 relative">
        <GoogleMapReact
          defaultCenter={mapInfo.position}
          zoom={zoom}
          options={{ fullscreenControl: false, zoomControl: false }}
        />
        <div className="w-8 bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] rounded-[10px] absolute top-6 left-6 flex flex-col items-center px-1 py-2 shadow-theme">
          <button
            className="w-6 h-6 mb-2 flex items-center justify-center"
            onClick={() => zoom < 22 && setZoom(zoom + 1)}
          >
            <img src="/images/icons/plus_hotpink.svg" alt="" />
          </button>
          <button
            className="w-6 h-6 mb-2 flex items-center justify-center"
            onClick={() => zoom > 1 && setZoom(zoom - 1)}
          >
            <img src="/images/icons/minus_hotpink.svg" alt="" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center">
            <img src="/images/icons/marker_cyanblue.svg" alt="" />
          </button>
        </div>
      </div>
      <p className="flex items-center">
        <span className="text-base text-darkgray mr-2 leading-none">
          Radius in which you operate
        </span>
        <img src="/images/icons/info.svg" alt="" />
      </p>
    </Card>
  );
};

export default GoogleMap;
