import React, { useState } from "react";
import MainLayout from "components/layout/MainLayuout";
import Button from "components/common/Button";
import Checkbox from "components/common/Checkbox";
import { Col, Row } from "components/common/Grid";
import GoogleMap from "components/common/GoogleMap";
import TextField from "components/common/TextField";
import MultiSelect from "components/common/MultiSelect";
import TimeField from "components/common/TimeField";
import Dropzone from "components/common/Dropzone";
import Modal from "components/common/Modal";
import TransportProviderModal from "features/search/TransportProviderModal";

const AddRoute = () => {
  const transportProviderOptions = [{ value: 1, label: "BRADLEY’S BUSES" }];
  const transportTypeOptions = [{ value: 1, label: "Scooter" }];
  const [timatebleFiles, setTimatebleFiles] = useState<string[]>([]);
  const [routePhotos, setRoutePhotos] = useState<string[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleTimatebleDrop = (selectedFiles) => {
    let fileList = timatebleFiles;
    for (var i = 0; i < selectedFiles.length; i++) {
      if (!selectedFiles[i].name) return;
      fileList.push(selectedFiles[i].name);
    }
    setTimatebleFiles(fileList);
  };

  const handleDropRoutePhotos = (selectedFiles) => {
    let fileList = routePhotos;
    for (var i = 0; i < selectedFiles.length; i++) {
      if (!selectedFiles[i].name) return;
      fileList.push(selectedFiles[i].name);
    }
    setRoutePhotos(fileList);
  };

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto pt-[65px] px-4 tablet:px-16 relative">
        <div className="pt-5 tablet:pt-6 desktop:pt-7 pb-8 tablet:pb-7 desktop:pb-[100px]">
          <Row className="mx-0 tablet:-mx-2 desktop:-mx-4">
            <Col
              size={["full", "1/2", "1/2"]}
              className="px-0 tablet:px-2 desktop:px-4"
            >
              <p className="text-[40px] font-bold text-hotpink mb-8 tablet:mb-10 desktop:mb-[54px] tracking-[-1px]">
                Add Route
              </p>
              <div>
                <div className="mb-5">
                  <div className="mb-2">
                    <MultiSelect
                      id="transportProvider"
                      instanceId="transportProvider"
                      label="Transport Provider*"
                      options={transportProviderOptions}
                      defaultValue={[transportProviderOptions[0]]}
                    />
                  </div>
                  <p className="text-base text-darkgray mb-3 desktop:mb-5">
                    Can’t find the Transport Provider?{" "}
                    <span
                      className="text-hotpink font-bold underline cursor-pointer"
                      onClick={() => setIsShowModal(true)}
                    >
                      Register it first
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap mx-0 desktop:-mx-4">
                  <div className="w-full desktop:w-1/2 px-0 desktop:px-4 mb-3 desktop:mb-[22px]">
                    <TextField
                      label="From*"
                      defaultValue="Penzance, UK"
                      icon={<img src="/images/icons/from_marker.svg" />}
                    />
                  </div>
                  <div className="w-full desktop:w-1/2 px-0 desktop:px-4 mb-3 desktop:mb-[22px]">
                    <TextField
                      label="To*"
                      defaultValue="Land’s End, A30, Cornwall  UK"
                      icon={<img src="/images/icons/to_marker.svg" />}
                    />
                  </div>
                  <div className="w-full desktop:w-1/2 px-0 desktop:px-4 mb-3 desktop:mb-[22px]">
                    <MultiSelect
                      id="transportProvider"
                      instanceId="transportProvider"
                      label="Type of transport*"
                      options={transportTypeOptions}
                      defaultValue={[transportTypeOptions[0]]}
                    />
                  </div>
                  <div className="w-full desktop:w-1/2 px-0 desktop:px-4 mb-3 desktop:mb-[22px]">
                    <TimeField
                      label="Journey Time*"
                      defaultHourValue={5}
                      defaultMinuteValue={25}
                    />
                  </div>
                  <div className="w-full desktop:w-1/2 px-0 desktop:px-4 mb-3 desktop:mb-[22px]">
                    <TextField
                      label="Journey Cost*"
                      defaultValue="194,37"
                      icon={
                        <span className="p-3 text-xs font-bold text-cyanblue">
                          GBP
                        </span>
                      }
                    />
                  </div>
                </div>
                <div className="mb-6 tablet:mb-8 desktop:mb-4">
                  <div className="flex items-center mb-8">
                    <img
                      src="/images/icons/virus.svg"
                      className="mr-2"
                      alt=""
                    />
                    <span className="text-base font-bold text-orange">
                      COVID-19 Precautions
                    </span>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox label="Barriers between passengers" />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox label="Free hand sanitiser" />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox
                        checked={true}
                        label="Cleaning station (for public use)"
                      />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox
                        checked={true}
                        label="Passenger capacity control"
                      />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox label="Driver/staff wear mask" />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox label="Spaced out seating/standing areas" />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox label="Floor marking for social distancing" />
                    </div>
                    <div className="w-full desktop:w-1/2 mb-[22px]">
                      <Checkbox label="Visible cleaning regime" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              size={["full", "1/2", "1/2"]}
              className="px-0 tablet:px-2 desktop:px-4 mb-10"
            >
              <GoogleMap className="h-[650px]" />
            </Col>
          </Row>
          <Row className="mx-0 tablet:-mx-2 desktop:-mx-4 mb-[18px]">
            <Col
              className="px-0 tablet:px-2 desktop:px-4"
              size={["full", "full", "1/2"]}
            >
              <div className="mb-[22px]">
                <TextField
                  type="textarea"
                  className="h-[150px]"
                  label={
                    <p className="text-base text-darkgray">
                      <span className="font-bold">Route Description</span> (not
                      a review)
                    </p>
                  }
                  placeholder="IMPORTANT: Write your pick up and drop off instructions here, so that travellers can easily find you. Remember to keep it simple!"
                />
              </div>
              <div className="mb-[22px]">
                <TextField
                  label="Website"
                  placeholder="If you have a link to the provider’s route page or website, please insert here"
                />
              </div>
              <div className="mb-[22px]">
                <TextField
                  label={
                    <p className="text-base text-darkgray">
                      <span className="font-bold">Timetable</span> (link)
                    </p>
                  }
                  placeholder="If you have a website link for your timetable, please insert here"
                />
              </div>
              <div className="mb-[22px]">
                <TextField
                  label="Book Tickets"
                  placeholder="If you have a website link for booking tickets for your service, please insert here"
                />
              </div>
            </Col>
            <Col
              className="px-0 tablet:px-2 desktop:px-4"
              size={["full", "full", "1/2"]}
            >
              <div className="mb-[22px]">
                <Dropzone
                  handleDrop={handleTimatebleDrop}
                  label={
                    <p className="text-base text-darkgray">
                      <span className="font-bold">Timateble</span> (images)
                    </p>
                  }
                  files={timatebleFiles}
                />
              </div>
              <div className="mb-[22px]">
                <Dropzone
                  handleDrop={handleDropRoutePhotos}
                  label="Route photos"
                  files={routePhotos}
                />
              </div>
            </Col>
          </Row>
          <div className="flex justify-center">
            <Button variant="danger">submit route</Button>
          </div>
        </div>
        <Modal isShow={isShowModal} handleClose={() => setIsShowModal(false)}>
          <TransportProviderModal />
        </Modal>
      </div>
    </MainLayout>
  );
};

export default AddRoute;
