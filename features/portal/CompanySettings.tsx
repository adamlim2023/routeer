import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Col, Row } from "components/common/Grid";
import Card from "components/common/Card";
import Dropzone from "components/common/Dropzone";
import MultiSelect from "components/common/MultiSelect";
import ReactSlider from "react-slider";

const CompanySettings = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const handleDropPhotos = (selectedFiles) => {
    let fileList = photos;
    for (var i = 0; i < selectedFiles.length; i++) {
      if (!selectedFiles[i].name) return;
      fileList.push(selectedFiles[i].name);
    }
    setPhotos(fileList);
  };

  const [zoom, setZoom] = useState(11);
  const mapInfo = {
    position: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom,
  };

  const locationOptions = [
    {
      value: "london",
      label: "London, UK",
    },
  ];

  return (
    <div>
      <Row className="mb-[25px] tablet:mb-[30px]">
        <Col size={["full", "5/12", "5/12"]} />
        <Col size={["full", "7/12", "7/12"]}>
          <p className="text-xl tablet:text-2xl text-cyanblue">
            Company Settings
          </p>
        </Col>
      </Row>
      <Row className="mb-6 tablet:mb-5 pb-5 border-b border-cyanblue">
        <Col
          size={["full", "5/12", "5/12"]}
          className="flex justify-start tablet:justify-end"
        >
          <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
            Photos
          </p>
        </Col>
        <Col size={["full", "7/12", "7/12"]}>
          <Dropzone files={photos} handleDrop={handleDropPhotos} />
        </Col>
      </Row>
      <Row className="mb-6 tablet:mb-5 pt-5">
        <Col
          size={["full", "5/12", "5/12"]}
          className="flex justify-start tablet:justify-end items-center"
        >
          <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
            Location
          </p>
        </Col>
        <Col size={["full", "7/12", "7/12"]}>
          <MultiSelect options={locationOptions} />
        </Col>
      </Row>
      <Row className="mb-10">
        <Col
          size={["full", "5/12", "5/12"]}
          className="flex justify-start tablet:justify-end items-start"
        >
          <p className="flex items-center text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
            Radius of operations{" "}
            <img src="/images/icons/info.svg" className="ml-1" alt="" />
          </p>
        </Col>
        <Col size={["full", "7/12", "7/12"]}>
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
            <div className="flex items-center">
              <span className="text-base text-darkgray">10 mi</span>
              <div className="w-[1px] h-[26px] bg-hotpink mx-4"></div>
              <ReactSlider
                className="w-[300px] h-2 rounded-full bg-gradient-to-b from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] shadow-smallInner"
                thumbClassName="w-6 h-6 -top-2 shadow-theme bg-hotpink rounded-full border-2 border-light cursor-pointer"
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CompanySettings;
